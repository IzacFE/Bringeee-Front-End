import React from "react";
import { Timeline, Text } from "@mantine/core";
import moment from "moment";

function TimelineVer(props) {
  console.log(props.dataHistories);
  return (
    <Timeline active={props.dataHistories.length} bulletSize={20} lineWidth={4} color="yellow">
      {props.dataHistories.map((items) => {
        return (
          <Timeline.Item title={items.log} key={items.id}>
            <Text color="dimmed" size="sm">
              {items.actor}
            </Text>
            <Text size="xs" mt={4}>
              {moment(items.created_at).format("ddd, D MMM YYYY")}
            </Text>
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
}

export default TimelineVer;
