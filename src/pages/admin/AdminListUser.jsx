import React, { useState } from "react";
import styles from "./AdminListUser.module.css";
import { Truck, User, World } from "tabler-icons-react";
import TabsAdmin from "../../components/tabsAdmin/TabsAdmin";
import UserCard from "../../components/userCard/UserCard";
import CustomerModal from "../../components/customerAccModal/CustomerModal";

function AdminListUser() {
  const [opened, setOpened] = useState(false);

  const kustomer = () => {
    return (
      <>
        <div
          className={`${styles.confirmContainer} rounded-md bg-stone-700 p-2`}
        >
          <div
            className={`${styles.cardContainer} bg-white rounded-md m-2`}
            onClick={() => {
              setOpened(true);
            }}
          >
            <UserCard />
          </div>
          <div
            className={`${styles.cardContainer} bg-white rounded-md m-2`}
            onClick={() => {
              setOpened(true);
            }}
          >
            <UserCard />
          </div>
          <div
            className={`${styles.cardContainer} bg-white rounded-md m-2`}
            onClick={() => {
              setOpened(true);
            }}
          >
            <UserCard />
          </div>
          <div
            className={`${styles.cardContainer} bg-white rounded-md m-2`}
            onClick={() => {
              setOpened(true);
            }}
          >
            <UserCard />
          </div>
          <div
            className={`${styles.cardContainer} bg-white rounded-md m-2`}
            onClick={() => {
              setOpened(true);
            }}
          >
            <UserCard />
          </div>
          <div
            className={`${styles.cardContainer} bg-white rounded-md m-2`}
            onClick={() => {
              setOpened(true);
            }}
          >
            <UserCard />
          </div>
        </div>
      </>
    );
  };

  const driver = () => {
    return (
      <>
        <div
          className={`${styles.confirmContainer} rounded-md bg-stone-700 p-2`}
        >
          <div
            className={`${styles.cardContainer} bg-white rounded-md m-2`}
            onClick={() => {
              setOpened(true);
            }}
          >
            <UserCard />
          </div>
          <div
            className={`${styles.cardContainer} bg-white rounded-md m-2`}
            onClick={() => {
              setOpened(true);
            }}
          >
            <UserCard />
          </div>
          <div
            className={`${styles.cardContainer} bg-white rounded-md m-2`}
            onClick={() => {
              setOpened(true);
            }}
          >
            <UserCard />
          </div>
          <div
            className={`${styles.cardContainer} bg-white rounded-md m-2`}
            onClick={() => {
              setOpened(true);
            }}
          >
            <UserCard />
          </div>
          <div
            className={`${styles.cardContainer} bg-white rounded-md m-2`}
            onClick={() => {
              setOpened(true);
            }}
          >
            <UserCard />
          </div>
          <div
            className={`${styles.cardContainer} bg-white rounded-md m-2`}
            onClick={() => {
              setOpened(true);
            }}
          >
            <UserCard />
          </div>
        </div>
      </>
    );
  };

  const admin = () => {
    return (
      <>
        <div
          className={`${styles.confirmContainer} rounded-md bg-stone-700 p-2`}
        >
          <div
            className={`${styles.cardContainer} bg-white rounded-md m-2`}
            onClick={() => {
              setOpened(true);
            }}
          >
            <UserCard />
          </div>
          <div
            className={`${styles.cardContainer} bg-white rounded-md m-2`}
            onClick={() => {
              setOpened(true);
            }}
          >
            <UserCard />
          </div>
          <div
            className={`${styles.cardContainer} bg-white rounded-md m-2`}
            onClick={() => {
              setOpened(true);
            }}
          >
            <UserCard />
          </div>
          <div
            className={`${styles.cardContainer} bg-white rounded-md m-2`}
            onClick={() => {
              setOpened(true);
            }}
          >
            <UserCard />
          </div>
          <div
            className={`${styles.cardContainer} bg-white rounded-md m-2`}
            onClick={() => {
              setOpened(true);
            }}
          >
            <UserCard />
          </div>
          <div
            className={`${styles.cardContainer} bg-white rounded-md m-2`}
            onClick={() => {
              setOpened(true);
            }}
          >
            <UserCard />
          </div>
        </div>
      </>
    );
  };

  return (
    <div className={styles.page}>
      <TabsAdmin
        title1={"Kustomer"}
        title2={"Driver"}
        title3={"Admin"}
        icon1={<User size={14} />}
        icon2={<Truck size={14} />}
        icon3={<World size={14} />}
        konten1={kustomer()}
        konten2={driver()}
        konten3={admin()}
      />
      <CustomerModal
        opened={opened}
        onClose={() => {
          setOpened(false);
        }}
      />
    </div>
  );
}

export default AdminListUser;
