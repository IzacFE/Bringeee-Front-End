import React, { useState } from "react";
import { Input, NativeSelect, Group, Button } from "@mantine/core";
import { ChevronDown } from "tabler-icons-react";

const ProfileCostumer = (props) => {
  const [allowEdit, setAllowEdit] = useState(false);

  if (!allowEdit) {
    return (
      <div>
        <img src={props.dataUser.avatar} alt="" className="w-[250px] mx-auto rounded-full" />

        <div className="my-4 flex flex-col gap-4">
          <h2 className="text-stone-500 font-medium text-center">{props.dataUser.name}</h2>
          <h2 className="text-stone-500 font-medium text-center">{props.dataUser.email}</h2>
          <h2 className="text-stone-500 font-medium text-center">{props.dataUser.gender}</h2>
          <h2 className="text-stone-500 font-medium text-center">{props.dataUser.age} th</h2>

          <Group position="center">
            <Button className="bg-amber-500 hover:bg-amber-400 text-stone-700" onClick={() => setAllowEdit(true)}>
              Edit
            </Button>
          </Group>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <img src={props.dataUser.avatar} alt="" className="w-[250px] mx-auto rounded-full" />

        <div className="my-4 flex flex-col gap-4">
          <Input id="nama" placeholder="" defaultValue={props.dataUser.name} disabled />
          <Input id="email" type="email" placeholder="" defaultValue={props.dataUser.email} />
          <NativeSelect
            placeholder="Pilih Jenis Kelamin"
            data={[
              { value: "laki-laki", label: "Laki-Laki" },
              { value: "perempuan", label: "Perempuan" },
            ]}
            rightSection={<ChevronDown size={14} />}
            rightSectionWidth={40}
          />
          <Input id="umur" type="number" placeholder="" defaultValue={props.dataUser.age} />
          <Group position="left">
            <Button className="bg-amber-500 hover:bg-amber-400 text-stone-700">Simpan</Button>
            {""}
            <Button className="bg-red-500 hover:bg-red-400 text-stone-700" onClick={() => setAllowEdit(false)}>
              Cancel
            </Button>
          </Group>
        </div>
      </div>
    );
  }
};

const ProfileDriver = (props) => {
  const [allowEdit, setAllowEdit] = useState(false);

  if (!allowEdit) {
    return (
      <div>
        <img src={props.dataUser.avatar} alt="" className="w-[250px] mx-auto rounded-full" />

        <div className="my-4 flex flex-col gap-4">
          <h2 className="text-stone-500 font-medium text-center">{props.dataUser.name}</h2>
          <h2 className="text-stone-500 font-medium text-center">{props.dataUser.email}</h2>
          <h2 className="text-stone-500 font-medium text-center">{props.dataUser.gender}</h2>
          <h2 className="text-stone-500 font-medium text-center">{props.dataUser.age} th</h2>

          <Group position="center">
            <Button className="bg-amber-500 hover:bg-amber-400 text-stone-700" onClick={() => setAllowEdit(true)}>
              Edit
            </Button>
          </Group>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <img src={props.dataUser.avatar} alt="" className="w-[250px] mx-auto rounded-full" />

        <div className="my-4 flex flex-col gap-4">
          <Input id="nama" placeholder="" defaultValue={props.dataUser.name} disabled />
          <Input id="email" type="email" placeholder="" defaultValue={props.dataUser.email} />
          <NativeSelect
            placeholder="Pilih Jenis Kelamin"
            data={[
              { value: "laki-laki", label: "Laki-Laki" },
              { value: "perempuan", label: "Perempuan" },
            ]}
            rightSection={<ChevronDown size={14} />}
            rightSectionWidth={40}
          />
          <Input id="umur" type="number" placeholder="" defaultValue={props.dataUser.age} />
          <Group position="left">
            <Button className="bg-amber-500 hover:bg-amber-400 text-stone-700">Simpan</Button>
            {""}
            <Button className="bg-red-500 hover:bg-red-400 text-stone-700" onClick={() => setAllowEdit(false)}>
              Cancel
            </Button>
          </Group>
        </div>
      </div>
    );
  }
};

export { ProfileCostumer, ProfileDriver };
