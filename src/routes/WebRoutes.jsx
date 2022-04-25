import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import AdminDriverDetail from "../pages/admin/AdminDriverDetail";
import AdminListOrder from "../pages/admin/AdminListOrder";
import AdminListUser from "../pages/admin/AdminListUser";
import AdminReport from "../pages/admin/AdminReport";
import Coba1 from "../pages/coba1/Coba1";
import Coba2 from "../pages/coba2/Coba2";
import ConfirmOrder from "../pages/confirmOrder/ConfirmOrder";
import Home from "../pages/home/Home";
import Landing from "../pages/landing/Landing";
import Profile from "../pages/profile/Profile";

function WebRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/confirm-order" element={<ConfirmOrder />} />
          <Route path="/admin-orders" element={<AdminListOrder />} />
          <Route path="/admin-users" element={<AdminListUser />} />
          <Route path="/admin-report" element={<AdminReport />} />
          <Route path="/admin-driver-detail" element={<AdminDriverDetail />} />
          <Route path="/coba1" element={<Coba1 />} />
          <Route path="/coba2" element={<Coba2 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default WebRoutes;
