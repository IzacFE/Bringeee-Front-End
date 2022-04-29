import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailOrder from "../../components/detailOrder/DetailOrder";
import TimelineVer from "../../components/timeline/TimelineVer";
import { Image } from "@mantine/core";
import ImageOrder from "../../assets/package.png";
import LoadSpin from "../../components/loadSpin/LoadSpin";
import axios from "axios";

function Detail() {
  const params = useParams();
  const [role, setRole] = useState("costumer");
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
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((ress) => {
        setDataDetailOrder(ress.data.data);
        console.log(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsReady(true);
      });
  };

  if (role === "costumer") {
    if (isReady) {
      return (
        <div className="container mx-auto py-[5vh] px-[5vw]">
          <div className="flex flex-col">
            <h2 className="text-center font-bold text-[35px] mb-5">Kargo menunggu di jemput driver...</h2>
            <div className="bg-slate-50 p-5 rounded-md shadow-md md:w-6/12 md:mx-auto">
              <div className="flex flex-col md:flex-row mb-3">
                <div className="w-full md:w-1/2">
                  <DetailOrder dataDetailOrder={dataDetailOrder} />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex justify-center md:justify-start">
                    <TimelineVer />
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
  } else if (role === "driver") {
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
