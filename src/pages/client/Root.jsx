import React from "react";
import Header from "./../../components/client/Header/index";
import { Outlet } from "react-router-dom";
import Footer from "./../../components/client/Footer/index";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
