import React, { useState } from "react";
import ModalLogin from "../../components/modalLogin/ModalLogin";
import ModalJoin from "../../components/modalJoin/ModalJoin";
import { ProfileCostumer, ProfileDriver } from "../../components/profile/ProfileUser";

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
      </div>
    </>
  );
}

export default Coba1;
