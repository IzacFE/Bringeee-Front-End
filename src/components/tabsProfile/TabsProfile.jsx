import React from "react";
import { Link } from "react-router-dom";
import FormOrder from "../../components/formOrder/FormOrder";
import { Tabs } from "@mantine/core";
import { TruckDelivery } from "tabler-icons-react";

const TabsProfileCustomer = (props) => {
  return (
    <div>
      <Tabs color="yellow">
        <Tabs.Tab label="Order Aktif">
          <div className="bg-neutral-200 rounded-lg min-h-[350px] p-2">
            {props.dataOrderActive &&
              props.dataOrderActive.map((orders) => {
                return (
                  <Link to={`/confirm-order/${orders.id}`} key={orders.id}>
                    <div className="bg-neutral-50 drop-shadow-md rounded p-2 w-full flex flex-col gap-3 md:flex-row mb-2">
                      <div className="w-full md:w-96 md:h-full">
                        <TruckDelivery size={100} className="text-center md:m-0" />
                        <p className="text-stone-500 font-medium text-center text-[16px]">{orders.distance} km</p>
                      </div>
                      <div className="w-full md:h-full md:my-auto">
                        <div className="text-center md:text-left md:flex md:flex-col">
                          <p className="text-gray-600 font-normal text-[16px]">#{orders.id}</p>
                          <p className="text-stone-600 font-medium text-[16px]">Asal</p>
                          <p className="text-amber-500 font-medium text-[16px]">
                            {orders.destination_start_province}, {orders.destination_start_city}
                          </p>
                          <p className="text-stone-600 font-medium text-[16px]">Tujuan</p>
                          <p className="text-amber-500 font-medium text-[16px]">
                            {orders.destination_end_province}, {orders.destination_end_city}
                          </p>
                        </div>
                      </div>
                      <div className="w-full md:h-full md:my-auto">
                        {orders.status === "REQUESTED" ? (
                          <p className="text-gray-500 font-semibold text-[16px]">Konfirmasi admin</p>
                        ) : orders.status === "NEED_CUSTOMER_CONFIRM" ? (
                          <p className="text-gray-500 font-semibold text-[16px]">Konfirmasi customer</p>
                        ) : orders.status === "CONFIRMED" ? (
                          <p className="text-green-500 font-semibold text-[16px]">Menunggu pembayaran</p>
                        ) : orders.status === "MANIFESTED" ? (
                          <p className="text-violet-500 font-semibold text-[16px]">Diteruskan kedriver</p>
                        ) : orders.status === "ON_PROCESS" ? (
                          <p className="text-amber-500 font-semibold text-[16px]">Dalam pengiriman</p>
                        ) : orders.status === "DELIVERED" ? (
                          <p className="text-green-500 font-semibold text-[16px]">Order selesai</p>
                        ) : (
                          <p className="text-red-500 font-semibold text-[16px]">Dibatalkan</p>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </Tabs.Tab>
        <Tabs.Tab label="Riwayat Order">
          <div className="bg-neutral-200 rounded-lg min-h-[350px] p-2">
            {props.dataHistoryOrder &&
              props.dataHistoryOrder.map((orders) => {
                return (
                  <Link to={`/detail-order/${orders.id}`} key={orders.id}>
                    <div className="bg-neutral-50 drop-shadow-md rounded p-2 w-full flex flex-col gap-3 md:flex-row mb-2">
                      <div className="w-full md:w-96 md:h-full">
                        <TruckDelivery size={100} className="mx-auto md:m-0" />
                        <p className="text-gray-500 font-medium text-[16px]">Order id: {orders.id}</p>
                      </div>
                      <div className="w-full md:h-full md:my-auto">
                        <div className="text-center md:text-left md:flex md:flex-col">
                          <p className="text-stone-600 font-medium text-[16px]">Asal</p>
                          <p className="text-amber-500 font-medium text-[16px]">
                            {orders.destination_start_province}, {orders.destination_start_city}
                          </p>
                          <p className="text-stone-600 font-medium text-[16px]">Tujuan</p>
                          <p className="text-amber-500 font-medium text-[16px]">
                            {orders.destination_end_province}, {orders.destination_end_city}
                          </p>
                        </div>
                      </div>
                      <div className="w-full md:h-full md:my-auto">
                        {orders.status === "DELIVERED" ? <p className="text-green-500 font-semibold text-[17px]">Order selesai</p> : <p className="text-red-500 font-semibold text-[17px]">Dibatalkan</p>}
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </Tabs.Tab>
        <Tabs.Tab label="Buat Order">
          <FormOrder reloadSoftPage={() => props.reloadSoftPage()} />
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

const TabsProfileDriver = (props) => {
  return (
    <div>
      <Tabs color="yellow">
        <Tabs.Tab label="Order Aktif">
          {props.dataOrderActive && (
            <Link to={`/take-order/${props.dataOrderActive.id}`} key={props.dataOrderActive.id}>
              <div className="bg-neutral-50 drop-shadow-md rounded p-2 w-full flex flex-col gap-3 md:flex-row mb-2">
                <div className="w-full md:w-96 md:h-full">
                  <TruckDelivery size={100} className="text-center md:m-0" />
                  <p className="text-stone-500 font-medium text-center text-[16px]">{props.dataOrderActive.distance} km</p>
                </div>
                <div className="w-full md:h-full md:my-auto">
                  <div className="text-center md:text-left md:flex md:flex-col">
                    <p className="text-gray-600 font-normal text-[16px]">#{props.dataOrderActive.id}</p>
                    <p className="text-stone-600 font-medium text-[16px]">Asal</p>
                    <p className="text-amber-500 font-medium text-[16px]">
                      {props.dataOrderActive.destination_start_province}, {props.dataOrderActive.destination_start_city}
                    </p>
                    <p className="text-stone-600 font-medium text-[16px]">Tujuan</p>
                    <p className="text-amber-500 font-medium text-[16px]">
                      {props.dataOrderActive.destination_end_province}, {props.dataOrderActive.destination_end_city}
                    </p>
                  </div>
                </div>
                <div className="w-full md:h-full md:my-auto">{props.dataOrderActive.status === "ON_PROCESS" && <p className="text-amber-500 font-semibold text-[16px]">Dalam Pengiriman</p>}</div>
              </div>
            </Link>
          )}
        </Tabs.Tab>
      </Tabs>
      <Tabs color="yellow">
        <Tabs.Tab label="Riwayat Order">
          <div className="bg-neutral-200 rounded-lg min-h-[350px] p-2">
            {props.dataHistoryOrder &&
              props.dataHistoryOrder.map((orders) => {
                return (
                  <Link to={`/detail-order/${orders.id}`} key={orders.id}>
                    <div className="bg-neutral-50 drop-shadow-md rounded p-2 w-full flex flex-col gap-3 md:flex-row mb-2">
                      <div className="w-full md:w-96 md:h-full">
                        <TruckDelivery size={100} className="text-center md:m-0" />
                        <p className="text-stone-500 font-medium text-center text-[16px]">{orders.distance} km</p>
                      </div>
                      <div className="w-full md:h-full md:my-auto">
                        <div className="text-center md:text-left md:flex md:flex-col">
                          <p className="text-gray-600 font-normal text-[16px]">#{orders.id}</p>
                          <p className="text-stone-600 font-medium text-[16px]">Asal</p>
                          <p className="text-amber-500 font-medium text-[16px]">
                            {orders.destination_start_province}, {orders.destination_start_city}
                          </p>
                          <p className="text-stone-600 font-medium text-[16px]">Tujuan</p>
                          <p className="text-amber-500 font-medium text-[16px]">
                            {orders.destination_end_province}, {orders.destination_end_city}
                          </p>
                        </div>
                      </div>
                      <div className="w-full md:h-full md:my-auto">{orders.status === "DELIVERED" && <p className="text-green-500 font-semibold text-[16px]">Dalam Pengiriman</p>}</div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export { TabsProfileCustomer, TabsProfileDriver };
