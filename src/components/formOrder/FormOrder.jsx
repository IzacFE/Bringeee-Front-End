import React, { useEffect, useState, useContext, useMemo, useRef } from "react";
import axios from "axios";
import { Textarea, NativeSelect, TextInput, Group, Button } from "@mantine/core";
import { ChevronDown } from "tabler-icons-react";
import { TokenContext } from "../../App";
import { showNotification } from "@mantine/notifications";
import { Check, X } from "tabler-icons-react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import DraggableMarker from "../map/DraggableMarker";

const center = {
  lat: -7.424278,
  lng: 109.239639,
};

const FormOrder = (props) => {
  const [isEnable, setIsEnable] = useState(true);
  const { tokenCtx } = useContext(TokenContext);
  const [dataProvince, setDataProvince] = useState([]);
  const [dataTruck, setDataTruck] = useState([]);
  const [dataCitiesStart, setDataCitiesStart] = useState([]);
  const [dataDistrictsStart, setDataDistrictsStart] = useState([]);
  const [idProvStart, setIdProvStart] = useState("");
  const [cityStart, setCityStart] = useState("");
  const [districtStart, setDistrictStart] = useState("");
  const [dataCitiesEnd, setDataCitiesEnd] = useState([]);
  const [dataDistrictsEnd, setDataDistrictsEnd] = useState([]);
  const [idProvEnd, setIdProvEnd] = useState("");
  const [cityEnd, setCityEnd] = useState("");
  const [districtEnd, setDistrictEnd] = useState("");
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

  const [positionStart, setPositionStart] = useState(center);
  const [positionEnd, setPositionEnd] = useState(center);
  const markerRefStart = useRef(null);
  const markerRefEnd = useRef();

  useEffect(() => {
    fetchProvince();
    fetchTruckType();
  }, []);

  const handlerStart = useMemo(
    () => ({
      dragend() {
        const marker = markerRefStart.current;
        if (marker != null) {
          setPositionStart(marker.getLatLng());
        }
      },
    }),
    []
  );

  const handlerEnd = useMemo(
    () => ({
      dragend() {
        const marker = markerRefEnd.current;
        if (marker != null) {
          setPositionEnd(marker.getLatLng());
        }
      },
    }),
    []
  );

  const fetchTruckType = async () => {
    await axios
      .get(`https://aws.wildani.tech/api/truck_types`)
      .then((ress) => {
        setDataTruck(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchProvince = async () => {
    await axios
      .get(`https://aws.wildani.tech/api/provinces`)
      .then((ress) => {
        setDataProvince(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchCitiesStart = async (e) => {
    const selected = e.target.options[e.target.selectedIndex].label;
    setIdProvStart(e.target.value);
    setProvinceStart(selected);
    setCityStart("");
    setDistrictStart("");
    setDataDistrictsStart([]);

    await axios
      .get(`https://aws.wildani.tech/api/provinces/${e.target.value}/cities`)
      .then((ress) => {
        setDataCitiesStart(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchDistrictsStart = async (e) => {
    const selected = e.target.options[e.target.selectedIndex].label;
    setCityStart(e.target.value);
    setCitiesStart(selected);
    setDistrictsStart("");
    await axios
      .get(`https://aws.wildani.tech/api/provinces/${idProvStart}/cities/${e.target.value}/districts`)
      .then((ress) => {
        setDataDistrictsStart(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const chooseDistrictsStart = (e) => {
    setDistrictStart(e.target.value);
    setDistrictsStart(e.target.options[e.target.selectedIndex].label);
  };

  const fetchCitiesEnd = async (e) => {
    const selected = e.target.options[e.target.selectedIndex].label;
    setIdProvEnd(e.target.value);
    setProvinceEnd(selected);
    setCityEnd("");
    setDistrictEnd("");
    setDataDistrictsEnd([]);

    await axios
      .get(`https://aws.wildani.tech/api/provinces/${e.target.value}/cities`)
      .then((ress) => {
        setDataCitiesEnd(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchDistrictsEnd = async (e) => {
    const selected = e.target.options[e.target.selectedIndex].label;
    setCityEnd(e.target.value);
    setCitiesEnd(selected);
    setDistrictsEnd("");
    await axios
      .get(`https://aws.wildani.tech/api/provinces/${idProvEnd}/cities/${e.target.value}/districts`)
      .then((ress) => {
        setDataDistrictsEnd(ress.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const chooseDistrictsEnd = (e) => {
    setDistrictEnd(e.target.value);
    setDistrictsEnd(e.target.options[e.target.selectedIndex].label);
  };

  const createOrder = async () => {
    setIsEnable(false);
    const formData = new FormData();
    formData.append("destination_start_address", addressStart);
    formData.append("destination_start_province", provinceStart);
    formData.append("destination_start_city", citiesStart);
    formData.append("destination_start_district", districtsStart);
    formData.append("destination_start_postal", posStart);
    formData.append("destination_start_lat", positionStart.lat);
    formData.append("destination_start_long", positionStart.lng);
    formData.append("destination_end_address", addressEnd);
    formData.append("destination_end_province", provinceEnd);
    formData.append("destination_end_city", citiesEnd);
    formData.append("destination_end_district", districtsEnd);
    formData.append("destination_end_postal", posEnd);
    formData.append("destination_end_lat", positionEnd.lat);
    formData.append("destination_end_long", positionEnd.lng);
    formData.append("description", description);
    formData.append("total_volume", volume);
    formData.append("total_weight", weight);
    formData.append("truck_type_id", typeTruck);
    formData.append("order_picture", imageOrder);

    await axios
      .post(`https://aws.wildani.tech/api/customers/orders`, formData, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        showNotification({
          title: "Berhasil",
          message: "Order telah dibuat",
          icon: <Check size={18} />,
          color: "green",
        });
        resetForm();
        props.reloadSoftPage();
        setIsEnable(true);
      })
      .catch((err) => {
        showNotification({
          title: "Gagal",
          message: "Order gagal dibuat",
          icon: <X size={18} />,
          color: "red",
        });
        setIsEnable(true);
      });
  };

  const resetForm = () => {
    setAddressStart("");
    setIdProvStart("");
    setProvinceStart("");
    setCityStart("");
    setCitiesStart("");
    setDistrictStart("");
    setDistrictsStart("");
    setPosStart("");
    setLatStart("");
    setLongStart("");
    //
    setAddressEnd("");
    setIdProvEnd("");
    setProvinceEnd("");
    setCityEnd("");
    setCitiesEnd("");
    setDistrictEnd("");
    setDistrictsEnd("");
    setPosEnd("");
    setLatEnd("");
    setLongEnd("");
    //
    setDescription("");
    setVolume("");
    setWeight("");
    setTypeTruck("");
    setImageOrder("");
  };

  const priceEstimate = async () => {
    var config = {
      method: "post",
      url: "https://aws.wildani.tech/api/customers/orders/estimate",
      headers: {
        Authorization: `Bearer ${tokenCtx}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: "&destination_start_lat=" + latStart + "&destination_start_long=" + longStart + "&destination_end_lat=" + latEnd + "&destination_end_long=" + longEnd + "&truck_type=" + typeTruck,
    };
    await axios(config)
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
          <Textarea placeholder="" value={addressStart} label="Alamat" onChange={(e) => setAddressStart(e.target.value)} id="form-createOrder-start-address" />
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-6/12">
            <NativeSelect
              label="Provinsi"
              placeholder="Pilih Provinsi"
              value={idProvStart}
              onChange={(e) => fetchCitiesStart(e)}
              data={dataProvince.map((data) => {
                return { value: data.ProvID, label: data.ProvName };
              })}
              rightSection={<ChevronDown size={14} />}
              rightSectionWidth={40}
              id="form-createOrder-start-province"
            />
          </div>
          <div className="w-full md:w-6/12">
            <NativeSelect
              label="Kota"
              placeholder="Pilih Kota"
              value={cityStart}
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
              id="form-createOrder-start-cities"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-6/12">
            <NativeSelect
              label="Kecamatan"
              placeholder="Pilih Kecamatan"
              value={districtStart}
              onChange={(e) => chooseDistrictsStart(e)}
              data={
                dataDistrictsStart
                  ? dataDistrictsStart.map((data) => {
                      return { value: data.DisID, label: data.DisName };
                    })
                  : ""
              }
              rightSection={<ChevronDown size={14} />}
              rightSectionWidth={40}
              id="form-createOrder-start-districts"
            />
          </div>
          <div className="w-full md:w-6/12">
            <TextInput type="number" value={posStart} label="Kode Pos" placeholder="" onChange={(e) => setPosStart(e.target.value)} id="form-createOrder-start-postal" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:gap-2">
          <MapContainer center={[-7.253496039426577, 109.20410156250001]} zoom={5}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
            <DraggableMarker eventHandlers={handlerStart} position={positionStart} markerRef={markerRefStart} />
          </MapContainer>
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-amber-500 font-medium text-[22px]">Tujuan</label>
        <div className="w-full">
          <Textarea placeholder="" value={addressEnd} label="Alamat" onChange={(e) => setAddressEnd(e.target.value)} id="form-createOrder-end-address" />
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-6/12">
            <NativeSelect
              label="Provinsi"
              placeholder="Pilih Provinsi"
              value={idProvEnd}
              onChange={(e) => fetchCitiesEnd(e)}
              data={dataProvince.map((data) => {
                return { value: data.ProvID, label: data.ProvName };
              })}
              rightSection={<ChevronDown size={14} />}
              rightSectionWidth={40}
              id="form-createOrder-end-province"
            />
          </div>
          <div className="w-full md:w-6/12">
            <NativeSelect
              label="Kota"
              placeholder="Pilih Kota"
              value={cityEnd}
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
              id="form-createOrder-end-cities"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-6/12">
            <NativeSelect
              label="Kecamatan"
              placeholder="Pilih Kecamatan"
              value={districtEnd}
              onChange={(e) => chooseDistrictsEnd(e)}
              data={
                dataDistrictsEnd
                  ? dataDistrictsEnd.map((data) => {
                      return { value: data.DisID, label: data.DisName };
                    })
                  : ""
              }
              rightSection={<ChevronDown size={14} />}
              rightSectionWidth={40}
              id="form-createOrder-end-districts"
            />
          </div>
          <div className="w-full md:w-6/12">
            <TextInput type="number" value={posEnd} label="Kode Pos" placeholder="" onChange={(e) => setPosEnd(e.target.value)} id="form-createOrder-end-postal" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-2">
        <MapContainer center={[-7.253496039426577, 109.20410156250001]} zoom={5}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
          <DraggableMarker eventHandlers={handlerEnd} position={positionEnd} markerRef={markerRefEnd} />
        </MapContainer>
      </div>
      <div className="flex flex-col">
        <label className="text-amber-500 font-medium text-[22px]">Muatan</label>
        <div className="w-full">
          <Textarea placeholder="" value={description} label="Deskripsi" onChange={(e) => setDescription(e.target.value)} id="form-createOrder-desc" />
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-6/12">
            <NativeSelect
              label="Tipe Truk"
              placeholder="Pilih Tipe Truk"
              value={typeTruck}
              onChange={(e) => setTypeTruck(e.target.value)}
              data={dataTruck.map((truck) => {
                return { value: truck.id, label: truck.truck_type };
              })}
              rightSection={<ChevronDown size={14} />}
              rightSectionWidth={40}
              id="form-createOrder-typeTruck"
            />
          </div>
          <div className="w-full md:w-6/12">
            <TextInput type="number" value={volume} label="Volume" placeholder="" onChange={(e) => setVolume(e.target.value)} id="form-createOrder-volume" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-2">
          <div className="w-full md:w-6/12">
            <TextInput type="number" value={weight} label="Berat" placeholder="" onChange={(e) => setWeight(e.target.value)} id="form-createOrder-weight" />
          </div>
          <div className="w-full md:w-6/12">
            <TextInput type="file" defaultValue={imageOrder} label="Foto" placeholder="" onChange={(e) => setImageOrder(e.target.files[0])} id="form-createOrder-picture" />
          </div>
        </div>
        <Group position="right" className="mt-5">
          {isEnable ? (
            <Button className="bg-amber-500 hover:bg-amber-400 text-stone-700" onClick={() => createOrder()} id="btn-createOrder">
              Buat Order
            </Button>
          ) : (
            <Button loading className="bg-amber-500 hover:bg-amber-400 text-stone-700" onClick={() => createOrder()} id="btn-createOrder">
              Buat Order
            </Button>
          )}
        </Group>
      </div>
    </div>
  );
};

export default FormOrder;
