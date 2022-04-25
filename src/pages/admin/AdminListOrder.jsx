import React from "react";
import TabsAdmin from "../../components/tabsAdmin/TabsAdmin";
import { AlertCircle, History, Loader, Photo } from "tabler-icons-react";
import AdminOrderList from "../../components/adminOrderList/AdminOrderList";
import styles from "./AdminListOrder.module.css";

function AdminListOrder() {
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

  return (
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
}

export default AdminListOrder;
