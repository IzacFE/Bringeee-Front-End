import React, { useContext, useEffect, useState } from "react";
import styles from "./AdminDetailOrder.module.css";
import { Group, Button, Image, Text, InputWrapper, Input } from "@mantine/core";
import { TokenContext, RoleContext } from "../../App";
// import DetailOrder from "../../components/detailOrder/DetailOrder";
import StepHorizon from "../../components/stepper/StepHorizon";
import ImageOrder from "../../assets/package.png";
import TimelineVer from "../../components/timeline/TimelineVer";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import DetailOrder from "../../components/detailOrder/DetailOrder";
import LoadSpin from "../../components/loadSpin/LoadSpin";
import AdminHomeOrder from "../../components/detailOrder/AdminHomeOrder";
import AdminConfirmOrder from "../../components/detailOrder/AdminConfirmOrder";
import AdminOngoing from "../../components/detailOrder/AdminOngoing";

function AdminDetailOrder() {
  const { tokenCtx } = useContext(TokenContext);
  const { roleCtx } = useContext(RoleContext);
  const navigate = useNavigate();
  const params = useParams();
  const [isReady, setIsReady] = useState(false);
  const [detail, setDetail] = useState({});
  const [price, setPrice] = useState(0);
  const [history, setHistory] = useState({});

  useEffect(() => {
    if (roleCtx !== "admin") {
      navigate("/");
    } else {
      fetchData();
      fetchOrderHistories();
    }
  }, [roleCtx]);

  const fetchData = async () => {
    await axios
      .get(`https://aws.wildani.tech/api/orders/${params.id}`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((response) => {
        setDetail(response.data.data);

        console.log(response.data.data);
      })
      .catch((err) => {
        console.log("error");
      })
      .finally(() => setIsReady(true));
  };

  const fetchOrderHistories = async () => {
    const { id } = params;
    await axios
      .get(`https://aws.wildani.tech/api/orders/${id}/histories`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((ress) => {
        setHistory(ress.data.data);
        console.log(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleConfirm = async () => {
    setIsReady(false);
    await axios
      .post(
        `https://aws.wildani.tech/api/orders/${params.id}/confirm`,
        {},
        {
          headers: {
            Authorization: `Bearer ${tokenCtx}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        // navigate("/admin-orders");
        // window.location.reload();
      })
      .catch((err) => {
        console.log("error");
      })
      .finally(() => setIsReady(true));
  };

  const handleChangePrice = async () => {
    setIsReady(false);
    var config = {
      method: "patch",
      url: `https://aws.wildani.tech/api/orders/${params.id}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + tokenCtx,
      },
      data: "&fixed_price=" + price,
    };
    await axios(config)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.data);
      })
      .finally(() => setIsReady(true));
  };

  const confirm = () => {
    return (
      <AdminConfirmOrder
        dataDetailOrder={detail}
        clickSetuju={() => {
          handleConfirm();
          console.log("setuju");
        }}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        clickSesuaikan={() => {
          handleChangePrice();
          console.log("sesuaikan");
        }}
      />
    );
  };

  const readyOrder = () => {
    return <AdminHomeOrder dataDetailOrder={detail} />;
  };

  const ongoing = () => {
    return <AdminOngoing dataDetailOrder={detail} dataHistory={history} />;
  };

  const finish = () => {
    return <AdminOngoing dataDetailOrder={detail} dataHistory={history} />;
  };

  let result;
  if (isReady) {
    result = (
      <div className={styles.page}>
        <>{detail.status === "REQUESTED" && confirm()}</>
        <>{detail.status === "NEED_CUSTOMER_CONFIRM" && confirm()}</>
        <>{detail.status === "CONFIRMED" && confirm()}</>
        <>{detail.status === "MANIFESTED" && readyOrder()}</>
        <>{detail.status === "ON_PROCESS" && ongoing()}</>
        <>{detail.status === "DELIVERED" && finish()}</>
      </div>
    );
  } else {
    result = <LoadSpin />;
  }

  return <>{result}</>;
}

export default AdminDetailOrder;
