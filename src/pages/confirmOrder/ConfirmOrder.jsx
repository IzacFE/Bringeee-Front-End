import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { Group, Button, Image } from "@mantine/core";
import DetailOrder from "../../components/detailOrder/DetailOrder";
import StepHorizon from "../../components/stepper/StepHorizon";
import ChoosePayment from "../../components/choosePayment/ChoosePayment";
import ImageOrder from "../../assets/package.png";
import ConfirmPayment from "../../components/confirmPayment/ConfirmPayment";
import LoadSpin from "../../components/loadSpin/LoadSpin";
import axios from "axios";

function ConfirmOrder() {
  const params = useParams();
  const [status, setStatus] = useState("confirm");
  const [isReady, setIsReady] = useState(false);
  const [dataDetailOrder, setDataDetailOrder] = useState([]);

  useEffect(() => {
    fetchDetailOrder();
  }, []);

  const fetchDetailOrder = async () => {
    const { id } = params;
    await axios
      .get(`https://virtserver.swaggerhub.com/wildanie12/Bringee-API/v1.0/api/customers/orders/${id}`)
      .then((ress) => {
        setDataDetailOrder(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setIsReady(true);
  };

  if (status === "request") {
    if (isReady) {
      return (
        <div className="container mx-auto py-[5vh] px-[5vw]">
          <div className="flex flex-col md:flex-row md:gap-2 mb-3">
            <div className="mx-auto">
              <StepHorizon />
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
                    <Image src={ImageOrder} width={250} mx="auto" />
                  </Group>
                </div>
              </div>
              <Group position="center">
                <Button className="bg-amber-500 hover:bg-amber-400 text-stone-700 w-[250px]">Kirim</Button>
              </Group>
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
              <StepHorizon />
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
              <StepHorizon />
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
