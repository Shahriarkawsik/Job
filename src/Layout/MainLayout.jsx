import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
