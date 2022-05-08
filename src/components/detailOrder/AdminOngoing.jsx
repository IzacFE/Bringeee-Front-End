import React from "react";
import { Button, Group, Image, Input, InputWrapper } from "@mantine/core";
import styles from "./AdminOngoing.module.css";
import TimelineVer from "../timeline/TimelineVer";

function AdminOngoing(props) {
  return (
    <div className={`${styles.container} bg-white rounded-md shadow-xl`}>
      <div className={styles.left}>
        <div className="py-2">
          <label className="font-medium text-[17px]">Nama Kustomer</label>
          <p className="text-amber-500 font-semibold text-[17px]">
            {props.dataDetailOrder.customer.name}
          </p>
        </div>

        <div className="py-2">
          <label className="font-medium text-[17px]">Deskripsi</label>
          <p className="text-amber-500 font-semibold text-[17px]">
            {props.dataDetailOrder.description}
          </p>
        </div>

        <div className="py-2">
          <label className="font-medium text-[17px]">Nama Driver</label>
          <p className="text-amber-500 font-semibold text-[17px]">
            {props.dataDetailOrder.driver.name}
          </p>
        </div>

        <div className="py-2">
          <label className="font-medium text-[17px]">Jenis Kendaraan</label>
          <p className="text-amber-500 font-semibold text-[17px]">
            {props.dataDetailOrder.driver.truck_type.truck_type}
          </p>
        </div>

        <div className="py-2">
          <label className="font-medium text-[17px]">
            Nomor Plat Kendaraan
          </label>
          <p className="text-amber-500 font-semibold text-[17px]">
            {props.dataDetailOrder.driver.vehicle_identifier}
          </p>
        </div>

        <div className="py-2">
          <label className="font-medium text-[17px]">Volume Muatan</label>
          <p className="text-amber-500 font-semibold text-[17px]">
            {props.dataDetailOrder.total_volume} m<sup>3</sup>
          </p>
        </div>
        <div className="py-2">
          <label className="font-medium text-[17px]">Berat Muatan</label>
          <p className="text-amber-500 font-semibold text-[17px]">
            {props.dataDetailOrder.total_weight} kg
          </p>
        </div>
        <div className="py-2">
          <label className="font-medium text-[17px]">Asal</label>
          <p className="text-amber-500 font-semibold text-[17px]">
            {props.dataDetailOrder.destination_start_address},{" "}
            {props.dataDetailOrder.destination_start_city},{" "}
            {props.dataDetailOrder.destination_start_district},{" "}
            {props.dataDetailOrder.destination_start_province}
          </p>
        </div>
        <div className="py-2">
          <label className="font-medium text-[17px]">Tujuan</label>
          <p className="text-amber-500 font-semibold text-[17px]">
            {props.dataDetailOrder.destination_end_address},{" "}
            {props.dataDetailOrder.destination_end_city},{" "}
            {props.dataDetailOrder.destination_end_district},{" "}
            {props.dataDetailOrder.destination_end_province}
          </p>
        </div>
        <div className="py-2">
          <label className="font-medium text-[17px]">Tarif</label>
          <p className="text-amber-500 font-semibold text-[17px]">
            Rp. {props.dataDetailOrder.fix_price}
          </p>
        </div>
        <div className="py-2">
          <label className="font-medium text-[17px]">Status</label>
          <p className="text-amber-500 font-semibold text-[17px]">
            Proses diantar oleh driver
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <label className="font-medium text-[17px]">Gambar Order</label>
        <Image src={props.dataDetailOrder.order_picture} width={500} />
        {props.dataHistory && <TimelineVer dataHistories={props.dataHistory} />}
      </div>
    </div>
  );
}

export default AdminOngoing;
