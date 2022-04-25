import React, { useState } from "react";
import { ProfileCostumer, ProfileDriver } from "../../components/profile/ProfileUser";
import { TabsProfileCostumer, TabsProfileDriver } from "../../components/tabsProfile/TabsProfile";

function Profile() {
  const [role, setRole] = useState("driver");

  if (role === "costumer") {
    return (
      <div className="container mx-auto py-5">
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-3/12">
            <ProfileCostumer />
          </div>
          <div className="w-full md:w-9/12">
            <TabsProfileCostumer />
          </div>
        </div>
      </div>
    );
  } else if (role === "driver") {
    return (
      <div className="container mx-auto py-5">
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-3/12">
            <ProfileDriver />
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
