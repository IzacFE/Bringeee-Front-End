import React from "react";

const DetailOrder = (props) => {
  return (
    <div>
      <div className="py-2">
        <label className="font-medium text-[17px]">Nama Costumer</label>
        <p className="text-amber-500 font-semibold text-[17px]">{props.dataDetailOrder.customer.name}</p>
      </div>
      <div className="py-2">
        <label className="font-medium text-[17px]">Volume Muatan</label>
        <p className="text-amber-500 font-semibold text-[17px]">{props.dataDetailOrder.total_volume}</p>
      </div>
      <div className="py-2">
        <label className="font-medium text-[17px]">Berat Muatan</label>
        <p className="text-amber-500 font-semibold text-[17px]">{props.dataDetailOrder.total_weight}</p>
      </div>
      <div className="py-2">
        <label className="font-medium text-[17px]">Asal</label>
        <p className="text-amber-500 font-semibold text-[17px]">
          {props.dataDetailOrder.destination_start_city}, {props.dataDetailOrder.destination_start_province}
        </p>
      </div>
      <div className="py-2">
        <label className="font-medium text-[17px]">Tujuan</label>
        <p className="text-amber-500 font-semibold text-[17px]">
          {props.dataDetailOrder.destination_end_city}, {props.dataDetailOrder.destination_end_province}
        </p>
      </div>
      <div className="py-2">
        <label className="font-medium text-[17px]">Tarif</label>
        <p className="text-amber-500 font-semibold text-[17px]">Rp. {props.dataDetailOrder.estimated_price}</p>
      </div>
      <div className="py-2">
        <label className="font-medium text-[17px]">Status</label>
        <p className="text-amber-500 font-semibold text-[17px]">{props.dataDetailOrder.status}</p>
      </div>
    </div>
  );
};

export default DetailOrder;
