import React from "react";
import { Timeline, Text } from "@mantine/core";

function TimelineVer(props) {
  return (
    <Timeline active={2} bulletSize={20} lineWidth={4} color="yellow">
      {props.dataHistories.map((items, index) => {
        return (
          <Timeline.Item title={items.log} key={index}>
            <Text size="xs" mt={4}>
              {items.created_at}
            </Text>
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
}

export default TimelineVer;
