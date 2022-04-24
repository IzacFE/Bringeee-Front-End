import { Avatar, Button, Title } from "@mantine/core";
import React from "react";
import styles from "./AdminDriver.module.css";
import image from "../../assets/monke.jpg";

function AdminDriver() {
  return (
    <>
      <div className={styles.container}>
        {" "}
        <div className={`${styles.left}`}>
          <Avatar src={image} size={120} radius={120} mx="auto" />
          <div className={`${styles.buttonContainer}`}>
            <Button className="bg-amber-500" color="yellow">
              Konfirmasi
            </Button>
            <Button className="bg-red-500" color="red">
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
