import React from "react";
import { Image, Table } from "@mantine/core";
const ConfirmPayment = () => {
  return (
    <div className="bg-neutral-50 flex flex-col min-h-[350px] drop-shadow-md md:w-1/2 p-4">
      <Image src={`https://seeklogo.com/images/B/bca-bank-central-asia-logo-F7E3078D69-seeklogo.com.png`} width={150} className="mx-auto" />
      <div className="my-5">
        <Table>
          <tbody>
            <tr>
              <td className="py-2">No Order</td>
              <td>21323134</td>
            </tr>
            <tr>
              <td className="py-2">Pembayaran dengan</td>
              <td>Bank Transfer - Virtual Account</td>
            </tr>
            <tr>
              <td className="py-2">No Virtual Account</td>
              <td>435343643454345435</td>
            </tr>
            <tr>
              <td className="py-2">Jumlah Pembayaran</td>
              <td>Rp. 1.200.000</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ConfirmPayment;
