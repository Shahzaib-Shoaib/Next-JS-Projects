import React from "react";
import Footer from "./footer";
import Nav from "./nav";
import Banner from "./banner";

export default function Layout({ children }:any) {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Banner />
      <Nav />

      <main>{children}</main>
      <Footer />
    </div>
  );
}