import React from "react";
import { Group, Button, Image } from "@mantine/core";
import DetailOrder from "../../components/detailOrder/DetailOrder";
import StepHorizon from "../../components/stepper/StepHorizon";
import ImageOrder from "../../assets/package.png";

function ConfirmOrder() {
  return (
    <div className="container mx-auto py-5 px-3">
      <div className="flex flex-col md:flex-row md:gap-2 mb-3">
        <div className="mx-auto">
          <StepHorizon />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-2">
        <div className="bg-slate-50 p-5 rounded-md shadow-md md:w-6/12 md:mx-auto">
          <div className="flex flex-col md:flex-row mb-3">
            <div className="w-full md:w-1/2">
              <DetailOrder />
            </div>
            <div className="w-full md:w-1/2">
              <Group position="center">
                <Image src={ImageOrder} width={250} mx="auto" />
              </Group>
            </div>
          </div>
          <Group position="center">
            <Button className="bg-amber-500 hover:bg-amber-400 text-stone-700 w-[250px]">Kirim</Button>
          </Group>
        </div>
      </div>
    </div>
  );
}

export default ConfirmOrder;
