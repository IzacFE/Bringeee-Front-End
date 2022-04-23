import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import styles from "./Layout.module.css";

function Layout(props) {
  return (
    <>
      <Navbar />
      <main className={`${styles.layout} bg-neutral-100`}>
        {props.children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
