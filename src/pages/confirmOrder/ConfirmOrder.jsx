import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Group, Button, Image } from "@mantine/core";
import DetailOrder from "../../components/detailOrder/DetailOrder";
import StepHorizon from "../../components/stepper/StepHorizon";
import ChoosePayment from "../../components/choosePayment/ChoosePayment";
import ConfirmPayment from "../../components/confirmPayment/ConfirmPayment";
import LoadSpin from "../../components/loadSpin/LoadSpin";
import axios from "axios";
import { TokenContext } from "../../App";
import { showNotification } from "@mantine/notifications";
import { Check, X } from "tabler-icons-react";

function ConfirmOrder() {
  let navigate = useNavigate();
  const { tokenCtx } = useContext(TokenContext);
  const [status] = useState("request");
  const params = useParams();
  const [isReady, setIsReady] = useState(false);
  const [dataDetailOrder, setDataDetailOrder] = useState([]);

  useEffect(() => {
    fetchDetailOrder();
  }, [tokenCtx]);

  const fetchDetailOrder = async () => {
    const { id } = params;
    await axios
      .get(`https://aws.wildani.tech/api/customers/orders/${id}`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((ress) => {
        setDataDetailOrder(ress.data.data);
      })
      .catch((err) => {
        showNotification({
          title: "Gagal",
          message: "Gagal menampilkan data",
          icon: <X size={18} />,
          color: "red",
        });
      })
      .finally(() => {
        setIsReady(true);
      });
  };

  const handleConfirmOrder = async () => {
    const { id } = params;
    await axios
      .post(
        `https://aws.wildani.tech/api/customers/orders/${id}/confirm`,
        {},
        {
          headers: {
            Authorization: `Bearer ${tokenCtx}`,
          },
        }
      )
      .then((ress) => {
        showNotification({
          title: "Berhasil",
          message: "Order dikonfirmasi",
          icon: <Check size={18} />,
          color: "green",
        });
        fetchDetailOrder();
      })
      .catch((err) => {
        showNotification({
          title: "Gagal",
          message: "Order tidak dapat dikonfirmasi",
          icon: <X size={18} />,
          color: "red",
        });
      });
  };

  const handleCancelOrder = async () => {
    const { id } = params;
    await axios
      .post(
        `https://aws.wildani.tech/api/customers/orders/${id}/cancel`,
        {},
        {
          headers: {
            Authorization: `Bearer ${tokenCtx}`,
          },
        }
      )
      .then((ress) => {
        showNotification({
          title: "Berhasil",
          message: "Order dibatalkan",
          icon: <Check size={18} />,
          color: "green",
        });
        fetchDetailOrder();
      })
      .catch((err) => {
        showNotification({
          title: "Gagal",
          message: "Order tidak dapat dibatalkan",
          icon: <X size={18} />,
          color: "red",
        });
      });
  };

  const handleCancelPayment = async () => {
    const { id } = params;
    var config = {
      method: "post",
      url: `https://aws.wildani.tech/api/customers/orders/${id}/payment/cancel`,
      headers: {
        Authorization: `Bearer ${tokenCtx}`,
      },
    };
    await axios(config)
      .then((ress) => {
        showNotification({
          title: "Berhasil",
          message: "Metode Pembayaran dibatalkan!",
          icon: <Check size={18} />,
          color: "green",
        });
        fetchDetailOrder();
      })
      .catch((err) => {
        showNotification({
          title: "Gagal",
          message: "Metode Pembayaran tidak dapat dibatalkan!",
          icon: <X size={18} />,
          color: "red",
        });
      });
  };

  if ((!dataDetailOrder.transaction_id && dataDetailOrder.status === "REQUESTED") || (!dataDetailOrder.transaction_id && dataDetailOrder.status === "NEED_CUSTOMER_CONFIRM")) {
    if (isReady) {
      return (
        <div className="container mx-auto py-[5vh] px-[5vw]">
          <div className="flex flex-col md:flex-row md:gap-2 mb-3">
            <div className="mx-auto">
              <StepHorizon status={dataDetailOrder.status} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-2">
            <div className="bg-slate-50 p-5 rounded-md shadow-md md:w-6/12 md:mx-auto">
              <div className="flex flex-col md:flex-row mb-3">
                <div className="w-full md:w-1/2">
                  <DetailOrder dataDetailOrder={dataDetailOrder} />
                </div>
                <div className="w-full md:w-1/2">
                  <Group position="center">
                    <Image src={dataDetailOrder.order_picture} width={250} mx="auto" />
                  </Group>
                </div>
              </div>
              {!dataDetailOrder.transaction_id && dataDetailOrder.status === "NEED_CUSTOMER_CONFIRM" && (
                <Group position="center" className="flex flex-col md:flex-row">
                  <Button className="bg-amber-500 hover:bg-amber-400 text-stone-700 w-[250px]" onClick={() => handleConfirmOrder()} id="btn-confirmOrder-agree">
                    Setuju
                  </Button>
                  <Button className="bg-red-500 hover:bg-red-400 text-stone-700 w-[250px]" onClick={() => handleCancelOrder()} id="btn-confirmOrder-cancel">
                    Batal
                  </Button>
                </Group>
              )}
            </div>
          </div>
        </div>
      );
    } else {
      return <LoadSpin />;
    }
  } else if (!dataDetailOrder.transaction_id && dataDetailOrder.status === "CONFIRMED") {
    if (isReady) {
      return (
        <div className="container mx-auto py-[5vh] px-[5vw]">
          <div className="flex flex-col md:flex-row md:gap-2 mb-3">
            <div className="mx-auto">
              <StepHorizon status={dataDetailOrder.status} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-2 mb-10">
            <div className="mx-auto">
              <h2 className="font-semibold text-[25px]">Pilih Bank Yang Diinginkan...</h2>
            </div>
          </div>
          <ChoosePayment reloadSoftPage={() => fetchDetailOrder()} />
        </div>
      );
    } else {
      return <LoadSpin />;
    }
  } else if (dataDetailOrder.transaction_id && dataDetailOrder.status === "CONFIRMED") {
    if (isReady) {
      return (
        <div className="container mx-auto py-[5vh] px-[5vw]">
          <div className="flex flex-col md:flex-row md:gap-2 mb-3">
            <div className="mx-auto">
              <StepHorizon status="PAYMENT" />
            </div>
          </div>
          <div className="flex flex-col justify-center md:flex-row md:gap-2 mb-3">
            <ConfirmPayment>
              <Group position="center" className="mt-10">
                <Button className="bg-amber-500 hover:bg-amber-400 text-stone-700 w-[250px]" onClick={() => handleCancelPayment()} id="btn-cancelPayment">
                  Ubah Metode Pembayaran
                </Button>
              </Group>
            </ConfirmPayment>
          </div>
        </div>
      );
    } else {
      return <LoadSpin />;
    }
  } else {
    if (isReady) {
      return (
        <div className="container mx-auto py-[5vh] px-[5vw]">
          <div className="flex flex-col md:flex-row md:gap-2 mb-3">
            <div className="mx-auto">
              <StepHorizon status={status} />
            </div>
          </div>
          <div className="flex flex-col justify-center md:flex-row md:gap-2 mb-3">
            <ConfirmPayment>
              <Group position="center" className="mt-10">
                <Button className="bg-amber-500 hover:bg-amber-400 text-stone-700 w-[250px]" onClick={() => navigate(`/detail-order/${params.id}`)} id="btn-choosePayment">
                  Detail Order
                </Button>
              </Group>
            </ConfirmPayment>
          </div>
        </div>
      );
    } else {
      return <LoadSpin />;
    }
  }
}

export default ConfirmOrder;
