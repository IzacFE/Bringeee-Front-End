import React from "react";
import { createStyles, Avatar, Text, Group } from "@mantine/core";
import { PhoneCall, At } from "tabler-icons-react";
import image from "../../assets/monke.jpg";

const useStyles = createStyles((theme) => ({
  container: {
    cursor: "pointer",
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

function UserCard(props) {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <Group noWrap>
        <Avatar src={props.image} size={94} />
        <div>
          <Text
            size="xs"
            sx={{ textTransform: "uppercase" }}
            weight={700}
            color="dimmed"
          >
            {props.role}
          </Text>

          {props.role === "driver" && (
            <Text
              size="xs"
              sx={{ textTransform: "uppercase" }}
              weight={700}
              color="dimmed"
            >
              {props.driverStatus}
            </Text>
          )}

          <Text size="lg" weight={500} className={classes.name}>
            {props.name}
          </Text>

          <Group noWrap spacing={10} mt={3}>
            <At size={16} className={classes.icon} />
            <Text size="xs" color="dimmed">
              {props.email}
            </Text>
          </Group>

          <Group noWrap spacing={10} mt={5}>
            <PhoneCall size={16} className={classes.icon} />
            <Text size="xs" color="dimmed">
              {props.phone}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}

export default UserCard;
