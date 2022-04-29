import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { TokenContext, RoleContext } from "../../App";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

import { Button } from "@mantine/core";
import CategoryHome from "../../components/category/CategoryHome";
import LoadSpin from "../../components/loadSpin/LoadSpin";
import OrderCard from "../../components/orderCard/OrderCard";
import PaginList from "../../components/pagination/PaginList";
import SearchComps from "../../components/search/SearchComps";

function Home() {
  const { tokenCtx, setTokenCtx } = useContext(TokenContext);
  const { roleCtx, setRoleCtx } = useContext(RoleContext);
  const navigate = useNavigate();

  const [admin, setAdmin] = useState(false);
  const [driver, setDriver] = useState(false);
  const [orderData, setOrderData] = useState([]);
  const [category, setCategory] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (roleCtx === "admin") {
      setAdmin(true);
      fetchData();
    } else if (roleCtx === "driver") {
      setDriver(true);
      fetchData();
    } else if (roleCtx === "customer") {
      navigate("/profile");
    } else {
      navigate("/");
    }
  }, []);

  const fetchData = async () => {
    if (roleCtx === "admin") {
      await axios
        .get(`https://aws.wildani.tech/api/orders`, {
          headers: {
            Authorization: `Bearer ${tokenCtx}`,
          },
        })
        .then((response) => {
          setOrderData(response.data.data);
          console.log(response.data.data);
        })
        .catch((err) => {
          console.log("error");
        })
        .finally(() => setIsReady(true));
    } else if (roleCtx === "driver") {
      await axios
        .get(`https://aws.wildani.tech/api/drivers/orders`, {
          headers: {
            Authorization: `Bearer ${tokenCtx}`,
          },
        })
        .then((response) => {
          setOrderData(response.data.data);
          console.log(response.data.data);
        })
        .catch((err) => {
          console.log("error");
        })
        .finally(() => setIsReady(true));
    }

    // const data = [
    //   {
    //     order_picture: "https://source.unsplash.com/600x600/?random",
    //     destination_start_city: "Malang",
    //     destination_end_city: "Surabaya",
    //     fix_price: "310000",
    //     avatar: "https://source.unsplash.com/600x600/?random",
    //     name: "Ahmad",
    //     created_at: "2012-07-28T07:02:13:000+07:00",
    //     id: "1",
    //   },
    //   {
    //     order_picture: "https://source.unsplash.com/600x600/?random",
    //     destination_start_city: "Malang",
    //     destination_end_city: "Surabaya",
    //     fix_price: "310000",
    //     avatar: "https://source.unsplash.com/600x600/?random",
    //     name: "Ahmad",
    //     created_at: "2012-07-28T07:02:13:000+07:00",
    //     id: "1",
    //   },
    //   {
    //     order_picture: "https://source.unsplash.com/600x600/?random",
    //     destination_start_city: "Malang",
    //     destination_end_city: "Surabaya",
    //     fix_price: "310000",
    //     avatar: "https://source.unsplash.com/600x600/?random",
    //     name: "Ahmad",
    //     created_at: "2012-07-28T07:02:13:000+07:00",
    //     id: "1",
    //   },
    //   {
    //     order_picture: "https://source.unsplash.com/600x600/?random",
    //     destination_start_city: "Malang",
    //     destination_end_city: "Surabaya",
    //     fix_price: "310000",
    //     avatar: "https://source.unsplash.com/600x600/?random",
    //     name: "Ahmad",
    //     created_at: "2012-07-28T07:02:13:000+07:00",
    //     id: "1",
    //   },
    //   {
    //     order_picture: "https://source.unsplash.com/600x600/?random",
    //     destination_start_city: "Malang",
    //     destination_end_city: "Surabaya",
    //     fix_price: "310000",
    //     avatar: "https://source.unsplash.com/600x600/?random",
    //     name: "Ahmad",
    //     created_at: "2012-07-28T07:02:13:000+07:00",
    //     id: "1",
    //   },
    //   {
    //     order_picture: "https://source.unsplash.com/600x600/?random",
    //     destination_start_city: "Malang",
    //     destination_end_city: "Surabaya",
    //     fix_price: "310000",
    //     avatar: "https://source.unsplash.com/600x600/?random",
    //     name: "Ahmad",
    //     created_at: "2012-07-28T07:02:13:000+07:00",
    //     id: "1",
    //   },
    //   {
    //     order_picture: "https://source.unsplash.com/600x600/?random",
    //     destination_start_city: "Malang",
    //     destination_end_city: "Surabaya",
    //     fix_price: "310000",
    //     avatar: "https://source.unsplash.com/600x600/?random",
    //     name: "Ahmad",
    //     created_at: "2012-07-28T07:02:13:000+07:00",
    //     id: "1",
    //   },
    //   {
    //     order_picture: "https://source.unsplash.com/600x600/?random",
    //     destination_start_city: "Malang",
    //     destination_end_city: "Surabaya",
    //     fix_price: "310000",
    //     avatar: "https://source.unsplash.com/600x600/?random",
    //     name: "Ahmad",
    //     created_at: "2012-07-28T07:02:13:000+07:00",
    //     id: "1",
    //   },
    //   {
    //     order_picture: "https://source.unsplash.com/600x600/?random",
    //     destination_start_city: "Malang",
    //     destination_end_city: "Surabaya",
    //     fix_price: "310000",
    //     avatar: "https://source.unsplash.com/600x600/?random",
    //     name: "Ahmad",
    //     created_at: "2012-07-28T07:02:13:000+07:00",
    //     id: "1",
    //   },
    //   {
    //     order_picture: "https://source.unsplash.com/600x600/?random",
    //     destination_start_city: "Malang",
    //     destination_end_city: "Surabaya",
    //     fix_price: "310000",
    //     avatar: "https://source.unsplash.com/600x600/?random",
    //     name: "Ahmad",
    //     created_at: "2012-07-28T07:02:13:000+07:00",
    //     id: "1",
    //   },
    //   {
    //     order_picture: "https://source.unsplash.com/600x600/?random",
    //     destination_start_city: "Malang",
    //     destination_end_city: "Surabaya",
    //     fix_price: "310000",
    //     avatar: "https://source.unsplash.com/600x600/?random",
    //     name: "Ahmad",
    //     created_at: "2012-07-28T07:02:13:000+07:00",
    //     id: "1",
    //   },
    //   {
    //     order_picture: "https://source.unsplash.com/600x600/?random",
    //     destination_start_city: "Malang",
    //     destination_end_city: "Surabaya",
    //     fix_price: "310000",
    //     avatar: "https://source.unsplash.com/600x600/?random",
    //     name: "Ahmad",
    //     created_at: "2012-07-28T07:02:13:000+07:00",
    //     id: "1",
    //   },
    //   {
    //     order_picture: "https://source.unsplash.com/600x600/?random",
    //     destination_start_city: "Malang",
    //     destination_end_city: "Surabaya",
    //     fix_price: "310000",
    //     avatar: "https://source.unsplash.com/600x600/?random",
    //     name: "Ahmad",
    //     created_at: "2012-07-28T07:02:13:000+07:00",
    //     id: "1",
    //   },
    //   {
    //     order_picture: "https://source.unsplash.com/600x600/?random",
    //     destination_start_city: "Malang",
    //     destination_end_city: "Surabaya",
    //     fix_price: "310000",
    //     avatar: "https://source.unsplash.com/600x600/?random",
    //     name: "Ahmad",
    //     created_at: "2012-07-28T07:02:13:000+07:00",
    //     id: "1",
    //   },
    //   {
    //     order_picture: "https://source.unsplash.com/600x600/?random",
    //     destination_start_city: "Malang",
    //     destination_end_city: "Surabaya",
    //     fix_price: "310000",
    //     avatar: "https://source.unsplash.com/600x600/?random",
    //     name: "Ahmad",
    //     created_at: "2012-07-28T07:02:13:000+07:00",
    //     id: "1",
    //   },
    // ];

    // setOrderData(data);
    // console.log(data);
    // setIsReady(true);
  };

  let result;
  if (isReady) {
    result = (
      <div className={styles.page}>
        <div className={styles.konten}>
          <div className={styles.searchContainer}>
            <SearchComps />
          </div>

          <div className={styles.category}>
            {admin && (
              <CategoryHome active={category} setActive={setCategory} />
            )}
          </div>

          <div className={styles.orderContainer}>
            {orderData.map((item, index) => {
              return (
                <div key={index} className={styles.orderCard}>
                  <OrderCard
                    image={item.order_picture}
                    from={item.destination_start_city}
                    destination={item.destination_end_city}
                    price={item.fix_price}
                    avatar={item.avatar}
                    name={item.name}
                    created={item.created_at.slice(0, 10)}
                    onClick={() => {
                      navigate(`/detail-order/${item.id}`);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <PaginList className={styles.pagination} />
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

export default Home;
