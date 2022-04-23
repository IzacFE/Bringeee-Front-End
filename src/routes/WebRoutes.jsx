import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Coba1 from "../pages/coba1/Coba1";
import Coba2 from "../pages/coba2/Coba2";
import Landing from "../pages/landing/Landing";

function WebRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/coba1" element={<Coba1 />} />
          <Route path="/coba2" element={<Coba2 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default WebRoutes;
