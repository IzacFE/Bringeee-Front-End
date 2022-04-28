import React, { useState } from "react";
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
import { ChevronDown } from "tabler-icons-react";
import axios from "axios";

const ModalJoin = (props) => {
  // stateDataCostumer
  const [emailCos, setEmailCos] = useState("");
  const [passwordCos, setPasswordCos] = useState("");
  const [namaCos, setNamaCos] = useState("");
  const [jenisKelaminCos, setJenisKelaminCos] = useState("");
  const [umurCos, setUmurCos] = useState("");
  const [alamatCos, setAlamatCos] = useState("");
  const [avatarCos, setAvatarCos] = useState("");
  //stateDataDriver
  const [emailDriver, setEmailDriver] = useState("");
  const [passwordDriver, setPasswordDriver] = useState("");
  const [namaDriver, setNamaDriver] = useState("");
  const [jenisKelaminDriver, setJenisKelaminDriver] = useState("");
  const [umurDriver, setUmurDriver] = useState("");
  const [alamatDriver, setAlamatDriver] = useState("");
  const [avatarDriver, setAvatarDriver] = useState("");
  const [jenisTruk, setJenisTruk] = useState("");
  const [nik, setNik] = useState("");
  const [ktp, setKtp] = useState("");
  const [sim, setSim] = useState("");
  const [stnk, setStnk] = useState("");
  const [nomorKendaraan, setNomorKendaraan] = useState("");

  const handleDaftarCos = async () => {
    const formData = new FormData();
    formData.append("name", namaCos);
    formData.append("email", emailCos);
    formData.append("password", passwordCos);
    formData.append("gender", jenisKelaminCos);
    formData.append("address", alamatCos);
    formData.append("avatar", avatarCos);
    formData.append("dob", umurCos);
    console.log(formData);

    await axios
      .post(`/api/users`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // console.log(response);
        alert("berhasil");
        // Router.push("/authentication/login");
      })
      .catch((err) => {
        console.log(err);
        console.log("error");
        alert("gagal register");
      });
    // console.log(name);
    // console.log(email);
    // console.log(password);
    // console.log(gender);
    // console.log(address);
    // console.log(avatar);
    // console.log(dob);
  };

  const handleDaftarDriver = () => {
    const data = {
      yourEmail: emailDriver,
      yourPass: passwordDriver,
      yourNama: namaDriver,
      jenisKelamin: jenisKelaminDriver,
      yourUmur: umurDriver,
      yourAlamat: alamatDriver,
      avatar: avatarDriver,
      truk: jenisTruk,
    };

    console.log(data);
  };

  return (
    <>
      <Modal
        centered
        opened={props.openedModal}
        onClose={props.closedModal}
        title="Join"
        styles={{
          title: {
            color: "#f59e0b",
            fontWeight: "700",
            fontSize: "25px",
          },
        }}
      >
        <Tabs color="yellow">
          <Tabs.Tab label="Costumer">
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
            <RadioGroup
              label="Jenis Kelamin"
              color="dark"
              onChange={setJenisKelaminCos}
              required
            >
              <Radio value="laki-laki" label="Laki-Laki" />
              <Radio value="perempuan" label="Perempuan" />
            </RadioGroup>
            <InputWrapper id="umurCos" required label="Umur">
              <Input
                id="umurCos"
                type="number"
                placeholder=""
                onChange={(e) => setUmurCos(e.target.value)}
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
              <Button
                className="bg-amber-500 hover:bg-amber-400 text-stone-700"
                onClick={() => handleDaftarCos()}
              >
                Daftar
              </Button>
            </Group>
          </Tabs.Tab>
          <Tabs.Tab label="Driver">
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
            <RadioGroup
              label="Jenis Kelamin"
              color="dark"
              onChange={setJenisKelaminDriver}
              required
            >
              <Radio value="laki-laki" label="Laki-Laki" />
              <Radio value="perempuan" label="Perempuan" />
            </RadioGroup>
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
            <NativeSelect
              label="Jenis Truk"
              required
              onChange={(e) => setJenisTruk(e.target.value)}
              data={[
                { value: "1", label: "Pick Up" },
                { value: "2", label: "Truck Box" },
                { value: "3", label: "Triler" },
              ]}
              rightSection={<ChevronDown size={14} />}
              rightSectionWidth={40}
            />
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
            <InputWrapper id="plat" required label="Nomor Kendaraan">
              <Input
                id="plat"
                type="text"
                placeholder=""
                onChange={(e) => setNomorKendaraan(e.target.value)}
              />
            </InputWrapper>
            <Group position="right" className="my-5">
              <Button
                className="bg-amber-500 hover:bg-amber-400 text-stone-700"
                onClick={() => handleDaftarDriver()}
              >
                Daftar
              </Button>
            </Group>
          </Tabs.Tab>
        </Tabs>
      </Modal>
    </>
  );
};

export default ModalJoin;
