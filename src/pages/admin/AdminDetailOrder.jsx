import React, { useEffect, useState } from "react";
import styles from "./AdminDetailOrder.module.css";
import { Group, Button, Image, Text, InputWrapper, Input } from "@mantine/core";
// import DetailOrder from "../../components/detailOrder/DetailOrder";
import StepHorizon from "../../components/stepper/StepHorizon";
import ImageOrder from "../../assets/package.png";
import TimelineVer from "../../components/timeline/TimelineVer";
import { useNavigate } from "react-router-dom";

function AdminDetailOrder() {
  const navigate = useNavigate();
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (localStorage.getItem("role") !== "admin") {
      navigate("/");
    } else {
      setStatus("confirm");
    }
  }, []);

  const ongoing = () => {
    return (
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:gap-2 mb-3">
          {/* <div className="mx-auto">
          <StepHorizon />
        </div> */}
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="bg-slate-50 p-5 rounded-md shadow-md md:w-6/12 md:mx-auto">
            <div className="flex flex-col md:flex-row mb-3">
              <div className="w-full md:w-1/2">{/* <DetailOrder /> */}</div>
              <div className="w-full md:w-1/2">
                <Group>
                  <Image src={ImageOrder} width={200} />
                  <TimelineVer />
                </Group>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const confirm = () => {
    return (
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:gap-2 mb-3">
          {/* <div className="mx-auto">
          <StepHorizon />
        </div> */}
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="bg-slate-50 p-5 rounded-md shadow-md md:w-6/12 md:mx-auto">
            <div className="flex flex-col md:flex-row mb-3">
              <div className="w-full md:w-1/2">{/* <DetailOrder /> */}</div>
              <div className="w-full md:w-1/2">
                <Group>
                  <Image src={ImageOrder} width={200} />
                  <div>
                    <label className="font-medium text-[17px]">
                      Setujui sesuai perkiraan tarif
                    </label>
                    <p className="text-amber-500 font-semibold text-[17px]">
                      Rp 720000
                    </p>
                    <Button className="bg-amber-500 hover:bg-amber-400 my-2">
                      Setujui
                    </Button>
                  </div>
                  <div>
                    <label className="font-medium text-[17px]">
                      Sesuaikan tarif
                    </label>
                    <InputWrapper id="emailCos" required>
                      <Input
                        id="emailCos"
                        type="Number"
                        placeholder="720000"
                        onChange={(e) => setPrice(e.target.value)}
                        className="py-2"
                      />
                    </InputWrapper>
                    <Button className="bg-amber-500 hover:bg-amber-400 my-2">
                      Kirim
                    </Button>
                  </div>
                </Group>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={styles.page}>
        <>{status === "confirm" && confirm()}</>
        <>{status === "ongoing" && ongoing()}</>
      </div>
    </>
  );
}

export default AdminDetailOrder;
