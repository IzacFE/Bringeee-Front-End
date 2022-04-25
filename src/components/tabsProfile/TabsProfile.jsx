import React from "react";
import FormOrder from "../../components/formOrder/FormOrder";
import { Tabs } from "@mantine/core";
import { FaTruck } from "react-icons/fa";

const TabsProfileCostumer = () => {
  return (
    <div>
      <Tabs color="yellow">
        <Tabs.Tab label="Order Aktif">
          <div className="bg-neutral-300 min-h-[350px] p-2">
            <div className="bg-neutral-50 drop-shadow-md rounded p-2 w-full flex flex-col gap-3 md:flex-row mb-2">
              <div className="w-full md:h-full">
                <FaTruck size={100} className="mx-auto md:m-0" />
              </div>
              <div className="w-full md:h-full md:my-auto">
                <div className="text-center md:text-left md:flex md:flex-col">
                  <p className="text-stone-600 font-semibold text-[18px]">Tujuan</p>
                  <p className="text-amber-500 font-semibold text-[18px]">Solo, Jawa Tengah</p>
                </div>
              </div>
              <div className="w-full md:h-full md:my-auto">
                <p className="text-amber-500 text-center font-semibold text-[18px] md:text-left">Sedang Diantar</p>
              </div>
            </div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab label="Riwayat Order">
          <div className="bg-neutral-300 min-h-[350px] p-2">
            <div className="bg-neutral-50 drop-shadow-md rounded p-2 w-full flex flex-col gap-3 md:flex-row mb-2">
              <div className="w-full md:h-full">
                <FaTruck size={100} className="mx-auto md:m-0" />
              </div>
              <div className="w-full md:h-full md:my-auto">
                <div className="text-center md:text-left md:flex md:flex-col">
                  <p className="text-stone-600 font-semibold text-[18px]">Tujuan</p>
                  <p className="text-amber-500 font-semibold text-[18px]">Solo, Jawa Tengah</p>
                </div>
              </div>
              <div className="w-full md:h-full md:my-auto">
                <p className="text-amber-500 text-center font-semibold text-[18px] md:text-left">Sedang Diantar</p>
              </div>
            </div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab label="Buat Order">
          <FormOrder />
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

const TabsProfileDriver = () => {
  return (
    <div>
      <Tabs color="yellow">
        <Tabs.Tab label="Order Aktif">
          <div className="bg-neutral-50 drop-shadow-md rounded p-2 w-full flex flex-col gap-3 md:flex-row mb-2">
            <div className="w-full md:h-full">
              <FaTruck size={100} className="mx-auto md:m-0" />
            </div>
            <div className="w-full md:h-full md:my-auto">
              <div className="text-center md:text-left md:flex md:flex-col">
                <p className="text-stone-600 font-semibold text-[18px]">Tujuan</p>
                <p className="text-amber-500 font-semibold text-[18px]">Solo, Jawa Tengah</p>
              </div>
            </div>
            <div className="w-full md:h-full md:my-auto">
              <p className="text-amber-500 text-center font-semibold text-[18px] md:text-left">Sedang Diantar</p>
            </div>
          </div>
        </Tabs.Tab>
      </Tabs>
      <Tabs color="yellow">
        <Tabs.Tab label="Riwayat Order">
          <div className="bg-neutral-300 min-h-[350px] p-2">
            <div className="bg-neutral-50 drop-shadow-md rounded p-2 w-full flex flex-col gap-3 md:flex-row mb-2">
              <div className="w-full md:h-full">
                <FaTruck size={100} className="mx-auto md:m-0" />
              </div>
              <div className="w-full md:h-full md:my-auto">
                <div className="text-center md:text-left md:flex md:flex-col">
                  <p className="text-stone-600 font-semibold text-[18px]">Tujuan</p>
                  <p className="text-amber-500 font-semibold text-[18px]">Solo, Jawa Tengah</p>
                </div>
              </div>
              <div className="w-full md:h-full md:my-auto">
                <p className="text-amber-500 text-center font-semibold text-[18px] md:text-left">Selesai</p>
              </div>
            </div>
          </div>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export { TabsProfileCostumer, TabsProfileDriver };
