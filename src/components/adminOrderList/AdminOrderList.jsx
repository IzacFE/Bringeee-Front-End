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
import image from "../../assets/box.png";
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

  // const data = [
  //   {
  //     image,
  //     name: "kostumer",
  //     email: "ini@gmail.com",
  //     from: "asal, Jawa",
  //     destination: "Madura",
  //     vehicleType: "Pick up",
  //     status: "Pengajuan",
  //     id: 1,
  //   },
  //   {
  //     image,
  //     name: "kostumer",
  //     email: "ini@gmail.com",
  //     from: "asal, Jawa",
  //     destination: "Madura",
  //     vehicleType: "Pick up",
  //     status: "Pengajuan",
  //     id: 2,
  //   },
  //   {
  //     image,
  //     name: "kostumer",
  //     email: "ini@gmail.com",
  //     from: "asal, Jawa",
  //     destination: "Madura",
  //     vehicleType: "Pick up",
  //     status: "Penyesuaian",
  //     id: 3,
  //   },
  // ];

  const rows = data.map((item, index) => (
    <>
      {item && (
        <tr key={item.id}>
          <td
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
            {item.status === "REQUESTED" ? (
              <Badge>Konfirmasi admin</Badge>
            ) : (
              <Badge color="gray">Konfirmasi kustomer</Badge>
            )}
          </td>
        </tr>
      )}
      {/* {!item && (
        <>
          <div key={index}>
            <p>Nothing</p>
          </div>
        </>
      )} */}
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
