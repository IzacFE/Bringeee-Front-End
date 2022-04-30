import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import DetailOrder from "../../components/detailOrder/DetailOrder";
import TimelineVer from "../../components/timeline/TimelineVer";
import { Image } from "@mantine/core";
import ImageOrder from "../../assets/package.png";
import LoadSpin from "../../components/loadSpin/LoadSpin";
import { TokenContext, RoleContext } from "../../App";
import axios from "axios";

function Detail() {
  const { tokenCtx } = useContext(TokenContext);
  const { roleCtx } = useContext(RoleContext);
  const params = useParams();
  const [isReady, setIsReady] = useState(false);
  const [dataDetailOrder, setDataDetailOrder] = useState([]);
  const [dataOrderHistories, setDataOrderHistories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetchDetailOrder();
    await fetchOrderHistories();
    setIsReady(true);
  };

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
        console.log(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchOrderHistories = async () => {
    const { id } = params;
    await axios
      .get(`https://virtserver.swaggerhub.com/wildanie12/Bringee-API/v1.1/api/customers/orders/${id}/histories`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((ress) => {
        setDataOrderHistories(ress.data.data);
        console.log(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (roleCtx === "customer") {
    if (isReady) {
      return (
        <div className="container mx-auto py-[5vh] px-[5vw]">
          <div className="flex flex-col">
            {dataDetailOrder.status === "ARRIVED" ? <h2 className="text-center font-bold text-[35px] mb-5">Kargo telah sampai tujuan...</h2> : <h2 className="text-center font-bold text-[35px] mb-5">Kargo menunggu di jemput driver...</h2>}
            <div className="bg-slate-50 p-5 rounded-md shadow-md md:w-6/12 md:mx-auto">
              <div className="flex flex-col md:flex-row mb-3">
                <div className="w-full md:w-1/2">
                  <DetailOrder dataDetailOrder={dataDetailOrder} />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex justify-center md:justify-start">
                    <TimelineVer dataHistories={dataOrderHistories} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <LoadSpin />;
    }
  } else if (roleCtx === "driver") {
    if (isReady) {
      return (
        <div className="container mx-auto py-[5vh] px-[5vh]">
          <div className="flex flex-col">
            <div className="bg-slate-50 p-5 rounded-md shadow-md md:w-6/12 md:mx-auto">
              <div className="flex flex-col md:flex-row mb-3">
                <div className="w-full md:w-1/2">
                  <DetailOrder />
                  <div className="py-2">
                    <label className="font-medium text-[17px]">Diambil</label>
                    <p className="text-amber-500 font-semibold text-[17px]">19-4-2022</p>
                  </div>
                  <div className="py-2">
                    <label className="font-medium text-[17px]">Selesai</label>
                    <p className="text-amber-500 font-semibold text-[17px]">24-4-2022</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex justify-center md:justify-start">
                    <Image src={ImageOrder} width={250} mx="auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  } else {
    return <LoadSpin />;
  }
}

export default Detail;
