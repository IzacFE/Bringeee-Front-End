import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
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
  ListDetails,
  Users,
  Report,
} from "tabler-icons-react";
import { useNavigate } from "react-router-dom";
import ModalJoin from "../modalJoin/ModalJoin";
import ModalLogin from "../modalLogin/ModalLogin";
import { useModals } from "@mantine/modals";

import { TokenContext, RoleContext } from "../../App";

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
  const tokenCtx = useContext(TokenContext);
  const roleCtx = useContext(RoleContext);
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({});
  const [token, setToken] = useState("");
  const { classes, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const [openedLogin, setOpenedLogin] = useState(false);
  const [openedJoin, setOpenedJoin] = useState(false);
  const modals = useModals();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      fetchData();
      // console.log(tokenCtx);
      // console.log(roleCtx);
    }
  }, []);

  const fetchData = async () => {
    await axios
      .get(`https://aws.wildani.tech/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setProfileData(response.data.data.user);
      })
      .catch((err) => {
        console.log(err);
        console.log("error");
      });
  };

  // localStorage.setItem("token", "token");
  // localStorage.setItem("role", "admin");

  const dataSaver = (loginData) => {
    localStorage.setItem("token", loginData.token);
    localStorage.setItem("role", loginData.user.role);
    setToken(loginData.token);
    setProfileData(loginData.user);
    if (loginData.user.role === "driver") {
      localStorage.setItem("account_status", loginData.user.account_status);
    }
  };

  const redirect = (role) => {
    role === "customer" ? navigate("/profile") : navigate("/home");
  };

  const handleLogin = async () => {
    var config = {
      method: "post",
      url: "https://aws.wildani.tech/api/auth",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: "&email=" + email + "&password=" + password,
    };

    await axios(config)
      .then((response) => {
        console.log(response.data.data);
        dataSaver(response.data.data);
        alert("berhasil");
        redirect(response.data.data.user.role);
        // window.location.reload();
      })
      .catch((response) => {
        console.log(response);
        alert("gagal");
      });
  };

  const registerCustomer = () => {};

  const logOut = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: "Hapus Akun Driver",
      centered: true,
      children: (
        <>
          <Text size="sm">
            Anda akan menghapus akun driver. Tekan tombol Hapus Akun untuk
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

  const navMenus = () => {
    return (
      <>
        {localStorage.getItem("token") && (
          <>
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
                    <Avatar src={profileData.avatar} radius="xl" size={35} />
                    <Text
                      className="text-white"
                      weight={500}
                      size="sm"
                      sx={{ lineHeight: 1 }}
                      mr={3}
                    >
                      {profileData.name}
                    </Text>
                    <ChevronDown size={12} className="text-white" />
                  </Group>
                </UnstyledButton>
              }
            >
              <Menu.Label>Pengaturan</Menu.Label>
              {localStorage.getItem("role") === "admin" && (
                <>
                  <Menu.Item
                    icon={<ListDetails size={14} />}
                    onClick={() => {
                      navigate("/admin-orders");
                    }}
                  >
                    List Order
                  </Menu.Item>
                  <Menu.Item
                    icon={<Users size={14} />}
                    onClick={() => {
                      navigate("/admin-users");
                    }}
                  >
                    List User
                  </Menu.Item>
                  <Menu.Item
                    icon={<Report size={14} />}
                    onClick={() => {
                      navigate("/admin-report");
                    }}
                  >
                    Report
                  </Menu.Item>
                </>
              )}
              {localStorage.getItem("role") !== "admin" && (
                <Menu.Item
                  icon={<User size={14} />}
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  Profil Akun
                </Menu.Item>
              )}

              <Menu.Item
                icon={<SwitchHorizontal size={14} />}
                onClick={() => {
                  setOpenedLogin(true);
                  // navigate("/");
                }}
              >
                Ganti Akun
              </Menu.Item>
              <Menu.Item
                icon={<Logout size={14} />}
                onClick={() => {
                  logOut();
                }}
              >
                Keluar
              </Menu.Item>

              <Divider />

              <Menu.Label>Peringatan</Menu.Label>
              <Menu.Item
                color="red"
                icon={<Trash size={14} />}
                onClick={openDeleteModal}
              >
                Hapus Akun
              </Menu.Item>
            </Menu>
          </>
        )}
        {!localStorage.getItem("token") && (
          <>
            <Button
              compact
              className="hover:bg-white hover:text-stone-700"
              onClick={() => setOpenedLogin(true)}
            >
              Masuk
            </Button>
            <Button
              compact
              className="hover:bg-white hover:text-stone-700"
              onClick={() => setOpenedJoin(true)}
            >
              Daftar
            </Button>
          </>
        )}
      </>
    );
  };

  return (
    <Header height={56} className="bg-stone-700 border-none">
      <Container>
        <div className={classes.inner}>
          <div
            className={classes.logo}
            onClick={() => {
              if (
                localStorage.getItem("role") === "driver" ||
                localStorage.getItem("role") === "admin"
              ) {
                navigate("/home");
              } else if (localStorage.getItem("role") === "customer") {
                navigate("/profile");
              } else {
                navigate("/");
              }
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
            >
              Bringeee
            </Text>
          </div>

          <ModalLogin
            openedModal={openedLogin}
            closedModal={() => setOpenedLogin(false)}
            email={(e) => setEmail(e.target.value)}
            password={(e) => setPassword(e.target.value)}
            login={() => {
              handleLogin();
              setOpenedLogin(false);
            }}
          />

          <ModalJoin
            openedModal={openedJoin}
            closedModal={() => setOpenedJoin(false)}
          />

          <Group spacing={5} className={classes.links}>
            {navMenus()}
          </Group>
        </div>
      </Container>
    </Header>
  );
}

export default Navbar;
