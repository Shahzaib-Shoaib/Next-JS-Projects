import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Banner from "./Banner";

export default function Layout({ children }) {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      {/* <Banner /> */}
      <Nav />

      <main>{children}</main>
      <Footer />
    </div>
  );
}
