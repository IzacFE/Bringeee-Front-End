import React from "react";
import { Tabs } from "@mantine/core";

function CategoryHome(props) {
  return (
    <Tabs
      grow
      color="yellow"
      active={props.active}
      onTabChange={props.setActive}
    >
      <Tabs.Tab label={"Semua"} />
      <Tabs.Tab label={"Pick up A"} />
      <Tabs.Tab label={"Pick up B"} />
      <Tabs.Tab label={"Mobil box A"} />
      <Tabs.Tab label={"Mobil box B"} />
      <Tabs.Tab label={"Truk Fuso A"} />
      <Tabs.Tab label={"Truk Fuso B"} />
    </Tabs>
  );
}

export default CategoryHome;
