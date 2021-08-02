import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import MenuHeader from "../MenuHeader";

/**
 * @author
 * @function Layout
 **/

const Layout = (props) => {
  return (
    <>
      <Header />
      <MenuHeader />
      <div style={{ marginTop: "110px" }}>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
