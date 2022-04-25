import React from "react";
import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";

function StepHorizon() {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper
        color="yellow"
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
      >
        <Stepper.Step label="Order" description="Konfirmasi order">
          Step 1 content Konfirmasi
        </Stepper.Step>
        <Stepper.Step
          label="Metode bayar"
          description="Pilih metode pembayaran"
        >
          Step 2 content Pilih BANK
        </Stepper.Step>
        <Stepper.Step label="Pembayaran" description="Transfer Pembayaran">
          Step 3 content TRANSFER
        </Stepper.Step>
        <Stepper.Completed>Completed, Lanjut ke detail order</Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button className="bg-amber-500 hover:bg-amber-500" onClick={nextStep}>
          Next step
        </Button>
      </Group>
    </>
  );
}

export default StepHorizon;
