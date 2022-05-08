import { Avatar, Button, Title, Text, Image } from "@mantine/core";
import React from "react";
import styles from "./AdminDriver.module.css";
import { useModals } from "@mantine/modals";

function AdminDriver(props) {
  const modals = useModals();

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

          <div className="py-2">
            <label className="font-medium text-[17px]">
              Jenis kendaraan : {props.vehicle}
            </label>
          </div>

          <div className="py-2">
            <label className="font-medium text-[17px]">NIK : {props.nik}</label>
          </div>

          <div className="py-2">
            <label className="font-medium text-[17px]">
              Nomor plat kendaraan : {props.plateNumb}
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
          <div className="py-2">
            <label className="font-medium text-[17px]">Foto STNK :</label>
          </div>
          <Image radius="md" src={props.stnk} width={240} className="my-3" />

          <div className="py-2">
            <label className="font-medium text-[17px]">Foto KTP :</label>
          </div>
          <Image radius="md" src={props.ktp} width={240} className="my-3" />

          <div className="py-2">
            <label className="font-medium text-[17px]">Foto SIM :</label>
          </div>
          <Image radius="md" src={props.sim} width={240} className="my-3" />
        </div>
      </div>
    </>
  );
}

export default AdminDriver;
