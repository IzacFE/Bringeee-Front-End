import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { TokenContext, RoleContext } from "../../App";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

import { Button, Pagination } from "@mantine/core";
import CategoryHome from "../../components/category/CategoryHome";
import LoadSpin from "../../components/loadSpin/LoadSpin";
import OrderCard from "../../components/orderCard/OrderCard";

function Home() {
  const { tokenCtx } = useContext(TokenContext);
  const { roleCtx } = useContext(RoleContext);
  const navigate = useNavigate();

  const [orderData, setOrderData] = useState([]);
  const [category, setCategory] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const [paginData, setPaginData] = useState({});
  const [paginLink, setPaginLink] = useState({});
  const [activePage, setPage] = useState(1);

  useEffect(() => {
    setIsReady(false);
    if (roleCtx === "admin") {
      fetchData();
    } else if (roleCtx === "driver") {
      fetchData();
    } else if (roleCtx === "customer") {
      navigate("/profile");
    } else {
      navigate("/");
    }
  }, [tokenCtx, activePage]);

  useEffect(() => {
    if (category !== 0) {
      fetchCategory();
    } else if (category === 0) {
      fetchData();
    }
  }, [category]);

  const fetchData = async () => {
    setIsReady(false);
    if (roleCtx === "admin") {
      await axios
        .get(
          `https://aws.wildani.tech/api/orders?status=MANIFESTED&limit=16&page=${activePage}`,
          {
            headers: {
              Authorization: `Bearer ${tokenCtx}`,
            },
          }
        )
        .then((response) => {
          setOrderData(response.data.data);
          setPaginData(response.data.pagination);
          setPaginLink(response.data.links);
          console.log(response.data.pagination);
        })
        .catch((err) => {
          console.log("error");
        })
        .finally(() => setIsReady(true));
    } else if (roleCtx === "driver") {
      await axios
        .get(
          `https://aws.wildani.tech/api/drivers/orders?status=MANIFESTED&limit=16&page=${activePage}`,
          {
            headers: {
              Authorization: `Bearer ${tokenCtx}`,
            },
          }
        )
        .then((response) => {
          setOrderData(response.data.data);
          setPaginData(response.data.pagination);
          setPaginLink(response.data.links);
          console.log(response.data.data);
        })
        .catch((err) => {
          console.log("error");
        })
        .finally(() => setIsReady(true));
    }
  };

  const fetchCategory = async () => {
    setIsReady(false);
    await axios
      .get(
        `https://aws.wildani.tech/api/orders?status=MANIFESTED&truck_type=${category}`,
        {
          headers: {
            Authorization: `Bearer ${tokenCtx}`,
          },
        }
      )
      .then((response) => {
        setOrderData(response.data.data);
        setPaginData(response.data.pagination);
        setPaginLink(response.data.links);
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
        <div className={styles.konten}>
          <div className={styles.category}>
            {roleCtx === "admin" && (
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
                    avatar={item.customer.avatar}
                    name={item.customer.name}
                    created={item.created_at.slice(0, 10)}
                    onClick={() => {
                      if (roleCtx === "admin") {
                        navigate(`/admin-detail-order/${item.id}`);
                      } else if (roleCtx === "driver") {
                        navigate(`/take-order/${item.id}`);
                      }
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <Pagination
          page={activePage}
          onChange={setPage}
          total={paginData.total_pages}
          color="yellow"
          className={styles.pagination}
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

export default Home;
