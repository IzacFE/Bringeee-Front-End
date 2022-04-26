import { Avatar, Button, Title, Text } from "@mantine/core";
import React from "react";
import styles from "./AdminDriver.module.css";
import image from "../../assets/monke.jpg";
import { useModals } from "@mantine/modals";

function AdminDriver() {
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
        {" "}
        <div className={`${styles.left}`}>
          <Avatar src={image} size={240} radius={240} mx="auto" />
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
          <Title className="text-amber-500">INI NAMA Driver</Title>
          <h3>
            monke@mail.com <br />
            Gender <br />
            Address <br />
            no phone <br />
            Age 26th <br /> Jenis truck <br />
            STNK <br />
            Ktp <br />
            sim <br /> Nik <br /> plat nomor <br />
          </h3>
        </div>
      </div>
    </>
  );
}

export default AdminDriver;
