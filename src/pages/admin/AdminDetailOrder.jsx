import React, { useContext, useEffect, useState } from "react";
import styles from "./AdminDetailOrder.module.css";
import { TokenContext, RoleContext } from "../../App";
import StepHorizon from "../../components/stepper/StepHorizon";
import ImageOrder from "../../assets/package.png";
import TimelineVer from "../../components/timeline/TimelineVer";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import LoadSpin from "../../components/loadSpin/LoadSpin";
import AdminHomeOrder from "../../components/detailOrder/AdminHomeOrder";
import AdminConfirmOrder from "../../components/detailOrder/AdminConfirmOrder";
import AdminOngoing from "../../components/detailOrder/AdminOngoing";
import AdminCancelledOrder from "../../components/detailOrder/AdminCancelledOrder";
import { useModals } from "@mantine/modals";
import { Text } from "@mantine/core";

function AdminDetailOrder() {
  const { tokenCtx } = useContext(TokenContext);
  const { roleCtx } = useContext(RoleContext);
  const navigate = useNavigate();
  const params = useParams();
  const [isReady, setIsReady] = useState(false);
  const modals = useModals();

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
      })
      .catch((err) => {});
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
      })
      .catch((err) => {})
      .finally(() => setIsReady(true));
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
        fetchData();
        fetchOrderHistories();
      })
      .catch((err) => {})
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
        fetchData();
        fetchOrderHistories();
      })
      .catch((err) => {})
      .finally(() => setIsReady(true));
  };

  const handleCancel = async () => {
    setIsReady(false);
    await axios
      .post(
        `https://aws.wildani.tech/api/orders/${params.id}/cancel`,
        {},
        {
          headers: {
            Authorization: `Bearer ${tokenCtx}`,
          },
        }
      )
      .then((response) => {
        fetchData();
        fetchOrderHistories();
      })
      .catch((err) => {})
      .finally(() => setIsReady(true));
  };

  const openCancelModal = () =>
    modals.openConfirmModal({
      title: `Batalkan Order`,
      centered: true,
      children: (
        <>
          <Text size="sm">
            Anda akan membatalkan order. Tekan tombol Batalkan untuk
            mengkonfirmasi dan tekan tombol balik untuk kembali
          </Text>
        </>
      ),
      labels: { confirm: "Batalkan", cancel: "Kembali" },
      confirmProps: { color: "red" },
      onConfirm: () => {
        handleCancel();
      },
    });

  const confirm = () => {
    return (
      <AdminConfirmOrder
        dataDetailOrder={detail}
        clickSetuju={() => {
          handleConfirm();
        }}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        clickSesuaikan={() => {
          handleChangePrice();
        }}
        clickCancel={openCancelModal}
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

  const cancelled = () => {
    return (
      <AdminCancelledOrder dataDetailOrder={detail} dataHistory={history} />
    );
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
        <>{detail.status === "CANCELLED" && cancelled()}</>
      </div>
    );
  } else {
    result = <LoadSpin />;
  }

  return <>{result}</>;
}

export default AdminDetailOrder;
