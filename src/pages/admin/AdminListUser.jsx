import React, { useContext, useEffect, useState } from "react";
import styles from "./AdminListUser.module.css";
import { Truck, User, World } from "tabler-icons-react";
import TabsAdmin from "../../components/tabsAdmin/TabsAdmin";
import UserCard from "../../components/userCard/UserCard";
import CustomerModal from "../../components/customerAccModal/CustomerModal";
import { useNavigate } from "react-router-dom";
import { RoleContext, TokenContext } from "../../App";
import axios from "axios";
import LoadSpin from "../../components/loadSpin/LoadSpin";

function AdminListUser() {
  const { tokenCtx } = useContext(TokenContext);
  const { roleCtx } = useContext(RoleContext);
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);
  const [opened, setOpened] = useState(false);
  const [modalData, setModalData] = useState({});

  const [userCustomer, setUserCostumer] = useState([]);
  const [userDriver, setUserDriver] = useState([]);

  useEffect(() => {
    if (roleCtx !== "admin") {
      navigate("/");
    } else {
      fetchCustomer();
      fetchDriver();
    }
  }, []);

  const fetchCustomer = async () => {
    await axios
      .get(`https://aws.wildani.tech/api/customers?limit=50&page=1`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((response) => {
        setUserCostumer(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const fetchDriver = async () => {
    await axios
      .get(`https://aws.wildani.tech/api/drivers?limit=50&page=1`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((response) => {
        setUserDriver(response.data.data);
      })
      .catch((err) => {
        console.log("error");
      })
      .finally(() => setIsReady(true));
  };

  const kustomer = () => {
    return (
      <>
        <div
          className={`${styles.confirmContainer} rounded-md bg-stone-700 p-2`}
        >
          {userCustomer.map((item) => {
            return (
              <div
                key={item.id}
                className={`${styles.cardContainer} bg-white rounded-md m-2`}
                onClick={() => {
                  setModalData(item);
                  setOpened(true);
                }}
              >
                <UserCard
                  image={item.avatar}
                  role={item.role}
                  name={item.name}
                  email={item.email}
                  phone={item.phone_number}
                />
              </div>
            );
          })}
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
          {userDriver.map((item) => {
            return (
              <div
                key={item.id}
                className={`${styles.cardContainer} bg-white rounded-md m-2`}
                onClick={() => {
                  navigate(`/admin-driver-detail/${item.id}`);
                }}
              >
                <UserCard
                  image={item.avatar}
                  status={item.status}
                  role={item.role}
                  driverStatus={item.account_status}
                  name={item.name}
                  email={item.email}
                  phone={item.phone_number}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  };

  const handleDelCost = async (akunID) => {
    setIsReady(false);
    await axios
      .delete(`https://aws.wildani.tech/api/customers/${akunID}`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((response) => {
        fetchCustomer();
      })
      .catch((err) => {
        console.log("error");
      })
      .finally(() => setIsReady(true));
  };

  let result;
  if (isReady) {
    result = (
      <div className={styles.page}>
        <TabsAdmin
          title1={"Kustomer"}
          title2={"Driver"}
          icon1={<User size={14} />}
          icon2={<Truck size={14} />}
          konten1={kustomer()}
          konten2={driver()}
        />
        <CustomerModal
          avatar={modalData.avatar}
          name={modalData.name}
          email={modalData.email}
          gender={modalData.gender}
          dob={modalData.dob}
          phone={modalData.phone_number}
          idAcc={modalData.id}
          opened={opened}
          onClose={() => {
            setOpened(false);
          }}
          clickDelete={() => {
            setOpened(false);
            handleDelCost(modalData.id);
          }}
        />
      </div>
    );
  } else {
    result = (
      <>
        <LoadSpin />
      </>
    );
  }
  return <>{result}</>;
}

export default AdminListUser;
