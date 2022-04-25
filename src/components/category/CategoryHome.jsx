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
      <Tabs.Tab label={"Pick up"} />
      <Tabs.Tab label={"Trailer"} />
    </Tabs>
  );
}

export default CategoryHome;
