import React, { useState } from "react";
import { Group, Button, Image, Text, InputWrapper, Input } from "@mantine/core";
import DetailOrder from "../../components/detailOrder/DetailOrder";
import StepHorizon from "../../components/stepper/StepHorizon";
import ImageOrder from "../../assets/package.png";
import TimelineVer from "../../components/timeline/TimelineVer";

function AdminDetailOrder() {
  const [price, setPrice] = useState(0);

  const ongoing = () => {
    return (
      <div className="container mx-auto py-5 px-3">
        <div className="flex flex-col md:flex-row md:gap-2 mb-3">
          {/* <div className="mx-auto">
          <StepHorizon />
        </div> */}
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="bg-slate-50 p-5 rounded-md shadow-md md:w-6/12 md:mx-auto">
            <div className="flex flex-col md:flex-row mb-3">
              <div className="w-full md:w-1/2">
                <DetailOrder />
              </div>
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
      <div className="container mx-auto py-5 px-3">
        <div className="flex flex-col md:flex-row md:gap-2 mb-3">
          {/* <div className="mx-auto">
          <StepHorizon />
        </div> */}
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="bg-slate-50 p-5 rounded-md shadow-md md:w-6/12 md:mx-auto">
            <div className="flex flex-col md:flex-row mb-3">
              <div className="w-full md:w-1/2">
                <DetailOrder />
              </div>
              <div className="w-full md:w-1/2">
                <Group>
                  <Image src={ImageOrder} width={200} />
                  <div>
                    <Text>Setujui sesuai perkiraan tarif</Text>
                    <Text>Rp 720000</Text>
                    <Button className="bg-black">Setuju</Button>
                    <Text>Sesuaikan perkiraan tarif</Text>
                    <InputWrapper id="emailCos" required label="Email">
                      <Input
                        id="emailCos"
                        type="Number"
                        placeholder="720000"
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </InputWrapper>
                    <Button className="bg-black">Kirim</Button>
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
      <>{confirm()}</>
      <>{ongoing()}</>
    </>
  );
}

export default AdminDetailOrder;
