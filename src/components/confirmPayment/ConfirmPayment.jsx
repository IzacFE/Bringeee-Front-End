import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Image, Table } from "@mantine/core";
import axios from "axios";
const ConfirmPayment = () => {
  const params = useParams();
  const [dataPayment, setDataPayment] = useState([]);

  useEffect(() => {
    fecthPayment();
  }, []);

  const fecthPayment = async () => {
    const { id } = params;
    await axios
      .get(`https://virtserver.swaggerhub.com/wildanie12/Bringee-API/v1.0/api/customers/orders/${id}/payment`)
      .then((ress) => {
        setDataPayment(ress.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-neutral-50 flex flex-col min-h-[350px] drop-shadow-md md:w-1/2 p-4">
      {dataPayment ? (
        dataPayment.bank === "BNI" ? (
          <Image src={`https://seeklogo.com/images/B/bank-bni-logo-737EE0F32C-seeklogo.com.png`} width={150} className="mx-auto" />
        ) : dataPayment.bank === "BRI" ? (
          <Image src={`https://seeklogo.com/images/B/bank-bri-bank-rakyat-logo-C06D6783A8-seeklogo.com.png`} width={150} className="mx-auto" />
        ) : (
          <Image src={`https://seeklogo.com/images/B/bca-bank-central-asia-logo-F7E3078D69-seeklogo.com.png`} width={150} className="mx-auto" />
        )
      ) : (
        ""
      )}
      <div className="my-5">
        <Table>
          <tbody>
            <tr>
              <td className="py-2">No Order</td>
              <td>{dataPayment.order_id}</td>
            </tr>
            <tr>
              <td className="py-2">Pembayaran dengan</td>
              <td>{dataPayment.payment_method}</td>
            </tr>
            <tr>
              <td className="py-2">No Virtual Account</td>
              <td>{dataPayment.bill_number}</td>
            </tr>
            <tr>
              <td className="py-2">Jumlah Pembayaran</td>
              <td>Rp. {dataPayment.gross_amount}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ConfirmPayment;
