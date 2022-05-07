import { Button, Group, Image, Input, InputWrapper } from "@mantine/core";
import React from "react";
import styles from "./AdminHomeOrder.module.css";
import DetailOrder from "./DetailOrder";

function AdminConfirmOrder(props) {
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
            {props.dataDetailOrder.status === "NEED_CUSTOMER_CONFIRM" &&
              "Menunggu Konfirmasi Kustomer"}
            {props.dataDetailOrder.status === "REQUESTED" &&
              "Menunggu Konfirmasi Admin"}
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <label className="font-medium text-[17px]">Gambar Order</label>
        <Image src={props.dataDetailOrder.order_picture} width={500} />
        {props.dataDetailOrder.status === "REQUESTED" && (
          <Group>
            <div>
              <label className="font-medium text-[17px]">
                Setujui sesuai perkiraan tarif
              </label>
              <p className="text-amber-500 font-semibold text-[17px]">
                Rp {props.dataDetailOrder.estimated_price}
              </p>
              <Button
                className="bg-amber-500 hover:bg-amber-400 my-2"
                onClick={props.clickSetuju}
              >
                Setujui
              </Button>
            </div>
            <div>
              <label className="font-medium text-[17px]">Sesuaikan tarif</label>
              <InputWrapper id="emailCos" required>
                <Input
                  id="emailCos"
                  type="Number"
                  placeholder="720000"
                  onChange={props.onChange}
                  className="py-2"
                />
              </InputWrapper>
              <Button
                className="bg-amber-500 hover:bg-amber-400 my-2"
                onClick={props.clickSesuaikan}
              >
                Kirim
              </Button>
            </div>
          </Group>
        )}

        {props.dataDetailOrder.status === "NEED_CUSTOMER_CONFIRM" && (
          <Group>
            <div>
              <label className="font-medium text-[17px]">
                Tarif setelah disesuaikan
              </label>
              <p className="text-amber-500 font-semibold text-[17px]">
                Rp {props.dataDetailOrder.fix_price}
              </p>
            </div>
          </Group>
        )}
      </div>
    </div>
  );
}

export default AdminConfirmOrder;
