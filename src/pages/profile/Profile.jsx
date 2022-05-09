import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { ProfileCustomer, ProfileDriver } from "../../components/profile/ProfileUser";
import { TabsProfileCustomer, TabsProfileDriver } from "../../components/tabsProfile/TabsProfile";
import LoadSpin from "../../components/loadSpin/LoadSpin";
import { TokenContext, RoleContext } from "../../App";
import { showNotification } from "@mantine/notifications";
import { X } from "tabler-icons-react";

function Profile() {
  const { tokenCtx } = useContext(TokenContext);
  const { roleCtx } = useContext(RoleContext);
  const [isReady, setIsReady] = useState(false);
  const [dataUser, setDataUser] = useState([]);
  const [dataCurrentOrderDriver, setDataCurrentOrderDriver] = useState([]);
  const [dataHistoryOrderDriver, setDataHistoryOrderDriver] = useState([]);
  const [dataHistoryOrderCustomer, setDataHistoryOrderCustomer] = useState([]);
  const [dataOrderActiveCustomer, setOrderActiveCustomer] = useState([]);

  useEffect(() => {
    fecthData();
    if (tokenCtx) {
      if (roleCtx === "driver") {
        fetchCurrentOrderDriver();
        fetchHistoryOrderDriver();
      } else if (roleCtx === "customer") {
        fetchHistoryOrderCustomer();
        fetchOrderActiveCustomer();
      }
      setIsReady(true);
    }
  }, [tokenCtx]);

  const fecthData = async () => {
    await axios
      .get(`https://aws.wildani.tech/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((ress) => {
        setDataUser(ress.data.data.user);
      })
      .catch((err) => {
        showNotification({
          title: "Gagal",
          message: "Gagal menampilkan data",
          icon: <X size={18} />,
          color: "red",
        });
      });
  };

  const fetchHistoryOrderCustomer = async () => {
    await axios
      .get(`https://aws.wildani.tech/api/customers/orders?status=DELIVERED%2CCANCELLED`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((ress) => {
        setDataHistoryOrderCustomer(ress.data.data);
      })
      .catch((err) => {
        showNotification({
          title: "Gagal",
          message: "Gagal menampilkan data",
          icon: <X size={18} />,
          color: "red",
        });
      });
  };

  const fetchOrderActiveCustomer = async () => {
    await axios
      .get(`https://aws.wildani.tech/api/customers/orders?status=CONFIRMED%2CMANIFESTED%2CON_PROCESS%2CREQUESTED`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((ress) => {
        setOrderActiveCustomer(ress.data.data);
      })
      .catch((err) => {
        showNotification({
          title: "Gagal",
          message: "Gagal menampilkan data",
          icon: <X size={18} />,
          color: "red",
        });
      });
  };

  const fetchCurrentOrderDriver = async () => {
    await axios
      .get(`https://aws.wildani.tech/api/drivers/current_order`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((ress) => {
        setDataCurrentOrderDriver(ress.data.data);
      })
      .catch((err) => {
        showNotification({
          title: "Gagal",
          message: "Gagal menampilkan data",
          icon: <X size={18} />,
          color: "red",
        });
      });
  };

  const fetchHistoryOrderDriver = async () => {
    await axios
      .get(`https://aws.wildani.tech/api/drivers/history_orders?sortVolume=true&sortWeight=true&sortDistance=true'`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((ress) => {
        setDataHistoryOrderDriver(ress.data.data);
      })
      .catch((err) => {
        showNotification({
          title: "Gagal",
          message: "Gagal menampilkan data",
          icon: <X size={18} />,
          color: "red",
        });
      });
  };

  if (roleCtx === "customer") {
    if (isReady) {
      return (
        <div className="container mx-auto py-[5vh] px-[5vw]">
          <div className="flex flex-col md:flex-row md:gap-2">
            <div className="w-full md:w-3/12">
              <ProfileCustomer dataUser={dataUser} reloadSoftPage={() => fecthData()} />
            </div>
            <div className="w-full md:w-9/12">
              <TabsProfileCustomer dataHistoryOrder={dataHistoryOrderCustomer} dataOrderActive={dataOrderActiveCustomer} />
            </div>
          </div>
        </div>
      );
    } else {
      return <LoadSpin />;
    }
  } else if (roleCtx === "driver") {
    if (isReady) {
      return (
        <div className="container mx-auto py-[5vh] px-[5vh]">
          <div className="flex flex-col md:flex-row md:gap-2">
            <div className="w-full md:w-3/12">
              <ProfileDriver dataUser={dataUser} reloadSoftPage={() => fecthData()} />
            </div>
            <div className="w-full md:w-9/12">
              <TabsProfileDriver dataOrderActive={dataCurrentOrderDriver} dataHistoryOrder={dataHistoryOrderDriver} />
            </div>
          </div>
        </div>
      );
    }
  } else {
    return <LoadSpin />;
  }
}

export default Profile;
