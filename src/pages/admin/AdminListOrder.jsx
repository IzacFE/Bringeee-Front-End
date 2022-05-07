import React, { useContext, useEffect, useState } from "react";
import TabsAdmin from "../../components/tabsAdmin/TabsAdmin";
import { AlertCircle, History, Loader, Photo } from "tabler-icons-react";
import AdminOrderList from "../../components/adminOrderList/AdminOrderList";
import styles from "./AdminListOrder.module.css";
import LoadSpin from "../../components/loadSpin/LoadSpin";
import axios from "axios";
import { RoleContext, TokenContext } from "../../App";
import { useNavigate } from "react-router-dom";

function AdminListOrder() {
  const { tokenCtx } = useContext(TokenContext);
  const { roleCtx } = useContext(RoleContext);
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);
  const [confirmData, setConfirmData] = useState([]);
  const [ongoingData, setOngoingData] = useState([]);
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    if (roleCtx === "admin") {
      fetchConfirm();
      fetchOngoing();
      fetchHistory();
    } else if (roleCtx === "driver") {
      navigate("/home");
    } else if (roleCtx === "customer") {
      navigate("/profile");
    } else {
      navigate("/");
    }
  }, [roleCtx]);

  const fetchConfirm = async () => {
    await axios
      .get(
        `https://aws.wildani.tech/api/orders?status=NEED_CUSTOMER_CONFIRM,REQUESTED`,
        {
          headers: {
            Authorization: `Bearer ${tokenCtx}`,
          },
        }
      )
      .then((response) => {
        if (response.data.data) {
          setConfirmData(response.data.data);
        }
        console.log(response.data.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const fetchOngoing = async () => {
    await axios
      .get(
        `https://aws.wildani.tech/api/orders?status=CONFIRMED,MANIFESTED,ON_PROCESS`,
        {
          headers: {
            Authorization: `Bearer ${tokenCtx}`,
          },
        }
      )
      .then((response) => {
        if (response.data.data) {
          setOngoingData(response.data.data);
        }
        console.log(response.data.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const fetchHistory = async () => {
    await axios
      .get(`https://aws.wildani.tech/api/orders?status=DELIVERED,CANCELLED`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((response) => {
        if (response.data.data) {
          setHistoryData(response.data.data);
        }
        console.log(response.data.data);
      })
      .catch((err) => {
        console.log("error");
      })
      .finally(() => setIsReady(true));
  };

  const confirmConten = () => {
    return (
      <>
        <div className={`${styles.confirmContainer} rounded-md`}>
          <AdminOrderList dataOrder={confirmData} check={"confirm"} />
        </div>
      </>
    );
  };

  const ongoingConten = () => {
    return (
      <>
        <div className={`${styles.confirmContainer} rounded-md`}>
          <AdminOrderList dataOrder={ongoingData} check={"ongoing"} />
        </div>
      </>
    );
  };

  const historyConten = () => {
    return (
      <>
        <div className={`${styles.confirmContainer} rounded-md`}>
          <AdminOrderList dataOrder={historyData} check={"history"} />
        </div>
      </>
    );
  };

  let result;
  if (isReady) {
    result = (
      <div className={styles.page}>
        <TabsAdmin
          title1="Order Konfirmasi"
          title2="Order Ongoing"
          title3="Riwayat Order"
          icon1={<AlertCircle size={14} />}
          icon2={<Loader size={14} />}
          icon3={<History size={14} />}
          konten1={confirmConten()}
          konten2={ongoingConten()}
          konten3={historyConten()}
        />
      </div>
    );
  } else {
    result = <LoadSpin />;
  }

  return <>{result}</>;
}

export default AdminListOrder;
