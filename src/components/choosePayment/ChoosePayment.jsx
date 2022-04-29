import React, { useState } from "react";
import { RadioGroup, Radio, Image, Group, Button } from "@mantine/core";
import axios from "axios";
import { useParams } from "react-router-dom";

const ChoosePayment = () => {
  const params = useParams();
  const [bank, setBank] = useState("");

  const createPayment = async () => {
    const { id } = params;
    await axios
      .post(`https://virtserver.swaggerhub.com/wildanie12/Bringee-API/v1.0/api/customers/orders/${id}/payment`, {
        body: {
          payment_method: bank,
        },
      })
      .then((ress) => {
        console.log(ress.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Group position="center" className="mb-[90px]">
        <RadioGroup onChange={setBank}>
          <Radio value="BCA" label={<Image src={`https://seeklogo.com/images/B/bca-bank-central-asia-logo-F7E3078D69-seeklogo.com.png`} width={100} />} />
          <Radio value="BNI" label={<Image src="https://seeklogo.com/images/B/bank-bni-logo-737EE0F32C-seeklogo.com.png" width={100} />} />
          <Radio value="BRI" label={<Image src="https://seeklogo.com/images/B/bank-bri-bank-rakyat-logo-C06D6783A8-seeklogo.com.png" width={100} />} />
        </RadioGroup>
      </Group>
      <Group position="center">
        <Button className="bg-amber-500 hover:bg-amber-400 text-stone-700 w-[250px]" onClick={() => createPayment()}>
          Bayar
        </Button>
      </Group>
    </div>
  );
};

export default ChoosePayment;
