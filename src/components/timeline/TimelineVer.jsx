import React from "react";
import { Timeline, Text } from "@mantine/core";

function TimelineVer() {
  return (
    <Timeline active={2} bulletSize={20} lineWidth={4} color="yellow">
      <Timeline.Item title="Order diterima">
        <Text color="dimmed" size="sm">
          Ini keterangan
        </Text>
        <Text size="xs" mt={4}>
          13-2-2022
        </Text>
      </Timeline.Item>

      <Timeline.Item title="Order dijemput driver">
        <Text color="dimmed" size="sm">
          Ini keterangan
        </Text>
        <Text size="xs" mt={4}>
          13-2-2022
        </Text>
      </Timeline.Item>

      <Timeline.Item title="Order diantar" lineVariant="dashed">
        <Text color="dimmed" size="sm">
          Ini keterangan
        </Text>
        <Text size="xs" mt={4}>
          13-2-2022
        </Text>
      </Timeline.Item>

      <Timeline.Item title="Order sampai">
        <Text color="dimmed" size="sm">
          Ini keterangan
        </Text>
        <Text size="xs" mt={4}>
          13-2-2022
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}

export default TimelineVer;
