import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import LoadSpin from "../../components/loadSpin/LoadSpin";
import DetailOrder from "../../components/detailOrder/DetailOrder";
import { TokenContext } from "../../App";
import axios from "axios";
import { Image, Button, Group, TextInput } from "@mantine/core";
import ImageOrder from "../../assets/package.png";

const TakeOrder = () => {
  const params = useParams();
  const { tokenCtx } = useContext(TokenContext);
  const [isReady, setIsReady] = useState(false);
  const [dataUser, setDataUser] = useState([]);
  const [arrivedPic, setArrivedPic] = useState("");
  const [dataDetailOrder, setDataDetailOrder] = useState([]);

  useEffect(() => {
    async function fetchDatas() {
      await fecthData();
      await fetchDetailOrder();
    }
    fetchDatas();
  }, []);

  const fecthData = async () => {
    await axios
      .get(`https://aws.wildani.tech/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((ress) => {
        setDataUser(ress.data.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchDetailOrder = async () => {
    const { id } = params;
    await axios
      .get(`https://aws.wildani.tech/api/orders/${id}`, {
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

  const handleTakeOrder = async () => {
    const { id } = params;
    var config = {
      method: "post",
      url: `https://aws.wildani.tech/api/drivers/orders/${id}/take_order`,
      headers: {
        Authorization: `Bearer ${tokenCtx}`,
      },
    };
    await axios(config)
      .then((ress) => {
        console.log(ress);
        fecthData();
        fetchDetailOrder();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFinishOrder = async () => {
    const { id } = params;
    const formData = new FormData();

    formData.append("arrived_picture", arrivedPic);

    await axios
      .post(`https://aws.wildani.tech/api/drivers/orders/${id}/finish_order`, formData, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((ress) => {
        console.log(ress);
        fecthData();
        fetchDetailOrder();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isReady) {
    return (
      <div className="container mx-auto py-[5vh] px-[5vh]">
        <div className="flex flex-col">
          <div className="bg-slate-50 p-5 rounded-md shadow-md md:w-6/12 md:mx-auto">
            <div className="flex flex-col md:flex-row mb-3">
              <div className="w-full md:w-1/2">
                <DetailOrder dataDetailOrder={dataDetailOrder} />
                {dataDetailOrder.status === "ON_PROCESS" && (
                  <div className="py-2">
                    <TextInput type="file" label="Foto" placeholder="" onChange={(e) => setArrivedPic(e.target.files[0])} id="form-arrivedPicture" />
                  </div>
                )}
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex justify-center md:justify-start">
                  <Image src={ImageOrder} width={250} mx="auto" />
                </div>
              </div>
            </div>
            {dataUser.status === "IDLE" && dataDetailOrder.status === "MANIFESTED" ? (
              <Group position="center" className="flex flex-col md:flex-row">
                <Button className="bg-amber-500 hover:bg-amber-400 text-stone-700 w-[250px]" onClick={() => handleTakeOrder()} id="btn-takeOrder">
                  Ambil Order
                </Button>
              </Group>
            ) : (
              dataDetailOrder.status === "ON_PROCESS" && (
                <Group position="center">
                  <Button className="bg-amber-500 hover:bg-amber-400 text-stone-700 w-[250px]" onClick={() => handleFinishOrder()} id="btn-finishOrder">
                    Selesai
                  </Button>
                </Group>
              )
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <LoadSpin />;
  }
};

export default TakeOrder;
