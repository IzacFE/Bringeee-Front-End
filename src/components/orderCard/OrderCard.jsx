import React from "react";
import { createStyles, Card, Image, Avatar, Text, Group } from "@mantine/core";
import avatar from "../../assets/monke.jpg";
import image from "../../assets/box.png";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    cursor: "pointer",
    padding: theme.spacing.md,
  },
}));

function OrderCard(props) {
  const { classes } = useStyles();
  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Group noWrap spacing={0}>
        <Image src={image} height={140} width={140} />
        <div className={classes.body} onClick={props.onClick}>
          <Text transform="uppercase" color="dimmed" weight={700} size="xs">
            Ini Asal
            <br />
            Ini Tujuan
          </Text>
          <Text className={classes.title} mt="xs" mb="md">
            Rp 1.5jt
          </Text>
          <Group noWrap spacing="xs">
            <Group spacing="xs" noWrap>
              <Avatar size={20} src={avatar} />
              <Text size="xs">Nama Kustomer</Text>
            </Group>
          </Group>
          <Group mt="xs">
            <Text size="xs" color="dimmed">
              •
            </Text>
            <Text size="xs" color="dimmed">
              1-9-2022
            </Text>
          </Group>
        </div>
      </Group>
    </Card>
  );
}

export default OrderCard;
