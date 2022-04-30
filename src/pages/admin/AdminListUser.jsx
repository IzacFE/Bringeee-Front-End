import React, { useContext, useEffect, useState } from "react";
import styles from "./AdminListUser.module.css";
import { Truck, User, World } from "tabler-icons-react";
import TabsAdmin from "../../components/tabsAdmin/TabsAdmin";
import UserCard from "../../components/userCard/UserCard";
import CustomerModal from "../../components/customerAccModal/CustomerModal";
import { useNavigate } from "react-router-dom";
import { RoleContext, TokenContext } from "../../App";
import axios from "axios";

function AdminListUser() {
  const { tokenCtx } = useContext(TokenContext);
  const { roleCtx } = useContext(RoleContext);
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);
  const [opened, setOpened] = useState(false);

  const [userCustomer, setUserCostumer] = useState([]);
  const [userDriver, setUserDriver] = useState([]);

  useEffect(() => {
    // if (roleCtx !== "admin") {
    //   navigate("/");
    // } else {
    fetchDriver();
    // }
  }, []);

  // const fetchData= async()=>{
  //     await axios
  //       .get(`https://aws.wildani.tech/api/orders/${params.id}`, {
  //         headers: {
  //           Authorization: `Bearer ${tokenCtx}`,
  //         },
  //       })
  //       .then((response) => {
  //         setDetail(response.data.data);
  //         console.log(response.data.data);
  //       })
  //       .catch((err) => {
  //         console.log("error");
  //       })
  //       .finally(() => setIsReady(true));
  // }

  const fetchDriver = async () => {
    await axios
      .get(`https://aws.wildani.tech/api/drivers?limit=50&page=1`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((response) => {
        setUserDriver(response.data.data);
        console.log(response.data.data);
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

  return (
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
        opened={opened}
        onClose={() => {
          setOpened(false);
        }}
      />
    </div>
  );
}

export default AdminListUser;
