import React from "react";
import { createStyles, Avatar, Text, Group } from "@mantine/core";
import { PhoneCall, At } from "tabler-icons-react";
import image from "../../assets/monke.jpg";

const useStyles = createStyles((theme) => ({
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

function UserCard() {
  const { classes } = useStyles();
  return (
    <div>
      <Group noWrap>
        <Avatar src={image} size={94} radius="md" />
        <div>
          <Text
            size="xs"
            sx={{ textTransform: "uppercase" }}
            weight={700}
            color="dimmed"
          >
            Kustomer
          </Text>

          <Text size="lg" weight={500} className={classes.name}>
            Monke user
          </Text>

          <Group noWrap spacing={10} mt={3}>
            <At size={16} className={classes.icon} />
            <Text size="xs" color="dimmed">
              monke@gmail.com
            </Text>
          </Group>

          <Group noWrap spacing={10} mt={5}>
            <PhoneCall size={16} className={classes.icon} />
            <Text size="xs" color="dimmed">
              0281-123-456
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}

export default UserCard;
