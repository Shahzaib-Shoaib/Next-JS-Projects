import React from "react";
import Footer from "@components/layout/footer/footer";
import Nav from "@components/layout/header/nav";
import BannerTop from "@components/common/banner-top";

export default function Layout({ children }:any) {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
    <BannerTop/>
      <Nav />

      <main>{children}</main>
      <Footer />
    </div>
  );
}