import * as React from "react";
import { Link } from "gatsby";
import {
  navLinks,
  navLinkItem,
  navLinkText,
  navbar,
} from "./layout.module.css";
import "./layout.css";

export const Header = () => {
  return (
    <nav
      className={`${navbar} navbar sticky-top justify-content-center nav-fill`}
    >
      <ul className="navbar-nav">
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Projects
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Resume
            </Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
};
