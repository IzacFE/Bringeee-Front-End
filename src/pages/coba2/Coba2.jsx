import React, { useState } from "react";
import { Button } from "@mantine/core";
import { Photo } from "tabler-icons-react";
import AdminDriver from "../../components/adminDriverDetail/AdminDriver";
import AdminDriverTypes from "../../components/adminDriverTypes/AdminDriverTypes";
import AdminOrderList from "../../components/adminOrderList/AdminOrderList";
import CustomerModal from "../../components/customerAccModal/CustomerModal";
import LoadSpin from "../../components/loadSpin/LoadSpin";
import OrderCard from "../../components/orderCard/OrderCard";
import SearchComps from "../../components/search/SearchComps";
import StepHorizon from "../../components/stepper/StepHorizon";
import TabsAdmin from "../../components/tabsAdmin/TabsAdmin";
import TimelineVer from "../../components/timeline/TimelineVer";
import UserCard from "../../components/userCard/UserCard";
import CategoryHome from "../../components/category/CategoryHome";

function Coba2() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <SearchComps />
      <OrderCard />
      <TabsAdmin
        title1="Order Konfirmasi"
        title2="Order Ongoing"
        title3="Riwayat Order"
        icon1={<Photo size={14} />}
        icon2={<Photo size={14} />}
        icon3={<Photo size={14} />}
      />
      <UserCard />
      <AdminOrderList />
      <TabsAdmin
        title1="Kustomer"
        title2="Driver"
        title3="Admin"
        icon1={<Photo size={14} />}
        icon2={<Photo size={14} />}
        icon3={<Photo size={14} />}
      />
      <Button className="bg-red-400" onClick={() => setOpened(true)}>
        Profil user
      </Button>
      <AdminDriverTypes />
      <CustomerModal
        opened={opened}
        onClose={() => {
          setOpened(false);
        }}
      />
      <AdminDriver />
      <LoadSpin />
      <StepHorizon />
      <TimelineVer />
    </>
  );
}

export default Coba2;
