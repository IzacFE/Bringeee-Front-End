import React from "react";

const DetailOrder = (props) => {
  return (
    <div>
      <div className="py-2">
        <label className="font-medium text-[17px]">Nama Customer</label>
        <p className="text-amber-500 font-semibold text-[17px]">{props.dataDetailOrder.customer.name}</p>
      </div>
      <div className="py-2">
        <label className="font-medium text-[17px]">Volume Muatan</label>
        <p className="text-amber-500 font-semibold text-[17px]">
          {props.dataDetailOrder.total_volume} m<sup>3</sup>
        </p>
      </div>
      <div className="py-2">
        <label className="font-medium text-[17px]">Berat Muatan</label>
        <p className="text-amber-500 font-semibold text-[17px]">{props.dataDetailOrder.total_weight} kg</p>
      </div>
      <div className="py-2">
        <label className="font-medium text-[17px]">Asal</label>
        <p className="text-amber-500 font-semibold text-[17px]">
          {props.dataDetailOrder.destination_start_address}, {props.dataDetailOrder.destination_start_city}, {props.dataDetailOrder.destination_start_district}, {props.dataDetailOrder.destination_start_province}
        </p>
      </div>
      <div className="py-2">
        <label className="font-medium text-[17px]">Tujuan</label>
        <p className="text-amber-500 font-semibold text-[17px]">
          {props.dataDetailOrder.destination_end_address}, {props.dataDetailOrder.destination_end_city}, {props.dataDetailOrder.destination_end_district}, {props.dataDetailOrder.destination_end_province}
        </p>
      </div>
      <div className="py-2">
        <label className="font-medium text-[17px]">Estimasi Tarif</label>
        <p className="text-amber-500 font-semibold text-[17px]">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          }).format(props.dataDetailOrder.estimated_price)}
        </p>
      </div>
      <div className="py-2">
        <label className="font-medium text-[17px]">Penyesuaian Tarif/Tarif Tetap</label>
        <p className="text-amber-500 font-semibold text-[17px]">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          }).format(props.dataDetailOrder.fix_price)}
        </p>
      </div>
      <div className="py-2">
        <label className="font-medium text-[17px]">Status</label>
        <p className="text-amber-500 font-semibold text-[17px]">
          {props.dataDetailOrder.status === "REQUESTED"
            ? "PERMINTAAN ORDER"
            : props.dataDetailOrder.status === "NEED_CUSTOMER_CONFIRM"
            ? "PENYESUAIAN TARIF"
            : props.dataDetailOrder.status === "CONFIRMED"
            ? "PROSES PEMBAYARAN"
            : props.dataDetailOrder.status === "MANIFESTED"
            ? "TELAH DIBAYAR"
            : props.dataDetailOrder.status === "ON_PROCESS"
            ? "DALAM PENGIRIMAN"
            : props.dataDetailOrder.status === "DELIVERED"
            ? "TERKIRIM"
            : "DIBATALKAN"}
        </p>
      </div>
    </div>
  );
};

export default DetailOrder;
