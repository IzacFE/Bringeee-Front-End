import React from "react";
import { RadioGroup, Radio, Image, Group, Button } from "@mantine/core";

const ChoosePayment = () => {
  return (
    <div>
      <Group position="center" className="mb-[90px]">
        <RadioGroup>
          <Radio value="BCA" label={<Image src={`https://seeklogo.com/images/B/bca-bank-central-asia-logo-F7E3078D69-seeklogo.com.png`} width={100} />} />

          <Radio value="BNI" label={<Image src="https://seeklogo.com/images/B/bank-bni-logo-737EE0F32C-seeklogo.com.png" width={100} />} />
          <Radio value="BRI" label={<Image src="https://seeklogo.com/images/B/bank-bri-bank-rakyat-logo-C06D6783A8-seeklogo.com.png" width={100} />} />
        </RadioGroup>
      </Group>
      <Group position="center">
        <Button className="bg-amber-500 hover:bg-amber-400 text-stone-700 w-[250px]">Bayar</Button>
      </Group>
    </div>
  );
};

export default ChoosePayment;
