import React from "react";
import Footer from "@components/layout/footer/footer";
import Nav from "@components/layout/header/nav";
import BannerTop from "@components/common/banner-top";
import Header from "@components/layout/header/header";
// import Search from "@components/common/search";
import MobileNavigation from "@components/layout/mobile-navigation/mobile-navigation";

const Layout: React.FC = ({ children }:any) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <BannerTop/> */}
      {/* <Nav /> */}
      <Header />
      <main
        className="relative flex-grow"
        style={{
          minHeight: "-webkit-fill-available",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {children}
      </main>{" "}
      <Footer />
      <MobileNavigation />

      {/* <Search /> */}

    </div>
  );
}
export default Layout;
