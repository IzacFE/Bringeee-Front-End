import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProfileCostumer, ProfileDriver } from "../../components/profile/ProfileUser";
import { TabsProfileCostumer, TabsProfileDriver } from "../../components/tabsProfile/TabsProfile";

function Profile() {
  const [role, setRole] = useState("driver");
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    fecthData();
  }, []);

  const fecthData = () => {
    axios
      .get(`https://virtserver.swaggerhub.com/wildanie12/Bringee-API/v1.0/api/auth/me`)
      .then((ress) => {
        setDataUser(ress.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (role === "costumer") {
    return (
      <div className="container mx-auto py-5 px-3">
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-3/12">
            <ProfileCostumer dataUser={dataUser} />
          </div>
          <div className="w-full md:w-9/12">
            <TabsProfileCostumer />
          </div>
        </div>
      </div>
    );
  } else if (role === "driver") {
    return (
      <div className="container mx-auto py-5 px-3">
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-3/12">
            <ProfileDriver dataUser={dataUser} />
          </div>
          <div className="w-full md:w-9/12">
            <TabsProfileDriver />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
