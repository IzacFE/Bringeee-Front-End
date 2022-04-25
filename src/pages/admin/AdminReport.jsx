import React from "react";
import { Table } from "@mantine/core";

function AdminReport() {
  return (
    <div className="container mx-auto p-4">
      <Table striped className="w-full md:w-1/2">
        <tbody>
          <tr>
            <td>Total Omset</td>
            <td>Rp 50.000.000</td>
          </tr>
          <tr>
            <td>Jumlah Order Aktif</td>
            <td>93 Order</td>
          </tr>
          <tr>
            <td>Jumlah Ongoing Order</td>
            <td>57 Order</td>
          </tr>
          <tr>
            <td>Jumlah Order Selesai</td>
            <td>215 Order</td>
          </tr>
          <tr>
            <td>Jumlah Driver</td>
            <td>437 Driver</td>
          </tr>
          <tr>
            <td>Jumlah Customer</td>
            <td>639 Customer</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default AdminReport;
