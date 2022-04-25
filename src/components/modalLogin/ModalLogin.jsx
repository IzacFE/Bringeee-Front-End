import React, { useState } from "react";
import { Modal, Button, Group, Input, InputWrapper } from "@mantine/core";

const ModalLogin = (props) => {
  return (
    <>
      <Modal
        opened={props.openedModal}
        onClose={props.closedModal}
        title="Login"
        styles={{
          title: {
            color: "#f59e0b",
            fontWeight: "700",
            fontSize: "25px",
          },
        }}
      >
        <InputWrapper id="email" required label="Email">
          <Input
            id="email"
            type="email"
            placeholder="Your email"
            onChange={props.email}
          />
        </InputWrapper>
        <InputWrapper id="password" required label="Kata Sandi">
          <Input
            id="password"
            type="password"
            placeholder="Your password"
            onChange={props.password}
          />
        </InputWrapper>
        <Group position="right" className="my-5">
          <Button
            className="bg-amber-500 hover:bg-amber-400 text-stone-700"
            onClick={props.login}
          >
            Login
          </Button>
        </Group>
      </Modal>
    </>
  );
};

export default ModalLogin;
