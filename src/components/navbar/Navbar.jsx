import React, { useState } from "react";
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
} from "tabler-icons-react";
import { useNavigate } from "react-router-dom";
import ModalJoin from "../modalJoin/ModalJoin";
import ModalLogin from "../modalLogin/ModalLogin";
import { useModals } from "@mantine/modals";

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
  const { classes, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const [openedLogin, setOpenedLogin] = useState(false);
  const [openedJoin, setOpenedJoin] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Register Only input states
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");

  // Driver register only
  const [vehicle, setVehicle] = useState("");
  const [nik, setNik] = useState("");
  const [ktp, setKtp] = useState("");
  const [sim, setSim] = useState("");
  const [stnk, setStnk] = useState("");
  const [numbPlat, setNumbPlat] = useState("");

  const dataSaver = (loginData) => {
    localStorage.setItem("token", loginData.token);
    localStorage.setItem("role", loginData.user.role);
  };

  const handleLogin = async () => {
    var config = {
      method: "post",
      url: "https://virtserver.swaggerhub.com/wildanie12/Bringee-API/v1.0/api/auth",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: "&email=" + email + "&password=" + password,
    };

    await axios(config)
      .then((response) => {
        dataSaver(response.data.data);
        alert("berhasil");
        window.location.reload();
      })
      .catch((response) => {
        console.log(response);
        alert("gagal");
      });
  };

  const handleRegister = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("gender", gender);
    formData.append("address", address);
    formData.append("avatar", avatar);
    formData.append("dob", dob);
    console.log(formData);

    axios
      .post(`/api/users`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // console.log(response);
        alert("berhasil");
        // Router.push("/authentication/login");
      })
      .catch((err) => {
        console.log(err);
        console.log("error");
        alert("gagal register");
      });
    // console.log(name);
    // console.log(email);
    // console.log(password);
    // console.log(gender);
    // console.log(address);
    // console.log(avatar);
    // console.log(dob);
  };

  const modals = useModals();

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

          <ModalLogin
            openedModal={openedJoin}
            closedModal={() => setOpenedJoin(false)}
            email={(e) => setEmail(e.target.value)}
            password={(e) => setPassword(e.target.value)}
            login={() => handleLogin()}
          />

          <ModalJoin
            openedModal={openedLogin}
            closedModal={() => setOpenedLogin(false)}
          />

          <Group spacing={5} className={classes.links}>
            <Button
              compact
              className="hover:bg-white hover:text-stone-700"
              onClick={() => setOpenedJoin(true)}
            >
              Masuk
            </Button>
            <Button
              compact
              className="hover:bg-white hover:text-stone-700"
              onClick={() => setOpenedLogin(true)}
            >
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
                      Testing
                    </Text>
                    <ChevronDown size={12} className="text-white" />
                  </Group>
                </UnstyledButton>
              }
            >
              <Menu.Label>Pengaturan</Menu.Label>
              <Menu.Item
                icon={<User size={14} />}
                onClick={() => {
                  navigate("/profile");
                }}
              >
                Profil Akun
              </Menu.Item>
              <Menu.Item
                icon={<SwitchHorizontal size={14} />}
                onClick={() => {
                  navigate("/");
                }}
              >
                Ganti Akun
              </Menu.Item>
              <Menu.Item
                icon={<Logout size={14} />}
                onClick={() => {
                  navigate("/");
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
          </Group>
        </div>
      </Container>
    </Header>
  );
}

export default Navbar;
