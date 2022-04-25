import React from "react";

const DetailOrder = () => {
  return (
    <div>
      <div className="py-2">
        <label className="font-medium text-[17px]">Nama Costumer</label>
        <p className="text-amber-500 font-semibold text-[17px]">Jhon</p>
      </div>
      <div className="py-2">
        <label className="font-medium text-[17px]">Volume Muatan</label>
        <p className="text-amber-500 font-semibold text-[17px]">80</p>
      </div>
      <div className="py-2">
        <label className="font-medium text-[17px]">Berat Muatan</label>
        <p className="text-amber-500 font-semibold text-[17px]">800</p>
      </div>
      <div className="py-2">
        <label className="font-medium text-[17px]">Asal</label>
        <p className="text-amber-500 font-semibold text-[17px]">Jakarta, DKI Jakarta</p>
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
        <p className="text-amber-500 font-semibold text-[17px]">Pengajuan</p>
      </div>
    </div>
  );
};

export default DetailOrder;
