import React from "react";
import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";

function StepHorizon(props) {
  const [active, setActive] = useState(props.status === "REQUESTED" || props.status === "NEED_CUSTOMER_CONFIRM" ? 0 : props.status == "CONFIRMED" ? 1 : props.status == "PAYMENT" ? 2 : 3);

  return (
    <>
      <Stepper color="yellow" active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="Order" description="Konfirmasi order">
          Menunggu Konfirmasi
        </Stepper.Step>
        <Stepper.Step label="Metode bayar" description="Pilih metode pembayaran">
          Lakukan Pilih Bank Transfer
        </Stepper.Step>
        <Stepper.Step label="Pembayaran" description="Transfer Pembayaran">
          Lakukan Transfer Ke Bank Tujuan
        </Stepper.Step>
        <Stepper.Completed>Completed!</Stepper.Completed>
      </Stepper>
    </>
  );
}

export default StepHorizon;
