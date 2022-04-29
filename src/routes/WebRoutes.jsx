import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import AdminDetailOrder from "../pages/admin/AdminDetailOrder";
import AdminDriverDetail from "../pages/admin/AdminDriverDetail";
import AdminListOrder from "../pages/admin/AdminListOrder";
import AdminListUser from "../pages/admin/AdminListUser";
import AdminReport from "../pages/admin/AdminReport";
import Coba1 from "../pages/coba1/Coba1";
import Coba2 from "../pages/coba2/Coba2";
import ConfirmOrder from "../pages/confirmOrder/ConfirmOrder";
import Detail from "../pages/detail/Detail";
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
          <Route path="/detail-order/:id" element={<Detail />} />
          <Route path="/confirm-order/:id" element={<ConfirmOrder />} />
          <Route path="/admin-orders" element={<AdminListOrder />} />
          <Route path="/admin-users" element={<AdminListUser />} />
          <Route path="/admin-report" element={<AdminReport />} />
          <Route
            path="/admin-driver-detail/:id"
            element={<AdminDriverDetail />}
          />
          <Route
            path="/admin-detail-order/:id"
            element={<AdminDetailOrder />}
          />
          <Route path="/coba1" element={<Coba1 />} />
          <Route path="/coba2" element={<Coba2 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default WebRoutes;
