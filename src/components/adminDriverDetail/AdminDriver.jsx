import {
  Avatar,
  Button,
  Text,
  Image,
  Tabs,
  InputWrapper,
  Input,
  NativeSelect,
  Group,
} from "@mantine/core";
import React, { useContext, useState } from "react";
import styles from "./AdminDriver.module.css";
import { useModals } from "@mantine/modals";
import { ChevronDown } from "tabler-icons-react";
import axios from "axios";
import { TokenContext } from "../../App";

function AdminDriver(props) {
  const { tokenCtx } = useContext(TokenContext);
  const id = props.driverID;
  const modals = useModals();

  const [jenisTruk, setJenisTruk] = useState("1");
  const [nik, setNik] = useState("");
  const [ktp, setKtp] = useState("");
  const [sim, setSim] = useState("");
  const [stnk, setStnk] = useState("");
  const [vhcPict, setVhcPict] = useState("");
  const [nomorKendaraan, setNomorKendaraan] = useState("");

  const handleEditDriver = async () => {
    const formData = new FormData();

    formData.append("truck_type_id", jenisTruk);
    formData.append("ktp_file", ktp);
    formData.append("stnk_file", stnk);
    formData.append("driver_license_file", sim);
    formData.append("vehicle_identifier", nomorKendaraan);
    formData.append("nik", nik);
    formData.append("vehicle_picture", vhcPict);

    await axios
      .put(`https://aws.wildani.tech/api/drivers/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((response) => {})
      .catch((err) => {});
  };

  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: `Hapus Akun ${props.name}`,
      centered: true,
      children: (
        <>
          <Text size="sm">
            Anda akan menghapus akun {props.name}. Tekan tombol Hapus Akun untuk
            mengkonfirmasi penghapusan akun dan tekan tombol batal untuk
            membatalkan penghapusan akun
          </Text>
        </>
      ),
      labels: { confirm: "Hapus Akun", cancel: "Batal Hapus" },
      confirmProps: { color: "red" },
      onConfirm: props.delAccount,
    });

  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.left}`}>
          <Avatar src={props.image} size={240} radius={240} mx="auto" />

          {props.statusOrder !== "IDLE" && (
            <p className="text-amber-500 font-semibold text-[17px]  mt-4">
              Sedang memproses order
            </p>
          )}

          <div className="py-2">
            <label className="font-medium text-[17px]">
              Nama : {props.name}
            </label>
          </div>

          <div className="py-2">
            <label className="font-medium text-[17px]">
              Email : {props.email}
            </label>
          </div>

          <div className="py-2">
            <label className="font-medium text-[17px]">
              Jenis : {props.gender === "male" && "Laki-laki"}
              {props.gender === "laki-laki" && "Laki-laki"}
              {props.gender === "female" && "Perempuan"}
              {props.gender === "perempuan" && "Perempuan"}
            </label>
          </div>

          <div className="py-2">
            <label className="font-medium text-[17px]">
              Nomor HP : {props.phone}
            </label>
          </div>

          <div className="py-2">
            <label className="font-medium text-[17px]">
              Alamat : {props.address}
            </label>
          </div>

          <div className="py-2">
            <label className="font-medium text-[17px]">
              Tanggal lahir : {props.dob && props.dob.slice(0, 10)}
            </label>
          </div>

          <div className="py-2">
            <label className="font-medium text-[17px]">
              Umur : {props.age}
            </label>
          </div>

          <div className={`${styles.buttonContainer}`}>
            {props.akunStatus === "PENDING" && (
              <Button
                className="bg-amber-500"
                color="yellow"
                onClick={props.onConfirm}
              >
                Konfirmasi
              </Button>
            )}
            <Button
              className="bg-red-500"
              color="red"
              onClick={openDeleteModal}
            >
              Hapus Akun
            </Button>
          </div>
        </div>

        <div className={`${styles.right} rounded-md shadow-xl`}>
          <Tabs color="yellow">
            <Tabs.Tab label="Data Kredential">
              <div className="py-2">
                <label className="font-medium text-[17px]">
                  Jenis kendaraan : {props.vehicle}
                </label>
              </div>

              <div className="py-2">
                <label className="font-medium text-[17px]">
                  NIK : {props.nik}
                </label>
              </div>

              <div className="py-2">
                <label className="font-medium text-[17px]">
                  Nomor plat kendaraan : {props.plateNumb}
                </label>
              </div>

              <div className="py-2">
                <label className="font-medium text-[17px]">Foto KTP :</label>
              </div>
              <Image radius="md" src={props.ktp} width={240} className="my-3" />

              <div className="py-2">
                <label className="font-medium text-[17px]">Foto SIM :</label>
              </div>
              <Image radius="md" src={props.sim} width={240} className="my-3" />

              <div className="py-2">
                <label className="font-medium text-[17px]">Foto STNK :</label>
              </div>
              <Image
                radius="md"
                src={props.stnk}
                width={240}
                className="my-3"
              />

              <div className="py-2">
                <label className="font-medium text-[17px]">
                  Foto Kendaraan :
                </label>
              </div>
              <Image
                radius="md"
                src={props.vehicleTyp}
                width={240}
                className="my-3"
              />
            </Tabs.Tab>

            <Tabs.Tab label="Edit Data Kredential">
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
                <span onClick={props.editTrigger}>
                  <Button
                    className="bg-amber-500 hover:bg-amber-400 text-stone-700"
                    onClick={() => {
                      handleEditDriver();
                    }}
                  >
                    Edit data
                  </Button>
                </span>
              </Group>
            </Tabs.Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default AdminDriver;
