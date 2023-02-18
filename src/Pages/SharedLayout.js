import React, { Fragment } from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const SharedLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
};

export default SharedLayout;
