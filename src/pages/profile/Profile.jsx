import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { ProfileCustomer, ProfileDriver } from "../../components/profile/ProfileUser";
import { TabsProfileCustomer, TabsProfileDriver } from "../../components/tabsProfile/TabsProfile";
import LoadSpin from "../../components/loadSpin/LoadSpin";
import { TokenContext, RoleContext } from "../../App";

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
        console.log(err);
      });
  };

  const fetchHistoryOrderCustomer = async () => {
    await axios
      .get(`https://aws.wildani.tech/api/customers/orders?status=CDELIVERED%2CCANCELLED`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((ress) => {
        setDataHistoryOrderCustomer(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
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
        console.log(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
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
        console.log(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchHistoryOrderDriver = async () => {
    await axios
      .get(`https://aws.wildani.tech/api/drivers/orders?sortVolume=true&sortWeight=true&sortDistance=true`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((ress) => {
        setDataHistoryOrderDriver(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (roleCtx === "customer") {
    if (isReady) {
      return (
        <div className="container mx-auto py-[5vh] px-[5vw]">
          <div className="flex flex-col md:flex-row md:gap-2">
            <div className="w-full md:w-3/12">
              <ProfileCustomer dataUser={dataUser} />
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
              <ProfileDriver dataUser={dataUser} />
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
