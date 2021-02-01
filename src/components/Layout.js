import React from "react";
import Header from "./shared/header";
import Footer from "./shared/footer";

import { Helmet } from "react-helmet-async";

import "bootswatch/dist/lux/bootstrap.css";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
