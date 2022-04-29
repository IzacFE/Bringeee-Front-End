import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Textarea, NativeSelect, TextInput, Group, Button } from "@mantine/core";
import { ChevronDown } from "tabler-icons-react";
import { TokenContext } from "../../App";

const FormOrder = () => {
  const { tokenCtx } = useContext(TokenContext);
  const [dataProvince, setDataProvince] = useState([]);
  const [dataCitiesStart, setDataCitiesStart] = useState([]);
  const [dataDistrictsStart, setDataDistrictsStart] = useState([]);
  const [idProvStart, setIdProvStart] = useState("");
  const [dataCitiesEnd, setDataCitiesEnd] = useState([]);
  const [dataDistrictsEnd, setDataDistrictsEnd] = useState([]);
  const [idProvEnd, setIdProvEnd] = useState("");
  //data
  const [addressStart, setAddressStart] = useState("");
  const [provinceStart, setProvinceStart] = useState("");
  const [citiesStart, setCitiesStart] = useState("");
  const [districtsStart, setDistrictsStart] = useState("");
  const [posStart, setPosStart] = useState("");
  const [latStart, setLatStart] = useState("");
  const [longStart, setLongStart] = useState("");
  const [addressEnd, setAddressEnd] = useState("");
  const [provinceEnd, setProvinceEnd] = useState("");
  const [citiesEnd, setCitiesEnd] = useState("");
  const [districtsEnd, setDistrictsEnd] = useState("");
  const [posEnd, setPosEnd] = useState("");
  const [latEnd, setLatEnd] = useState("");
  const [longEnd, setLongEnd] = useState("");
  const [description, setDescription] = useState("");
  const [typeTruck, setTypeTruck] = useState("");
  const [volume, setVolume] = useState("");
  const [weight, setWeight] = useState("");
  const [imageOrder, setImageOrder] = useState("");

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

  const fetchCitiesStart = (e) => {
    const selected = e.target.options[e.target.selectedIndex].label;

    axios
      .get(`https://aws.wildani.tech/api/provinces/${e.target.value}/cities`)
      .then((ress) => {
        setDataCitiesStart(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setIdProvStart(e.target.value);
    setProvinceStart(selected);
    setDataDistrictsStart([]);
  };

  const fetchDistrictsStart = (e) => {
    const selected = e.target.options[e.target.selectedIndex].label;
    axios
      .get(`https://aws.wildani.tech/api/provinces/${idProvStart}/cities/${e.target.value}/districts`)
      .then((ress) => {
        setDataDistrictsStart(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setCitiesStart(selected);
  };

  const fetchCitiesEnd = (e) => {
    const selected = e.target.options[e.target.selectedIndex].label;

    axios
      .get(`https://aws.wildani.tech/api/provinces/${e.target.value}/cities`)
      .then((ress) => {
        setDataCitiesEnd(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setIdProvEnd(e.target.value);
    setProvinceEnd(selected);
    setDataDistrictsEnd([]);
  };

  const fetchDistrictsEnd = (e) => {
    const selected = e.target.options[e.target.selectedIndex].label;
    axios
      .get(`https://aws.wildani.tech/api/provinces/${idProvEnd}/cities/${e.target.value}/districts`)
      .then((ress) => {
        setDataDistrictsEnd(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setCitiesEnd(selected);
  };

  const createOrder = async () => {
    const formData = new FormData();
    formData.append("destination_start_address", addressStart);
    formData.append("destination_start_province", provinceStart);
    formData.append("destination_start_city", citiesStart);
    formData.append("destination_start_district", districtsStart);
    formData.append("destination_start_postal", posStart);
    formData.append("destination_start_lat", latStart);
    formData.append("destination_start_long", longStart);
    formData.append("destination_end_address", addressEnd);
    formData.append("destination_end_province", provinceEnd);
    formData.append("destination_end_city", citiesEnd);
    formData.append("destination_end_district", districtsEnd);
    formData.append("destination_end_postal", posEnd);
    formData.append("destination_end_lat", latEnd);
    formData.append("destination_end_long", longEnd);
    formData.append("description", description);
    formData.append("total_volume", volume);
    formData.append("total_weight", weight);
    formData.append("truck_type_id", typeTruck);
    formData.append("order_picture", imageOrder);

    console.log(formData);

    await axios
      .post(`https://aws.wildani.tech/api/customers/orders`, formData, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        alert("berhasil");
      })
      .catch((err) => {
        alert("gagal");
      });
  };

  return (
    <div className="bg-neutral-50 rounded-[20px] drop-shadow-md p-5">
      <div className="flex flex-col mb-3">
        <label className="text-amber-500 font-medium text-[22px]">Asal</label>
        <div className="w-full">
          <Textarea placeholder="" label="Alamat" onChange={(e) => setAddressStart(e.target.value)} />
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-6/12">
            <NativeSelect
              label="Provinsi"
              placeholder="Pilih Provinsi"
              onChange={(e) => fetchCitiesStart(e)}
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
              onChange={(e) => fetchDistrictsStart(e)}
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
              onChange={(e) => setDistrictsStart(e.target.options[e.target.selectedIndex].label)}
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
          <div className="w-full md:w-6/12">
            <TextInput type="number" label="Kode Pos" placeholder="" onChange={(e) => setPosStart(e.target.value)} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-6/12">
            <TextInput type="text" label="Lat" placeholder="" onChange={(e) => setLatStart(e.target.value)} />
          </div>
          <div className="w-full md:w-6/12">
            <TextInput type="text" label="Long" placeholder="" onChange={(e) => setLongStart(e.target.value)} />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-amber-500 font-medium text-[22px]">Tujuan</label>
        <div className="w-full">
          <Textarea placeholder="" label="Alamat" onChange={(e) => setAddressEnd(e.target.value)} />
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-6/12">
            <NativeSelect
              label="Provinsi"
              placeholder="Pilih Provinsi"
              onChange={(e) => fetchCitiesEnd(e)}
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
              onChange={(e) => fetchDistrictsEnd(e)}
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
              onChange={(e) => setDistrictsEnd(e.target.options[e.target.selectedIndex].label)}
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
          <div className="w-full md:w-6/12">
            <TextInput type="number" label="Kode Pos" placeholder="" onChange={(e) => setPosEnd(e.target.value)} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-2">
        <div className="w-full md:w-6/12">
          <TextInput type="text" label="Lat" placeholder="" onChange={(e) => setLatEnd(e.target.value)} />
        </div>
        <div className="w-full md:w-6/12">
          <TextInput type="text" label="Long" placeholder="" onChange={(e) => setLongEnd(e.target.value)} />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-amber-500 font-medium text-[22px]">Muatan</label>
        <div className="w-full">
          <Textarea placeholder="" label="Deskripsi" onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-6/12">
            <NativeSelect
              label="Tipe Truk"
              placeholder="Pilih Tipe Truk"
              onChange={(e) => setTypeTruck(e.target.value)}
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
            <TextInput type="number" label="Volume" placeholder="" onChange={(e) => setVolume(e.target.value)} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-6/12">
            <TextInput type="number" label="Berat" placeholder="" onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div className="w-full md:w-6/12">
            <TextInput type="file" label="Foto" placeholder="" onChange={(e) => setImageOrder(e.target.files[0])} />
          </div>
        </div>
        <Group position="right" className="mt-5">
          <Button className="bg-amber-500 hover:bg-amber-400 text-stone-700" onClick={() => createOrder()}>
            Simpan
          </Button>
        </Group>
      </div>
    </div>
  );
};

export default FormOrder;
