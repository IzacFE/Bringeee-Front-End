import React from "react";
import { Tabs } from "@mantine/core";

function TabsAdmin(props) {
  return (
    <Tabs color="yellow">
      <Tabs.Tab label={props.title1} icon={props.icon1}>
        Konten pertama
      </Tabs.Tab>
      <Tabs.Tab label={props.title2} icon={props.icon2}>
        Konten kedua
      </Tabs.Tab>
      <Tabs.Tab label={props.title3} icon={props.icon3}>
        Konten ketiga
      </Tabs.Tab>
    </Tabs>
  );
}

export default TabsAdmin;
