import { Button } from "@mantine/core";
import React from "react";
import { Photo } from "tabler-icons-react";
import AdminOrderList from "../../components/adminOrderList/AdminOrderList";
import OrderCard from "../../components/orderCard/OrderCard";
import PaginList from "../../components/pagination/PaginList";
import SearchComps from "../../components/search/SearchComps";
import TabsAdmin from "../../components/tabsAdmin/TabsAdmin";
import UserCard from "../../components/userCard/UserCard";

function Coba2() {
  return (
    <>
      <SearchComps />
      <OrderCard />
      <PaginList />
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
      <Button className="bg-red-400">Profil user</Button>
    </>
  );
}

export default Coba2;
