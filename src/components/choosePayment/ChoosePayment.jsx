import React, { useState, useContext } from "react";
import { RadioGroup, Radio, Image, Group, Button } from "@mantine/core";
import axios from "axios";
import { useParams } from "react-router-dom";
import { TokenContext } from "../../App";
import { showNotification } from "@mantine/notifications";
import { Check, X } from "tabler-icons-react";

const ChoosePayment = (props) => {
  const [isEnable, setIsEnable] = useState(true);
  const { tokenCtx } = useContext(TokenContext);
  const params = useParams();
  const [bank, setBank] = useState("");

  const createPayment = async () => {
    setIsEnable(false);
    const { id } = params;
    var config = {
      method: "post",
      url: `https://aws.wildani.tech/api/customers/orders/${id}/payment`,
      headers: {
        Authorization: `Bearer ${tokenCtx}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: "&payment_method=" + bank,
    };

    await axios(config)
      .then((ress) => {
        showNotification({
          title: "Berhasil",
          message: "Transaksi berhasil dibuat",
          icon: <Check size={18} />,
          color: "green",
        });
        props.reloadSoftPage();
        setIsEnable(true);
      })
      .catch((err) => {
        showNotification({
          title: "Gagal",
          message: "Transaksi gagal dibuat",
          icon: <X size={18} />,
          color: "red",
        });
        setIsEnable(true);
      });
  };

  return (
    <div>
      <Group position="center" className="mb-[90px]">
        <RadioGroup onChange={setBank} id="choose-bank-payment">
          <Radio
            value="BANK_TRANSFER_BCA"
            label={
              <Image
                src={`https://seeklogo.com/images/B/bca-bank-central-asia-logo-F7E3078D69-seeklogo.com.png`}
                width={100}
              />
            }
          />
          <Radio
            value="BANK_TRANSFER_BNI"
            label={
              <Image
                src="https://seeklogo.com/images/B/bank-bni-logo-737EE0F32C-seeklogo.com.png"
                width={100}
              />
            }
          />
          <Radio
            value="BANK_TRANSFER_BRI"
            label={
              <Image
                src="https://seeklogo.com/images/B/bank-bri-bank-rakyat-logo-C06D6783A8-seeklogo.com.png"
                width={100}
              />
            }
          />
        </RadioGroup>
      </Group>
      <Group position="center">
        {isEnable ? (
          <Button className="bg-amber-500 hover:bg-amber-400 text-stone-700 w-[250px]" onClick={() => createPayment()} id="btn-choosePayment">
            Bayar
          </Button>
        ) : (
          <Button loading className="bg-amber-500 hover:bg-amber-400 text-stone-700 w-[250px]" onClick={() => createPayment()} id="btn-choosePayment">
            Bayar
          </Button>
        )}
      </Group>
    </div>
  );
};

export default ChoosePayment;
