import { Button } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import CategoryHome from "../../components/category/CategoryHome";
import LoadSpin from "../../components/loadSpin/LoadSpin";
import OrderCard from "../../components/orderCard/OrderCard";
import PaginList from "../../components/pagination/PaginList";
import SearchComps from "../../components/search/SearchComps";
import styles from "./Home.module.css";

function Home() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(false);
  const [orderData, setOrderData] = useState([]);
  const [category, setCategory] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("role") === "admin") {
      setAdmin(true);
    }
    fetchData();
  }, []);

  const fetchData = async () => {
    // await axios
    //   .get(`https://aws.wildani.tech/api/orders`, {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //   })
    //   .then((response) => {
    //     setOrderData(response.data.data);
    //     console.log(response.data.data);
    //     //  setDisplayedData(response.data.data.slice(0, 8));
    //   })
    //   .catch((err) => {
    //     console.log("error");
    //   })
    //   .finally(() => setIsReady(true));
    const data = [
      {
        order_picture: "https://source.unsplash.com/600x600/?random",
        destination_start_city: "Malang",
        destination_end_city: "Surabaya",
        fix_price: "310000",
        avatar: "https://source.unsplash.com/600x600/?random",
        name: "Ahmad",
        created_at: "2012-07-28T07:02:13:000+07:00",
        id: "1",
      },
      {
        order_picture: "https://source.unsplash.com/600x600/?random",
        destination_start_city: "Malang",
        destination_end_city: "Surabaya",
        fix_price: "310000",
        avatar: "https://source.unsplash.com/600x600/?random",
        name: "Ahmad",
        created_at: "2012-07-28T07:02:13:000+07:00",
        id: "1",
      },
      {
        order_picture: "https://source.unsplash.com/600x600/?random",
        destination_start_city: "Malang",
        destination_end_city: "Surabaya",
        fix_price: "310000",
        avatar: "https://source.unsplash.com/600x600/?random",
        name: "Ahmad",
        created_at: "2012-07-28T07:02:13:000+07:00",
        id: "1",
      },
      {
        order_picture: "https://source.unsplash.com/600x600/?random",
        destination_start_city: "Malang",
        destination_end_city: "Surabaya",
        fix_price: "310000",
        avatar: "https://source.unsplash.com/600x600/?random",
        name: "Ahmad",
        created_at: "2012-07-28T07:02:13:000+07:00",
        id: "1",
      },
      {
        order_picture: "https://source.unsplash.com/600x600/?random",
        destination_start_city: "Malang",
        destination_end_city: "Surabaya",
        fix_price: "310000",
        avatar: "https://source.unsplash.com/600x600/?random",
        name: "Ahmad",
        created_at: "2012-07-28T07:02:13:000+07:00",
        id: "1",
      },
      {
        order_picture: "https://source.unsplash.com/600x600/?random",
        destination_start_city: "Malang",
        destination_end_city: "Surabaya",
        fix_price: "310000",
        avatar: "https://source.unsplash.com/600x600/?random",
        name: "Ahmad",
        created_at: "2012-07-28T07:02:13:000+07:00",
        id: "1",
      },
      {
        order_picture: "https://source.unsplash.com/600x600/?random",
        destination_start_city: "Malang",
        destination_end_city: "Surabaya",
        fix_price: "310000",
        avatar: "https://source.unsplash.com/600x600/?random",
        name: "Ahmad",
        created_at: "2012-07-28T07:02:13:000+07:00",
        id: "1",
      },
      {
        order_picture: "https://source.unsplash.com/600x600/?random",
        destination_start_city: "Malang",
        destination_end_city: "Surabaya",
        fix_price: "310000",
        avatar: "https://source.unsplash.com/600x600/?random",
        name: "Ahmad",
        created_at: "2012-07-28T07:02:13:000+07:00",
        id: "1",
      },
      {
        order_picture: "https://source.unsplash.com/600x600/?random",
        destination_start_city: "Malang",
        destination_end_city: "Surabaya",
        fix_price: "310000",
        avatar: "https://source.unsplash.com/600x600/?random",
        name: "Ahmad",
        created_at: "2012-07-28T07:02:13:000+07:00",
        id: "1",
      },
      {
        order_picture: "https://source.unsplash.com/600x600/?random",
        destination_start_city: "Malang",
        destination_end_city: "Surabaya",
        fix_price: "310000",
        avatar: "https://source.unsplash.com/600x600/?random",
        name: "Ahmad",
        created_at: "2012-07-28T07:02:13:000+07:00",
        id: "1",
      },
      {
        order_picture: "https://source.unsplash.com/600x600/?random",
        destination_start_city: "Malang",
        destination_end_city: "Surabaya",
        fix_price: "310000",
        avatar: "https://source.unsplash.com/600x600/?random",
        name: "Ahmad",
        created_at: "2012-07-28T07:02:13:000+07:00",
        id: "1",
      },
      {
        order_picture: "https://source.unsplash.com/600x600/?random",
        destination_start_city: "Malang",
        destination_end_city: "Surabaya",
        fix_price: "310000",
        avatar: "https://source.unsplash.com/600x600/?random",
        name: "Ahmad",
        created_at: "2012-07-28T07:02:13:000+07:00",
        id: "1",
      },
      {
        order_picture: "https://source.unsplash.com/600x600/?random",
        destination_start_city: "Malang",
        destination_end_city: "Surabaya",
        fix_price: "310000",
        avatar: "https://source.unsplash.com/600x600/?random",
        name: "Ahmad",
        created_at: "2012-07-28T07:02:13:000+07:00",
        id: "1",
      },
      {
        order_picture: "https://source.unsplash.com/600x600/?random",
        destination_start_city: "Malang",
        destination_end_city: "Surabaya",
        fix_price: "310000",
        avatar: "https://source.unsplash.com/600x600/?random",
        name: "Ahmad",
        created_at: "2012-07-28T07:02:13:000+07:00",
        id: "1",
      },
      {
        order_picture: "https://source.unsplash.com/600x600/?random",
        destination_start_city: "Malang",
        destination_end_city: "Surabaya",
        fix_price: "310000",
        avatar: "https://source.unsplash.com/600x600/?random",
        name: "Ahmad",
        created_at: "2012-07-28T07:02:13:000+07:00",
        id: "1",
      },
    ];

    setOrderData(data);
    console.log(data);
    setIsReady(true);
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
