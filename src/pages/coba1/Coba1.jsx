import React, { useState } from "react";
import ModalLogin from "../../components/modalLogin/ModalLogin";
import ModalJoin from "../../components/modalJoin/ModalJoin";
import { ProfileCostumer, ProfileDriver } from "../../components/profile/ProfileUser";
import { TabsProfileCostumer, TabsProfileDriver } from "../../components/tabsProfile/TabsProfile";
import FormOrder from "../../components/formOrder/FormOrder";
import ChoosePayment from "../../components/choosePayment/ChoosePayment";
import ConfirmPayment from "../../components/confirmPayment/ConfirmPayment";
import DetailOrder from "../../components/detailOrder/DetailOrder";

function Coba1() {
  const [openedLogin, setOpenedLogin] = useState(false);
  const [openedJoin, setOpenedJoin] = useState(false);

  return (
    <>
      <button onClick={() => setOpenedLogin(true)} className="bg-slate-300">
        Open Modal Login
      </button>
      <button onClick={() => setOpenedJoin(true)} className="bg-slate-500">
        Open Modal Join
      </button>
      <ModalLogin openedModal={openedLogin} closedModal={() => setOpenedLogin(false)} />
      <ModalJoin openedModal={openedJoin} closedModal={() => setOpenedJoin(false)} />
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="w-full p-2 md:w-3/12">
            <ProfileDriver />{" "}
          </div>
          <div className="w-full p-2 md:w-3/12">
            <ProfileCostumer />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full p-2 md:w-1/2">
            <TabsProfileCostumer />
          </div>
          <div className="w-full p-2 md:w-1/2">
            <TabsProfileDriver />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full p-2 md:w-1/2">
            <FormOrder />
          </div>
        </div>
      </div>
      <ChoosePayment />
      <ConfirmPayment />
      <DetailOrder />
    </>
  );
}

export default Coba1;
