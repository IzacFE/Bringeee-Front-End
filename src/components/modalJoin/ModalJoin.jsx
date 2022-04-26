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

  const handleDaftarCos = () => {
    const data = {
      yourEmail: emailCos,
      yourPass: passwordCos,
      yourNama: namaCos,
      jenisKelamin: jenisKelaminCos,
      yourUmur: umurCos,
      yourAlamat: alamatCos,
      avatar: avatarCos,
    };

    console.log(data);
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
