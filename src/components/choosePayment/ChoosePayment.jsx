import React from "react";
import { RadioGroup, Radio, Image } from "@mantine/core";

const ChoosePayment = () => {
  return (
    <div>
      <RadioGroup>
        <Radio value="BCA" label={<Image src={`https://seeklogo.com/images/B/bca-bank-central-asia-logo-F7E3078D69-seeklogo.com.png`} width={100} />} />

        <Radio value="BNI" label={<Image src="https://seeklogo.com/images/B/bank-bni-logo-737EE0F32C-seeklogo.com.png" width={100} />} />
        <Radio value="BRI" label={<Image src="https://seeklogo.com/images/B/bank-bri-bank-rakyat-logo-C06D6783A8-seeklogo.com.png" width={100} />} />
      </RadioGroup>
    </div>
  );
};

export default ChoosePayment;
