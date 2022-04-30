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

function AdminDetailOrder() {
  const { tokenCtx } = useContext(TokenContext);
  const { roleCtx } = useContext(RoleContext);
  const navigate = useNavigate();
  const params = useParams();
  const [isReady, setIsReady] = useState(false);
  const [detail, setDetail] = useState({});
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (roleCtx !== "admin") {
      navigate("/");
    } else {
      fetchData();
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
              <div className="w-full md:w-1/2">
                <DetailOrder dataDetailOrder={detail} />
              </div>
              <div className="w-full md:w-1/2">
                <Group>
                  <Image src={detail.order_picture} width={200} />
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
              <div className="w-full md:w-1/2">
                <DetailOrder dataDetailOrder={detail} />
              </div>
              <div className="w-full md:w-1/2">
                <Group>
                  <Image src={detail.order_picture} width={200} />
                  <div>
                    <label className="font-medium text-[17px]">
                      Setujui sesuai perkiraan tarif
                    </label>
                    <p className="text-amber-500 font-semibold text-[17px]">
                      Rp {detail.estimated_price}
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

  let result;
  if (isReady) {
    result = (
      <div className={styles.page}>
        <>{detail.status === "REQUESTED" && confirm()}</>
        <>{detail.status === "ongoing" && ongoing()}</>
        <>{detail.status === "ongoing" && ongoing()}</>
      </div>
    );
  } else {
    result = <LoadSpin />;
  }

  return <>{result}</>;
}

export default AdminDetailOrder;
