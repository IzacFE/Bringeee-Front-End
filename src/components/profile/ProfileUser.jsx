import React, { useState, useContext } from "react";
import { Input, NativeSelect, Group, Button, Avatar } from "@mantine/core";
import { ChevronDown } from "tabler-icons-react";
import { TokenContext } from "../../App";
import axios from "axios";
import { showNotification } from "@mantine/notifications";
import { Check, X } from "tabler-icons-react";

const ProfileCustomer = (props) => {
  const { tokenCtx } = useContext(TokenContext);
  const [allowEdit, setAllowEdit] = useState(false);
  //data form customer
  const [namaCus, setNamaCus] = useState("");
  const [emailCus, setEmailCus] = useState("");
  const [jenisKelaminCus, setJenisKelaminCus] = useState("");
  const [telpCus, setTelpCus] = useState("");
  const [alamatCus, setAlamatCus] = useState("");

  const handleEditCustomer = async () => {
    const formData = new FormData();
    formData.append("name", namaCus);
    formData.append("email", emailCus);
    formData.append("gender", jenisKelaminCus);
    formData.append("phone_number", telpCus);
    formData.append("address", alamatCus);

    await axios
      .put(`https://aws.wildani.tech/api/customers`, formData, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        showNotification({
          title: "Berhasil",
          message: "Profile berhasil diubah",
          icon: <Check size={18} />,
          color: "green",
        });
        setAllowEdit(false);
        props.reloadSoftPage();
      })
      .catch((err) => {
        showNotification({
          title: "Gagal",
          message: "Profile tidak dapat diubah",
          icon: <X size={18} />,
          color: "red",
        });
      });
  };

  if (!allowEdit) {
    return (
      <div>
        <img
          src={props.dataUser.avatar}
          alt=""
          className="w-[250px] h-[250px] mx-auto rounded-full"
        />
        <div className="my-4 flex flex-col gap-4">
          <h2 className="text-stone-500 font-medium text-center">
            {props.dataUser.name}
          </h2>
          <h2 className="text-stone-500 font-medium text-center">
            {props.dataUser.email}
          </h2>
          <h2 className="text-stone-500 font-medium text-center">
            {props.dataUser.gender === "laki-laki" ? "Laki-Laki" : "Perempuan"}
          </h2>
          <h2 className="text-stone-500 font-medium text-center">
            {props.dataUser.phone_number}
          </h2>
          <h2 className="text-stone-500 font-medium text-center">
            {props.dataUser.address}
          </h2>

          <Group position="center">
            <Button
              className="bg-amber-500 hover:bg-amber-400 text-stone-700"
              onClick={() => setAllowEdit(true)}
              id="btn-ProfileCustomer-edit"
            >
              Edit
            </Button>
          </Group>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <img
          src={props.dataUser.avatar}
          alt=""
          className="w-[250px] mx-auto rounded-full"
        />

        <div className="my-4 flex flex-col gap-4">
          <Input
            id="form-ProfileCostumer-name"
            placeholder=""
            defaultValue={props.dataUser.name}
            onChange={(e) => setNamaCus(e.target.value)}
          />
          <Input
            id="form-ProfileCostumer-email"
            type="email"
            placeholder=""
            defaultValue={props.dataUser.email}
            onChange={(e) => setEmailCus(e.target.value)}
          />
          <NativeSelect
            placeholder="Pilih Jenis Kelamin"
            value={jenisKelaminCus}
            onChange={(e) => setJenisKelaminCus(e.target.value)}
            data={[
              { value: "laki-laki", label: "Laki-Laki" },
              { value: "perempuan", label: "Perempuan" },
            ]}
            rightSection={<ChevronDown size={14} />}
            rightSectionWidth={40}
            id="form-ProfileCostumer-gender"
          />
          <Input
            id="form-ProfileCostumer-phoneNumber"
            type="number"
            placeholder=""
            defaultValue={props.dataUser.phone_number}
            onChange={(e) => setTelpCus(e.target.value)}
          />
          <Input
            id="form-ProfileCostumer-address"
            type="text"
            placeholder=""
            defaultValue={props.dataUser.address}
            onChange={(e) => setAlamatCus(e.target.value)}
          />
          <Group position="left">
            <Button
              className="bg-amber-500 hover:bg-amber-400 text-stone-700"
              onClick={() => handleEditCustomer()}
              id="btn-ProfileCostumer-save"
            >
              Simpan
            </Button>
            {""}
            <Button
              className="bg-red-500 hover:bg-red-400 text-stone-700"
              onClick={() => setAllowEdit(false)}
              id="btn-ProfileCostumer-cancel"
            >
              Cancel
            </Button>
          </Group>
        </div>
      </div>
    );
  }
};

