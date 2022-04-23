import React, { useState } from "react";
import ModalLogin from "../../components/modalLogin/ModalLogin";
import ModalJoin from "../../components/modalJoin/ModalJoin";

function Coba1() {
  const [openedLogin, setOpenedLogin] = useState(false);
  const [openedJoin, setOpenedJoin] = useState(false);

  return (
    <div>
      <button onClick={() => setOpenedLogin(true)} className="bg-slate-300">
        Open Modal Login
      </button>
      <button onClick={() => setOpenedJoin(true)} className="bg-slate-500">
        Open Modal Join
      </button>
      <ModalLogin openedModal={openedLogin} closedModal={() => setOpenedLogin(false)} />
      <ModalJoin openedModal={openedJoin} closedModal={() => setOpenedJoin(false)} />
    </div>
  );
}

export default Coba1;
