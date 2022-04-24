import React from "react";
import { Textarea, NativeSelect, TextInput, Group, Button } from "@mantine/core";
import { ChevronDown } from "tabler-icons-react";

const FormOrder = () => {
  return (
    <div className="bg-neutral-50 rounded-[20px] drop-shadow-md p-5">
      <div className="flex flex-col mb-3">
        <label className="text-amber-500 font-medium text-[22px]">Asal</label>
        <div className="w-full">
          <Textarea placeholder="" label="Alamat" />
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-6/12">
            <NativeSelect label="Provinsi" placeholder="Pilih Provinsi" data={[]} rightSection={<ChevronDown size={14} />} rightSectionWidth={40} />
          </div>
          <div className="w-full md:w-6/12">
            <NativeSelect label="Kota" placeholder="Pilih Kota" data={[]} rightSection={<ChevronDown size={14} />} rightSectionWidth={40} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-6/12">
            <NativeSelect label="Kecamatan" placeholder="Pilih Kecamatan" data={[]} rightSection={<ChevronDown size={14} />} rightSectionWidth={40} />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-amber-500 font-medium text-[22px]">Tujuan</label>
        <div className="w-full">
          <Textarea placeholder="" label="Alamat" />
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-6/12">
            <NativeSelect label="Provinsi" placeholder="Pilih Provinsi" data={[]} rightSection={<ChevronDown size={14} />} rightSectionWidth={40} />
          </div>
          <div className="w-full md:w-6/12">
            <NativeSelect label="Kota" placeholder="Pilih Kota" data={[]} rightSection={<ChevronDown size={14} />} rightSectionWidth={40} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-6/12">
            <NativeSelect label="Kecamatan" placeholder="Pilih Kecamatan" data={[]} rightSection={<ChevronDown size={14} />} rightSectionWidth={40} />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-amber-500 font-medium text-[22px]">Muatan</label>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-6/12">
            <NativeSelect label="Tipe Truk" placeholder="Pilih Tipe Truk" data={[]} rightSection={<ChevronDown size={14} />} rightSectionWidth={40} />
          </div>
          <div className="w-full md:w-6/12">
            <TextInput type="number" label="Volume" placeholder="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-6/12">
            <TextInput type="number" label="Berat" placeholder="" />
          </div>
          <div className="w-full md:w-6/12">
            <TextInput type="number" label="Jarak" placeholder="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-6/12">
            <TextInput type="file" label="Foto" placeholder="" />
          </div>
          <div className="w-full md:w-6/12">
            <h5 className="font-medium text-[22px]">Estimasi Harga</h5>
            <h5 className="font-medium text-[22px]">Rp. 1.200.000</h5>
          </div>
        </div>
        <Group position="right">
          <Button className="bg-amber-500 hover:bg-amber-400 text-stone-700">Simpan</Button>
        </Group>
      </div>
    </div>
  );
};

export default FormOrder;
