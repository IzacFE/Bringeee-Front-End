import React from "react";
import { Tabs } from "@mantine/core";

function TabsAdmin(props) {
  return (
    <Tabs color="yellow">
      <Tabs.Tab label={props.title1} icon={props.icon1}>
        {props.konten1}
      </Tabs.Tab>
      <Tabs.Tab label={props.title2} icon={props.icon2}>
        {props.konten2}
      </Tabs.Tab>
    </Tabs>
  );
}

export default TabsAdmin;
