import React, { useState, useEffect, useContext } from "react";

import { useParams } from "react-router-dom";
import { Group, Button, Image } from "@mantine/core";
import DetailOrder from "../../components/detailOrder/DetailOrder";
import StepHorizon from "../../components/stepper/StepHorizon";
import ChoosePayment from "../../components/choosePayment/ChoosePayment";
import ConfirmPayment from "../../components/confirmPayment/ConfirmPayment";
import LoadSpin from "../../components/loadSpin/LoadSpin";
import axios from "axios";
import { TokenContext } from "../../App";

function ConfirmOrder() {
  const { tokenCtx } = useContext(TokenContext);
  const params = useParams();
  const [status, setStatus] = useState("request");
  const [isReady, setIsReady] = useState(false);
  const [dataDetailOrder, setDataDetailOrder] = useState([]);

  useEffect(() => {
    fetchDetailOrder();
  }, []);

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
        console.log(err);
      })
      .finally(() => {
        setIsReady(true);
      });
  };

  const handleConfirmOrder = async () => {
    const { id } = params;
    await axios
      .post(`https://aws.wildani.tech/api/customers/orders/${id}/confirm`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((ress) => {
        console.log(ress);
        alert("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancelOrder = async () => {
    const { id } = params;
    await axios
      .post(`https://aws.wildani.tech/api/customers/orders/${id}/cancel`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((ress) => {
        console.log(ress);
        alert("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (status === "request" || status === "adjust") {
    if (isReady) {
      return (
        <div className="container mx-auto py-[5vh] px-[5vw]">
          <div className="flex flex-col md:flex-row md:gap-2 mb-3">
            <div className="mx-auto">
              <StepHorizon status={status} />
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
              {status === "adjust" && (
                <Group position="center" className="flex flex-col md:flex-row">
                  <Button className="bg-amber-500 hover:bg-amber-400 text-stone-700 w-[250px]" onClick={() => handleConfirmOrder()}>
                    Setuju
                  </Button>
                  <Button className="bg-red-500 hover:bg-red-400 text-stone-700 w-[250px]" onClick={() => handleCancelOrder()}>
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
  } else if (status === "confirm") {
    if (isReady) {
      return (
        <div className="container mx-auto py-[5vh] px-[5vw]">
          <div className="flex flex-col md:flex-row md:gap-2 mb-3">
            <div className="mx-auto">
              <StepHorizon status={status} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-2 mb-10">
            <div className="mx-auto">
              <h2 className="font-semibold text-[25px]">Pilih Bank Yang Diinginkan...</h2>
            </div>
          </div>
          <ChoosePayment />
        </div>
      );
    } else {
      return <LoadSpin />;
    }
  } else if (status === "transfer") {
    if (isReady) {
      return (
        <div className="container mx-auto py-[5vh] px-[5vw]">
          <div className="flex flex-col md:flex-row md:gap-2 mb-3">
            <div className="mx-auto">
              <StepHorizon status={status} />
            </div>
          </div>
          <div className="flex flex-col justify-center md:flex-row md:gap-2 mb-3">
            <ConfirmPayment />
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
            <ConfirmPayment />
          </div>
        </div>
      );
    } else {
      return <LoadSpin />;
    }
  }
}

export default ConfirmOrder;
