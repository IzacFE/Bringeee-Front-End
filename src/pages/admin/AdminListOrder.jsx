import React, { useEffect, useState } from "react";
import TabsAdmin from "../../components/tabsAdmin/TabsAdmin";
import { AlertCircle, History, Loader, Photo } from "tabler-icons-react";
import AdminOrderList from "../../components/adminOrderList/AdminOrderList";
import styles from "./AdminListOrder.module.css";
import LoadSpin from "../../components/loadSpin/LoadSpin";
import axios from "axios";

function AdminListOrder() {
  const [isReady, setIsReady] = useState(false);
  const [confirmData, setConfirmData] = useState([]);

  useEffect(() => {
    fetchConfirm();
  }, []);

  const fetchConfirm = async () => {
    await axios
      .get(
        `https://virtserver.swaggerhub.com/wildanie12/Bringee-API/v1.0/api/orders?CONFIRMED`
      )
      .then((response) => {
        setConfirmData(response.data.data);
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
          <AdminOrderList />
        </div>
      </>
    );
  };

  const ongoingConten = () => {
    return (
      <>
        <div className={`${styles.confirmContainer} rounded-md`}>
          <AdminOrderList />
        </div>
      </>
    );
  };

  const historyConten = () => {
    return (
      <>
        <div className={`${styles.confirmContainer} rounded-md`}>
          <AdminOrderList />
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
