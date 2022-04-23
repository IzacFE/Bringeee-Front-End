import React, { useState } from "react";
import {
  createStyles,
  Header,
  Menu,
  Group,
  Container,
  Avatar,
  UnstyledButton,
  Text,
  Divider,
  Button,
} from "@mantine/core";
import {
  TruckDelivery,
  Login,
  User,
  Logout,
  Trash,
  SwitchHorizontal,
  ChevronDown,
} from "tabler-icons-react";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  logo: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },

  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },

  truck: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  user: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: "background-color 100ms ease",
  },
}));

function Navbar() {
  const navigate = useNavigate();
  const { classes, theme, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <Header height={56} className="bg-stone-700 border-none">
      <Container>
        <div className={classes.inner}>
          <div
            className={classes.logo}
            onClick={() => {
              navigate("/");
            }}
          >
            <TruckDelivery
              size={40}
              className={`${classes.truck} text-amber-500`}
            />
            <Text
              className="text-amber-500"
              weight={500}
              size="xl"
              sx={{ lineHeight: 1 }}
              //   mr={3}
            >
              Bringeee
            </Text>
          </div>

          <Group spacing={5} className={classes.links}>
            <Button compact className="hover:bg-white hover:text-stone-700">
              Masuk
            </Button>
            <Button compact className="hover:bg-white hover:text-stone-700">
              Daftar
            </Button>

            <Menu
              size={260}
              placement="end"
              transition="pop-top-right"
              className={classes.userMenu}
              onClose={() => setUserMenuOpened(false)}
              onOpen={() => setUserMenuOpened(true)}
              control={
                <UnstyledButton
                  className={cx(classes.user, {
                    [classes.userActive]: userMenuOpened,
                  })}
                >
                  <Group spacing={7}>
                    <Avatar
                      //   src={user.image}
                      //   alt={user.name}
                      radius="xl"
                      size={35}
                    />
                    <Text
                      className="text-white"
                      weight={500}
                      size="sm"
                      sx={{ lineHeight: 1 }}
                      mr={3}
                    >
                      {/* {user.name} */}
                      Testing
                    </Text>
                    <ChevronDown size={12} className="text-white" />
                  </Group>
                </UnstyledButton>
              }
            >
              <Menu.Label>Pengaturan</Menu.Label>
              <Menu.Item icon={<User size={14} />}>Profil Akun</Menu.Item>
              <Menu.Item icon={<SwitchHorizontal size={14} />}>
                Ganti Akun
              </Menu.Item>
              <Menu.Item icon={<Logout size={14} />}>Keluar</Menu.Item>

              <Divider />

              <Menu.Label>Peringatan</Menu.Label>
              <Menu.Item
                color="red"
                icon={<Trash size={14} />}
                onClick={() => {
                  console.log("pressed");
                }}
              >
                Hapus Akun
              </Menu.Item>
            </Menu>
          </Group>
        </div>
      </Container>
    </Header>
  );
}

export default Navbar;
