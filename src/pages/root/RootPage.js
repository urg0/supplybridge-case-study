import React from "react";
import { Outlet } from "react-router-dom";

import MainNavigation from "@components/main-navigation/MainNavigation";
import Footer from "@components/ui/footer/Footer";

import "@pages/root/RootPage.scss";

const RootPage = () => {
  return (
    <div className="root-page-container">
      <section className="main-navigation">
        <MainNavigation />
      </section>
      <section className="page-content">
        <Outlet />
      </section>
      <section className="footer">
        <Footer />
      </section>
    </div>
  );
};

export default RootPage;
