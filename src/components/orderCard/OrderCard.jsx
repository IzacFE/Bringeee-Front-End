import React from "react";
import { createStyles, Card, Image, Avatar, Text, Group } from "@mantine/core";

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
        <Image className="pl-2" src={props.image} height={180} width={140} />
        <div className={classes.body} onClick={props.onClick}>
          <Text transform="uppercase" color="dimmed" weight={700} size="xs">
            {props.from}
            <br />
            ke {props.destination}
          </Text>
          <Text className={classes.title} mt="xs" mb="md">
            Rp {props.price}
          </Text>
          <Group noWrap spacing="xs">
            <Group spacing="xs" noWrap>
              <Avatar size={20} src={props.avatar} />
              <Text size="xs">{props.name}</Text>
            </Group>
          </Group>
          <Group mt="xs">
            <Text size="xs" color="dimmed">
              •
            </Text>
            <Text size="xs" color="dimmed">
              {props.created}
            </Text>
          </Group>
        </div>
      </Group>
    </Card>
  );
}

export default OrderCard;