const ProfileDriver = (props) => {
  const { tokenCtx } = useContext(TokenContext);
  const [allowEdit, setAllowEdit] = useState(false);
  //data form driver
  const [emailDriver, setEmailDriver] = useState("");
  const [jenisKelaminDriver, setJenisKelaminDriver] = useState("");
  const [umurDriver, setUmurDriver] = useState("");
  const [telpDriver, setTelpDriver] = useState("");
  const [alamatDriver, setAlamatDriver] = useState("");

  const handleEditDriver = async () => {
    const formData = new FormData();
    formData.append("email", emailDriver);
    formData.append("gender", jenisKelaminDriver);
    formData.append("age", umurDriver);
    formData.append("phone_number", telpDriver);
    formData.append("address", alamatDriver);

    await axios
      .put(`https://aws.wildani.tech/api/drivers`, formData, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        showNotification({
          title: "Berhasil",
          message: "Profile berhasil diubah",
          icon: <Check size={18} />,
          color: "green",
        });
        setAllowEdit(false);
        props.reloadSoftPage();
      })
      .catch((err) => {
        showNotification({
          title: "Gagal",
          message: "Profile tidak dapat diubah",
          icon: <X size={18} />,
          color: "red",
        });
      });
  };

  if (!allowEdit) {
    return (
      <div>
        <img
          src={props.dataUser.avatar}
          alt=""
          className="w-[250px] h-[250px] mx-auto rounded-full"
        />

        <div className="my-4 flex flex-col gap-4">
          <h2 className="text-stone-500 font-medium text-center">
            {props.dataUser.name}
          </h2>
          <h2 className="text-stone-500 font-medium text-center">
            {props.dataUser.email}
          </h2>
          <h2 className="text-stone-500 font-medium text-center">
            {props.dataUser.gender === "male" ? "Laki-Laki" : "Perempuan"}
          </h2>
          <h2 className="text-stone-500 font-medium text-center">
            {props.dataUser.age} th
          </h2>
          <h2 className="text-stone-500 font-medium text-center">
            {props.dataUser.phone_number}
          </h2>
          <h2 className="text-stone-500 font-medium text-center">
            {props.dataUser.address}
          </h2>

          <Group position="center">
            <Button
              className="bg-amber-500 hover:bg-amber-400 text-stone-700"
              onClick={() => setAllowEdit(true)}
              id="btn-ProfileDriver-edit"
            >
              Edit
            </Button>
          </Group>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <img
          src={props.dataUser.avatar}
          alt=""
          className="w-[250px] mx-auto rounded-full"
        />

        <div className="my-4 flex flex-col gap-4">
          <Input
            id="form-ProfileDriver-name"
            placeholder=""
            defaultValue={props.dataUser.name}
            disabled
          />
          <Input
            id="form-ProfileDriver-email"
            type="email"
            placeholder=""
            defaultValue={props.dataUser.email}
            onChange={(e) => setEmailDriver(e.target.value)}
          />
          <NativeSelect
            placeholder="Pilih Jenis Kelamin"
            onChange={(e) => setJenisKelaminDriver(e.target.value)}
            value={jenisKelaminDriver}
            data={[
              { value: "laki-laki", label: "Laki-Laki" },
              { value: "perempuan", label: "Perempuan" },
            ]}
            rightSection={<ChevronDown size={14} />}
            rightSectionWidth={40}
            id="form-ProfileDriver-gender"
          />
          <Input
            id="form-ProfileDriver-age"
            type="number"
            placeholder=""
            defaultValue={props.dataUser.age}
            onChange={(e) => setUmurDriver(e.target.value)}
          />
          <Input
            id="form-ProfileDriver-phoneNumber"
            type="number"
            placeholder=""
            defaultValue={props.dataUser.phone_number}
            onChange={(e) => setTelpDriver(e.target.value)}
          />
          <Input
            id="form-ProfileDriver-address"
            type="text"
            placeholder=""
            defaultValue={props.dataUser.address}
            onChange={(e) => setAlamatDriver(e.target.value)}
          />
          <Group position="left">
            <Button
              className="bg-amber-500 hover:bg-amber-400 text-stone-700"
              onClick={() => handleEditDriver()}
              id="btn-ProfileDriver-save"
            >
              Simpan
            </Button>
            {""}
            <Button
              className="bg-red-500 hover:bg-red-400 text-stone-700"
              onClick={() => setAllowEdit(false)}
              id="btn-ProfileDriver-cancel"
            >
              Cancel
            </Button>
          </Group>
        </div>
      </div>
    );
  }
};

export { ProfileCustomer, ProfileDriver };
