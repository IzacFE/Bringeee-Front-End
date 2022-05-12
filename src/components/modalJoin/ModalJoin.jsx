import React, { useContext, useState } from "react";
import {
  Modal,
  Button,
  Group,
  Input,
  InputWrapper,
  Tabs,
  Radio,
  RadioGroup,
  NativeSelect,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { ChevronDown, X } from "tabler-icons-react";
import axios from "axios";
import { RoleContext, TokenContext } from "../../App";

const ModalJoin = (props) => {
  const { setTokenCtx } = useContext(TokenContext);
  const { setRoleCtx } = useContext(RoleContext);
  // stateDataCostumer
  const [emailCos, setEmailCos] = useState("");
  const [passwordCos, setPasswordCos] = useState("");
  const [namaCos, setNamaCos] = useState("");
  const [phoneNumb, setPhoneNumb] = useState("");
  const [jenisKelaminCos, setJenisKelaminCos] = useState("");
  const [dobCos, setDobCos] = useState("");
  const [alamatCos, setAlamatCos] = useState("");
  const [avatarCos, setAvatarCos] = useState("");
  //stateDataDriver
  const [emailDriver, setEmailDriver] = useState("");
  const [passwordDriver, setPasswordDriver] = useState("");
  const [namaDriver, setNamaDriver] = useState("");
  const [phoneDriver, setPhoneDriver] = useState("");
  const [jenisKelaminDriver, setJenisKelaminDriver] = useState("");
  const [dobDriver, setDobDriver] = useState("");
  const [umurDriver, setUmurDriver] = useState("");
  const [alamatDriver, setAlamatDriver] = useState("");
  const [avatarDriver, setAvatarDriver] = useState("");
  const [jenisTruk, setJenisTruk] = useState("1");
  const [nik, setNik] = useState("");
  const [ktp, setKtp] = useState("");
  const [sim, setSim] = useState("");
  const [stnk, setStnk] = useState("");
  const [vhcPict, setVhcPict] = useState("");
  const [nomorKendaraan, setNomorKendaraan] = useState("");

  const dataSaver = (loginData) => {
    localStorage.clear();
    localStorage.setItem("token", loginData.token);
    localStorage.setItem("role", loginData.user.role);
    setTokenCtx(loginData.token);
    setRoleCtx(loginData.user.role);
    if (loginData.user.role === "driver") {
      localStorage.setItem("account_status", loginData.user.account_status);
    }
  };

  const handleDaftarCos = async () => {
    const formData = new FormData();
    formData.append("name", namaCos);
    formData.append("email", emailCos);
    formData.append("password", passwordCos);
    formData.append("phone_number", phoneNumb);
    formData.append("gender", jenisKelaminCos);
    formData.append("address", alamatCos);
    formData.append("avatar", avatarCos);
    formData.append("dob", dobCos);

    await axios
      .post(`https://aws.wildani.tech/api/customers`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        dataSaver(response.data.data);
        showNotification({
          autoClose: 5000,
          title: "Selamat datang...",
          message: "Akun berhasil dibuat",
          icon: <X size={18} />,
          color: "green",
        });
      })
      .catch((error) => {
        let info = error.response.data.code;
        let result;
        if (info === 500) {
          result = "Email telah terpakai";
        } else {
          result = "Akun gagal dibuat";
        }
        showNotification({
          autoClose: 10000,
          title: "Maaf",
          message: result,
          icon: <X size={18} />,
          color: "red",
        });
      });
  };

  const handleDaftarDriver = async () => {
    const formData = new FormData();
    formData.append("name", namaDriver);
    formData.append("email", emailDriver);
    formData.append("password", passwordDriver);
    formData.append("phone_number", phoneDriver);
    formData.append("gender", jenisKelaminDriver);
    formData.append("address", alamatDriver);
    formData.append("avatar", avatarDriver);
    formData.append("dob", dobDriver);
    formData.append("truck_type_id", jenisTruk);
    formData.append("ktp_file", ktp);
    formData.append("stnk_file", stnk);
    formData.append("driver_license_file", sim);
    formData.append("age", umurDriver);
    formData.append("vehicle_identifier", nomorKendaraan);
    formData.append("nik", nik);
    formData.append("vehicle_picture", vhcPict);

    await axios
      .post(`https://aws.wildani.tech/api/drivers`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        showNotification({
          autoClose: 5000,
          title: "Akun Berhasil Dibuat",
          message: "Tunggu konfirmasi driver",
          icon: <X size={18} />,
          color: "green",
        });
      })
      .catch((error) => {
        let info = error.response.data.code;
        let result;
        if (info === 500) {
          result = "Email telah terpakai";
        } else {
          result = "Akun gagal dibuat";
        }
        showNotification({
          autoClose: 10000,
          title: "Maaf",
          message: result,
          icon: <X size={18} />,
          color: "red",
        });
      });
  };

  return (
    <>
      <Modal
        centered
        opened={props.openedModal}
        onClose={props.closedModal}
        title="Daftar"
        styles={{
          title: {
            color: "#f59e0b",
            fontWeight: "700",
            fontSize: "25px",
          },
        }}
      >
        <Tabs color="yellow">
          <Tabs.Tab label="Kustomer">
            <InputWrapper
              id="emailCos"
              required
              label="Info : upload file dalam bentuk jpg, jpeg, png, webp, bmp"
            />

            <InputWrapper id="emailCos" required label="Email">
              <Input
                id="emailCos"
                type="email"
                placeholder=""
                onChange={(e) => setEmailCos(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper id="passwordCos" required label="Kata Sandi">
              <Input
                id="passwordCos"
                type="password"
                placeholder=""
                onChange={(e) => setPasswordCos(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper id="nama" required label="Nama">
              <Input
                id="nama"
                type="text"
                placeholder=""
                onChange={(e) => setNamaCos(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper id="phone" required label="Nomor handphone">
              <Input
                id="phone"
                type="tel"
                placeholder=""
                onChange={(e) => setPhoneNumb(e.target.value)}
              />
            </InputWrapper>

            <RadioGroup
              label="Jenis Kelamin"
              color="yellow"
              onChange={setJenisKelaminCos}
              required
            >
              <Radio value="laki-laki" label="Laki-Laki" />
              <Radio value="perempuan" label="Perempuan" />
            </RadioGroup>

            <InputWrapper id="dobCos" required label="Tanggal lahir">
              <Input
                id="dobCos"
                type="date"
                placeholder=""
                onChange={(e) => setDobCos(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper id="alamatCos" required label="Alamat">
              <Input
                id="alamatCos"
                type="text"
                placeholder=""
                onChange={(e) => setAlamatCos(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper id="avatarCos" required label="Avatar">
              <Input
                id="avatarCos"
                type="file"
                placeholder=""
                onChange={(e) => setAvatarCos(e.target.files[0])}
              />
            </InputWrapper>

            <Group position="right" className="my-5">
              <span onClick={props.regisKustomer}>
                <Button
                  className="bg-amber-500 hover:bg-amber-400 text-stone-700"
                  onClick={() => handleDaftarCos()}
                >
                  Daftar
                </Button>
              </span>
            </Group>
          </Tabs.Tab>

          {/* driver */}
          <Tabs.Tab label="Driver">
            <InputWrapper
              id="emailCos"
              required
              label="Info : upload file dalam bentuk jpg, jpeg, png, webp, bmp"
            />

            <InputWrapper id="emailDriver" required label="Email">
              <Input
                id="emailDriver"
                type="email"
                placeholder=""
                onChange={(e) => setEmailDriver(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper id="passwordDriver" required label="Kata Sandi">
              <Input
                id="passwordDriver"
                type="password"
                placeholder=""
                onChange={(e) => setPasswordDriver(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper id="nama" required label="Nama">
              <Input
                id="nama"
                type="text"
                placeholder=""
                onChange={(e) => setNamaDriver(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper id="phone" required label="Nomor handphone">
              <Input
                id="phone"
                type="tel"
                placeholder=""
                onChange={(e) => setPhoneDriver(e.target.value)}
              />
            </InputWrapper>

            <RadioGroup
              label="Jenis Kelamin"
              color="yellow"
              onChange={setJenisKelaminDriver}
              required
            >
              <Radio value="laki-laki" label="Laki-Laki" />
              <Radio value="perempuan" label="Perempuan" />
            </RadioGroup>

            <InputWrapper id="dobCos" required label="Tanggal lahir">
              <Input
                id="dobCos"
                type="date"
                placeholder=""
                onChange={(e) => setDobDriver(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper id="umurDriver" required label="Umur">
              <Input
                id="umurDriver"
                type="number"
                placeholder=""
                onChange={(e) => setUmurDriver(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper id="alamatDriver" required label="Alamat">
              <Input
                id="alamatDriver"
                type="text"
                placeholder=""
                onChange={(e) => setAlamatDriver(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper id="avatarDriver" required label="Avatar">
              <Input
                id="avatarDriver"
                type="file"
                placeholder=""
                onChange={(e) => setAvatarDriver(e.target.files[0])}
              />
            </InputWrapper>

            <InputWrapper id="nik" required label="NIK">
              <Input
                id="nik"
                type="number"
                placeholder=""
                onChange={(e) => setNik(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper id="ktp" required label="KTP">
              <Input
                id="ktp"
                type="file"
                placeholder=""
                onChange={(e) => setKtp(e.target.files[0])}
              />
            </InputWrapper>

            <InputWrapper id="sim" required label="SIM">
              <Input
                id="sim"
                type="file"
                placeholder=""
                onChange={(e) => setSim(e.target.files[0])}
              />
            </InputWrapper>

            <InputWrapper id="stnk" required label="STNK">
              <Input
                id="stnk"
                type="file"
                placeholder=""
                onChange={(e) => setStnk(e.target.files[0])}
              />
            </InputWrapper>

            <InputWrapper id="kendaraan" required label="Foto Kendaraan">
              <Input
                id="vehiclePict"
                type="file"
                placeholder=""
                onChange={(e) => setVhcPict(e.target.files[0])}
              />
            </InputWrapper>

            <NativeSelect
              label="Jenis Truk"
              required
              onChange={(e) => setJenisTruk(e.target.value)}
              data={[
                { value: "1", label: "Pickup Truck - A" },
                { value: "2", label: "Pickup Truck - B" },
                { value: "3", label: "Mobil Box - Tier A" },
                { value: "4", label: "Mobil Box - Tier B" },
                { value: "5", label: "Fuso Truck - Tier A" },
                { value: "6", label: "Fuso Truck - Tier B" },
              ]}
              rightSection={<ChevronDown size={14} />}
              rightSectionWidth={40}
            />

            <InputWrapper id="plat" required label="Nomor Kendaraan">
              <Input
                id="plat"
                type="text"
                placeholder=""
                onChange={(e) => setNomorKendaraan(e.target.value)}
              />
            </InputWrapper>

            <Group position="right" className="my-5">
              <span onClick={props.daftarDriver}>
                <Button
                  className="bg-amber-500 hover:bg-amber-400 text-stone-700"
                  onClick={() => handleDaftarDriver()}
                >
                  Daftar
                </Button>
              </span>
            </Group>
          </Tabs.Tab>
        </Tabs>
      </Modal>
    </>
  );
};

export default ModalJoin;
