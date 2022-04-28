import React, { useEffect, useState } from "react";
import axios from "axios";
import { Textarea, NativeSelect, TextInput, Group, Button } from "@mantine/core";
import { ChevronDown } from "tabler-icons-react";

const FormOrder = () => {
  const [dataProvince, setDataProvince] = useState([]);
  const [dataCitiesStart, setDataCitiesStart] = useState([]);
  const [dataDistrictsStart, setDistrictsStart] = useState([]);
  const [idProvStart, setIdProvStart] = useState("");
  const [dataCitiesEnd, setDataCitiesEnd] = useState([]);
  const [dataDistrictsEnd, setDistrictsEnd] = useState([]);
  const [idProvEnd, setIdProvEnd] = useState("");

  useEffect(() => {
    fetchProvince();
  }, []);

  const fetchProvince = () => {
    axios
      .get(`https://aws.wildani.tech/api/provinces`)
      .then((ress) => {
        setDataProvince(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchCitiesStart = (idProv) => {
    axios
      .get(`https://aws.wildani.tech/api/provinces/${idProv}/cities`)
      .then((ress) => {
        setDataCitiesStart(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setIdProvStart(idProv);
    setDistrictsStart([]);
  };

  const fetchDistrictsStart = (idCities) => {
    axios
      .get(`https://aws.wildani.tech/api/provinces/${idProvStart}/cities/${idCities}/districts`)
      .then((ress) => {
        setDistrictsStart(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchCitiesEnd = (idProv) => {
    axios
      .get(`https://aws.wildani.tech/api/provinces/${idProv}/cities`)
      .then((ress) => {
        setDataCitiesEnd(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setIdProvEnd(idProv);
    setDistrictsEnd([]);
  };

  const fetchDistrictsEnd = (idCities) => {
    axios
      .get(`https://aws.wildani.tech/api/provinces/${idProvEnd}/cities/${idCities}/districts`)
      .then((ress) => {
        setDistrictsEnd(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-neutral-50 rounded-[20px] drop-shadow-md p-5">
      <div className="flex flex-col mb-3">
        <label className="text-amber-500 font-medium text-[22px]">Asal</label>
        <div className="w-full">
          <Textarea placeholder="" label="Alamat" />
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-6/12">
            <NativeSelect
              label="Provinsi"
              placeholder="Pilih Provinsi"
              onChange={(e) => fetchCitiesStart(e.target.value)}
              data={dataProvince.map((data) => {
                return { value: data.ProvID, label: data.ProvName };
              })}
              rightSection={<ChevronDown size={14} />}
              rightSectionWidth={40}
            />
          </div>
          <div className="w-full md:w-6/12">
            <NativeSelect
              label="Kota"
              placeholder="Pilih Kota"
              onChange={(e) => fetchDistrictsStart(e.target.value)}
              data={
                dataCitiesStart
                  ? dataCitiesStart.map((data) => {
                      return { value: data.CityID, label: data.CityName };
                    })
                  : ""
              }
              rightSection={<ChevronDown size={14} />}
              rightSectionWidth={40}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-6/12">
            <NativeSelect
              label="Kecamatan"
              placeholder="Pilih Kecamatan"
              data={
                dataDistrictsStart
                  ? dataDistrictsStart.map((data) => {
                      return { value: data.DisID, label: data.DisName };
                    })
                  : ""
              }
              rightSection={<ChevronDown size={14} />}
              rightSectionWidth={40}
            />
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
            <NativeSelect
              label="Provinsi"
              placeholder="Pilih Provinsi"
              onChange={(e) => fetchCitiesEnd(e.target.value)}
              data={dataProvince.map((data) => {
                return { value: data.ProvID, label: data.ProvName };
              })}
              rightSection={<ChevronDown size={14} />}
              rightSectionWidth={40}
            />
          </div>
          <div className="w-full md:w-6/12">
            <NativeSelect
              label="Kota"
              placeholder="Pilih Kota"
              onChange={(e) => fetchDistrictsEnd(e.target.value)}
              data={
                dataCitiesEnd
                  ? dataCitiesEnd.map((data) => {
                      return { value: data.CityID, label: data.CityName };
                    })
                  : ""
              }
              rightSection={<ChevronDown size={14} />}
              rightSectionWidth={40}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-6/12">
            <NativeSelect
              label="Kecamatan"
              placeholder="Pilih Kecamatan"
              data={
                dataDistrictsEnd
                  ? dataDistrictsEnd.map((data) => {
                      return { value: data.DisID, label: data.DisName };
                    })
                  : ""
              }
              rightSection={<ChevronDown size={14} />}
              rightSectionWidth={40}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-amber-500 font-medium text-[22px]">Muatan</label>
        <div className="w-full">
          <Textarea placeholder="" label="Deskripsi" />
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-6/12">
            <NativeSelect
              label="Tipe Truk"
              placeholder="Pilih Tipe Truk"
              data={[
                { value: "1", label: "Pick Up" },
                { value: "2", label: "Truck Box" },
                { value: "3", label: "Triler" },
              ]}
              rightSection={<ChevronDown size={14} />}
              rightSectionWidth={40}
            />
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
