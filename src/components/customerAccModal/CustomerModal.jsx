import React, { useState } from "react";
import {
  Popover,
  Modal,
  Button,
  Avatar,
  Text,
  Paper,
  Group,
} from "@mantine/core";
import { PhoneCall, Trash } from "tabler-icons-react";
import styles from "./CustomerModal.module.css";

function CustomerModal(props) {
  const [openDel, setOpenDel] = useState(false);

  return (
    <>
      <Modal
        centered
        opened={props.opened}
        onClose={props.onClose}
        title="Akun Kostumer"
      >
        <Paper radius="md" withBorder p="lg">
          <Avatar src={props.avatar} size={120} radius={120} mx="auto" />
          <Text align="center" size="lg" weight={500} mt="md">
            {props.name}
          </Text>

          <Text align="center" size="sm">
            {props.email} • Kustomer
          </Text>

          <Text align="center" size="sm">
            {props.gender === "male" && "Laki-laki"}
            {props.gender === "laki-laki" && "Laki-laki"}
            {props.gender === "female" && "Perempuan"}
            {props.gender === "perempuan" && "Perempuan"}
          </Text>

          <Text align="center" size="sm">
            {props.dob && props.dob.slice(0, 10)}
          </Text>

          <Group noWrap spacing={10} position="center" mt={5}>
            <PhoneCall size={16} color="gray" />
            <Text align="center" size="sm">
              {props.phone}
            </Text>
          </Group>

          <Text align="center" size="sm">
            id akun : {props.idAcc}
          </Text>

          <div className={styles.delContainer}>
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
                <Button
                  color="green"
                  className="bg-green-400"
                  onClick={() => setOpenDel((o) => !o)}
                >
                  Batal
                </Button>

                <span onClick={() => setOpenDel((o) => !o)}>
                  <Button
                    color="red"
                    className="bg-red-500 ml-1"
                    onClick={props.clickDelete}
                  >
                    OK
                  </Button>
                </span>
              </div>
            </Popover>
          </div>
        </Paper>
      </Modal>
    </>
  );
}

export default CustomerModal;
