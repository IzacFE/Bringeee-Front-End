import { Avatar, Button, Title, Text, Image } from "@mantine/core";
import React from "react";
import styles from "./AdminDriver.module.css";
import { useModals } from "@mantine/modals";

function AdminDriver(props) {
  const modals = useModals();

  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: "Hapus Akun Anda",
      centered: true,
      children: (
        <>
          <Text size="sm">
            Anda akan menghapus akun anda. Tekan tombol Hapus Akun untuk
            mengkonfirmasi penghapusan akun dan tekan tombol batal untuk
            membatalkan penghapusan akun
          </Text>
        </>
      ),
      labels: { confirm: "Hapus Akun", cancel: "Batal Hapus" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Confirmed"),
    });

  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.left}`}>
          <Avatar src={props.image} size={240} radius={240} mx="auto" />
          <div className={`${styles.buttonContainer}`}>
            <Button className="bg-amber-500" color="yellow">
              Konfirmasi
            </Button>
            <Button
              className="bg-red-500"
              color="red"
              onClick={openDeleteModal}
            >
              Hapus Akun
            </Button>
          </div>
        </div>
        <div className={`${styles.right}`}>
          <Title className="text-amber-500">{props.name}</Title>
          <h3>
            {props.email} <br />
            {props.gender} <br />
            {props.address} <br />
            {props.phone} <br />
            Umur {props.age} <br />
            {props.vehicle}
            <br />
            <Image radius="md" src={props.stnk} width={240} className="my-3" />
            <Image radius="md" src={props.ktp} width={240} className="my-3" />
            <Image radius="md" src={props.sim} width={240} className="my-3" />
            {props.nik} <br />
            {props.plateNumb} <br />
          </h3>
        </div>
      </div>
    </>
  );
}

export default AdminDriver;
