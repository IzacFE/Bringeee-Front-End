import React from "react";

const DetailOrder = (props) => {
  return (
    <div>
      <div className="py-2">
        <label className="font-medium text-[17px]">Nama Costumer</label>
        <p className="text-amber-500 font-semibold text-[17px]">Jhone</p>
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
        <p className="text-amber-500 font-semibold text-[17px]">Solo, Jawa Tengah</p>
      </div>
      <div className="py-2">
        <label className="font-medium text-[17px]">Tarif</label>
        <p className="text-amber-500 font-semibold text-[17px]">Rp. 1.500.000</p>
      </div>
      <div className="py-2">
        <label className="font-medium text-[17px]">Status</label>
        <p className="text-amber-500 font-semibold text-[17px]">{props.dataDetailOrder.status}</p>
      </div>
    </div>
  );
};

export default DetailOrder;
