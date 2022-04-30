import React, { useState } from "react";
import { Popover, Modal, Button, Avatar, Text, Paper } from "@mantine/core";
import image from "../../assets/monke.jpg";
import { Trash } from "tabler-icons-react";
import styles from "./CustomerModal.module.css";

function CustomerModal(props) {
  const [openDel, setOpenDel] = useState(false);

  const data = {
    avatar: image,
    name: "Test Name",
    email: "test@gmail.com",
    job: "kustomer",
    else: "else",
  };

  return (
    <>
      <Modal
        centered
        opened={props.opened}
        onClose={props.onClose}
        title="Akun Kostumer"
      >
        <Paper radius="md" withBorder p="lg">
          <Avatar src={data.avatar} size={120} radius={120} mx="auto" />
          <Text align="center" size="lg" weight={500} mt="md">
            {data.name}
          </Text>
          <Text align="center" color="dimmed" size="sm">
            {data.email} • {data.job}
          </Text>

          <div className={styles.delContainer}>
            {" "}
            <Popover
              placement="center"
              opened={openDel}
              onClose={() => setOpenDel(false)}
              target={
                <Button
                  color="red"
                  mt="md"
                  leftIcon={<Trash size={14} />}
                  className="bg-red-500"
                  onClick={() => setOpenDel((o) => !o)}
                >
                  Hapus Akun
                </Button>
              }
              position="bottom"
              withArrow
            >
              <div>
                <Text size="sm" className="mb-2">
                  Yakin hapus akun?
                </Text>
                <Button color="green" className="bg-green-400">
                  Batal
                </Button>
                <Button color="red" className="bg-red-500 ml-1">
                  OK
                </Button>
              </div>
            </Popover>
          </div>
        </Paper>
      </Modal>
    </>
  );
}

export default CustomerModal;
