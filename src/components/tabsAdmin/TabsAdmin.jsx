import React from "react";
import { Tabs } from "@mantine/core";

function TabsAdmin(props) {
  return (
    <Tabs color="yellow">
      <Tabs.Tab label={props.title1} icon={props.icon1}>
        {props.confirm}
      </Tabs.Tab>
      <Tabs.Tab label={props.title2} icon={props.icon2}>
        {props.ongoing}
      </Tabs.Tab>
      <Tabs.Tab label={props.title3} icon={props.icon3}>
        {props.history}
      </Tabs.Tab>
    </Tabs>
  );
}

export default TabsAdmin;
