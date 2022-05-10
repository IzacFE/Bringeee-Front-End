import React from "react";
import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  ScrollArea,
  createStyles,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles(() => ({
  orderButton: {
    cursor: "pointer",
  },
}));

function AdminOrderList(props) {
  const navigate = useNavigate();
  const { classes } = useStyles();

  const data = props.dataOrder;
  const key = props.check;

  const rows = data.map((item) => (
    <>
      {item && (
        <tr key={`${key}${item.status}${item.id}`}>
          <td
            id="btn_admin_order_detail"
            onClick={() => {
              navigate(`/admin-detail-order/${item.id}`);
            }}
          >
            <Group
              spacing="sm"
              onClick={props.onClick}
              className={classes.orderButton}
            >
              <Avatar size={40} src={item.customer.avatar} radius={40} />
              <div>
                <Text size="sm" weight={500}>
                  {item.customer.name}
                </Text>
                <Text size="xs" color="dimmed">
                  {item.customer.email}
                </Text>
              </div>
            </Group>
          </td>

          <td>{item.destination_start_address}</td>

          <td>{item.destination_end_address}</td>

          <td>{item.truck_type.truck_type}</td>

          <td>
            {item.status === "REQUESTED" && <Badge>Konfirmasi admin</Badge>}

            {item.status === "NEED_CUSTOMER_CONFIRM" && (
              <Badge color="gray">Konfirmasi kustomer</Badge>
            )}

            {item.status === "CONFIRMED" && (
              <Badge color="green">Menunggu Pembayaran</Badge>
            )}

            {item.status === "MANIFESTED" && (
              <Badge color="grape">Menunggu Dipilih Driver</Badge>
            )}

            {item.status === "ON_PROCESS" && (
              <Badge color="yellow">Diantar Driver</Badge>
            )}

            {item.status === "DELIVERED" && (
              <Badge color="orange">Order Selesai</Badge>
            )}

            {item.status === "CANCELLED" && (
              <Badge color="red">Dibatalkan</Badge>
            )}
          </td>
        </tr>
      )}
    </>
  ));

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Kustomer</th>
            <th>Asal</th>
            <th>Tujuan</th>
            <th>Kendaraan</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}

export default AdminOrderList;
