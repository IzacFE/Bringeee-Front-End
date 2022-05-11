import React from "react";
import { Badge } from "@mantine/core";

const DetailOrder = (props) => {
  console.log(props.dataDetailOrder);
  return (
    <div>
      <div className="py-2">
        <p className="text-grey-500 font-normal text-[17px]">{props.dataDetailOrder.id}</p>
        <label className="font-medium text-[17px]">Nama Customer</label>
        <p className="text-amber-500 font-semibold text-[17px]">{props.dataDetailOrder.customer.name}</p>
      </div>
      {props.dataDetailOrder.status === "ON_PROCESS" && (
        <div className="py-2">
          <label className="font-medium text-[17px]">Driver</label>
          <p className="text-amber-500 font-semibold text-[17px]">
            {props.dataDetailOrder.driver.name} - {props.dataDetailOrder.truck_type.truck_type}
          </p>
        </div>
      )}
      {props.dataDetailOrder.status === "DELIVERED" && (
        <div className="py-2">
          <label className="font-medium text-[17px]">Driver</label>
          <p className="text-amber-500 font-semibold text-[17px]">
            {props.dataDetailOrder.driver.name} - {props.dataDetailOrder.truck_type.truck_type}
          </p>
        </div>
      )}
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
        <label className="font-medium text-[17px]">Jarak</label>
        <p className="text-amber-500 font-semibold text-[17px]">{props.dataDetailOrder.distance} km</p>
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
        {props.dataDetailOrder.status === "REQUESTED" ? (
          <p className="text-gray-500 font-semibold text-[17px]">Konfirmasi admin</p>
        ) : props.dataDetailOrder.status === "NEED_CUSTOMER_CONFIRM" ? (
          <p className="text-gray-500 font-semibold text-[17px]">Konfirmasi customer</p>
        ) : props.dataDetailOrder.status === "CONFIRMED" ? (
          <p className="text-green-500 font-semibold text-[17px]">Menunggu pembayaran</p>
        ) : props.dataDetailOrder.status === "MANIFESTED" ? (
          <p className="text-violet-500 font-semibold text-[17px]">Diteruskan kedriver</p>
        ) : props.dataDetailOrder.status === "ON_PROCESS" ? (
          <p className="text-amber-500 font-semibold text-[17px]">Dalam pengiriman</p>
        ) : props.dataDetailOrder.status === "DELIVERED" ? (
          <p className="text-green-500 font-semibold text-[17px]">Order selesai</p>
        ) : (
          <p className="text-red-500 font-semibold text-[17px]">Dibatalkan</p>
        )}
      </div>
    </div>
  );
};

export default DetailOrder;
