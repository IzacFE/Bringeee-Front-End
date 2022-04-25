import React from "react";
import styles from "./AdminDriverDetail.module.css";
import AdminDriver from "../../components/adminDriverDetail/AdminDriver";

function AdminDriverDetail() {
  return (
    <div className={styles.page}>
      <AdminDriver />
    </div>
  );
}

export default AdminDriverDetail;
