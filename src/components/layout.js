import * as React from "react";
import { Header } from "./header.js";
import { Footer } from "./footer.js";
import { container, heading } from "./layout.module.css";
import "./layout.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Header />
      <main className={container}>
        <title>{pageTitle}</title>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
