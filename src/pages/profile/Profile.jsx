import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ProfileCostumer,
  ProfileDriver,
} from "../../components/profile/ProfileUser";
import {
  TabsProfileCostumer,
  TabsProfileDriver,
} from "../../components/tabsProfile/TabsProfile";
import LoadSpin from "../../components/loadSpin/LoadSpin";

function Profile() {
  const [role, setRole] = useState("costumer");
  const [isReady, setIsReady] = useState(false);
  const [dataUser, setDataUser] = useState([]);
  const [dataCurrentOrderDriver, setDataCurrentOrderDriver] = useState([]);
  const [dataHistoryOrderDriver, setDataHistoryOrderDriver] = useState([]);
  const [dataHistoryOrderCostumer, setDataHistoryOrderCostumer] = useState([]);
  const [dataOrderActiveCostumer, setOrderActiveCostumer] = useState([]);

  useEffect(() => {
    fecthData();
    fetchCurrentOrderDriver();
    fetchHistoryOrderDriver();
    fetchHistoryOrderCostumer();
    fetchOrderActiveCostumer();
    setIsReady(true);
  }, []);

  const fecthData = async () => {
    await axios
      .get(
        `https://virtserver.swaggerhub.com/wildanie12/Bringee-API/v1.0/api/auth/me`
      )
      .then((ress) => {
        setDataUser(ress.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchHistoryOrderCostumer = async () => {
    await axios
      .get(
        `https://virtserver.swaggerhub.com/wildanie12/Bringee-API/v1.0/api/customers/orders?status=CONFIRMED%2CMANIFESTED%2CON_PROCESS%2CARRIVED%2CCANCELLED`
      )
      .then((ress) => {
        setDataHistoryOrderCostumer(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchOrderActiveCostumer = async () => {
    await axios
      .get(
        `https://virtserver.swaggerhub.com/wildanie12/Bringee-API/v1.0/api/customers/orders?status=ON_PROCESS`
      )
      .then((ress) => {
        setOrderActiveCostumer(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchCurrentOrderDriver = async () => {
    await axios
      .get(
        `https://virtserver.swaggerhub.com/wildanie12/Bringee-API/v1.0/api/drivers/current_order`
      )
      .then((ress) => {
        setDataCurrentOrderDriver(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchHistoryOrderDriver = async () => {
    await axios
      .get(
        `https://virtserver.swaggerhub.com/wildanie12/Bringee-API/v1.0/api/drivers/orders?sortVolume=true&sortWeight=true&sortDistance=true`
      )
      .then((ress) => {
        setDataHistoryOrderDriver(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (role === "costumer") {
    if (isReady) {
      return (
        <div className="container mx-auto py-[5vh] px-[5vw]">
          <div className="flex flex-col md:flex-row md:gap-2">
            <div className="w-full md:w-3/12">
              <ProfileCostumer dataUser={dataUser} />
            </div>
            <div className="w-full md:w-9/12">
              <TabsProfileCostumer
                dataHistoryOrder={dataHistoryOrderCostumer}
                dataOrderActive={dataOrderActiveCostumer}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return <LoadSpin />;
    }
  } else if (role === "driver") {
    if (isReady) {
      return (
        <div className="container mx-auto py-[5vh] px-[5vh]">
          <div className="flex flex-col md:flex-row md:gap-2">
            <div className="w-full md:w-3/12">
              <ProfileDriver dataUser={dataUser} />
            </div>
            <div className="w-full md:w-9/12">
              <TabsProfileDriver
                dataOrderActive={dataCurrentOrderDriver}
                dataHistoryOrder={dataHistoryOrderDriver}
              />
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
