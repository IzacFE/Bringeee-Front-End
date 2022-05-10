import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Image, Table } from "@mantine/core";
import axios from "axios";
import { TokenContext } from "../../App";
const ConfirmPayment = (props) => {
  const { tokenCtx } = useContext(TokenContext);
  const params = useParams();
  const [dataPayment, setDataPayment] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    fecthPayment();
  }, []);

  const fecthPayment = async () => {
    const { id } = params;
    await axios
      .get(`https://aws.wildani.tech/api/customers/orders/${id}/payment`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((ress) => {
        setDataPayment(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsReady(true);
      });
  };

  if (isReady) {
    return (
      <div className="bg-neutral-50 flex flex-col min-h-[350px] drop-shadow-md md:w-1/2 p-4">
        {dataPayment ? (
          dataPayment.bank === "bni" ? (
            <Image src={`https://seeklogo.com/images/B/bank-bni-logo-737EE0F32C-seeklogo.com.png`} width={150} className="mx-auto" />
          ) : dataPayment.bank === "bri" ? (
            <Image src={`https://seeklogo.com/images/B/bank-bri-bank-rakyat-logo-C06D6783A8-seeklogo.com.png`} width={150} className="mx-auto" />
          ) : (
            dataPayment.bank === "bca" && <Image src={`https://seeklogo.com/images/B/bca-bank-central-asia-logo-F7E3078D69-seeklogo.com.png`} width={150} className="mx-auto" />
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
                <td>
                  {dataPayment.payment_method === "BANK_TRANSFER_BNI"
                    ? "BANK TRANSFER BNI"
                    : dataPayment.payment_method === "BANK_TRANSFER_BRI"
                    ? "BANK TRANSFER BRI"
                    : dataPayment.payment_method === "BANK_TRANSFER_BCA" && "BANK TRANSFER BCA"}
                </td>
              </tr>
              <tr>
                <td className="py-2">No Virtual Account</td>
                <td>{dataPayment.bill_number}</td>
              </tr>
              <tr>
                <td className="py-2">Jumlah Pembayaran</td>
                <td>
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                  }).format(dataPayment.gross_amount)}
                </td>
              </tr>
            </tbody>
          </Table>
          {props.children}
        </div>
      </div>
    );
  }
};

export default ConfirmPayment;
