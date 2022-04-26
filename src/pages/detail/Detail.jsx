import React, { useState } from "react";
import DetailOrder from "../../components/detailOrder/DetailOrder";
import TimelineVer from "../../components/timeline/TimelineVer";
import { Image } from "@mantine/core";
import ImageOrder from "../../assets/package.png";

function Detail() {
  const [role, setRole] = useState("driver");

  if (role === "costumer") {
    return (
      <div className="container mx-auto py-5 px-3">
        <div className="flex flex-col">
          <h2 className="text-center font-bold text-[35px]">Kargo menunggu di jemput driver...</h2>
          <div className="bg-slate-50 p-5 rounded-md shadow-md md:w-6/12 md:mx-auto">
            <div className="flex flex-col md:flex-row mb-3">
              <div className="w-full md:w-1/2">
                <DetailOrder />
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
  } else if (role === "driver") {
    return (
      <div className="container mx-auto py-5 px-3">
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
}

export default Detail;
