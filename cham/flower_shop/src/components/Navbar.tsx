import React from "react";
import Hana_shop from "../assets/image/Hana_shop.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header>
        <nav
          id="pink-background"
          className="navbar navbar-expand-lg navbar-light"
        >
          <div className="container-fluid">
            <a className="shop-logo">
              <img src={Hana_shop} alt="" className="logo-size" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="Home-font">
                  <Link
                    id="header-font"
                    className="nav-link active"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="Areas-font">
                  <Link id="header-font" className="nav-link" to="/area">
                    Area
                  </Link>
                </li>
                <li className="Oders-font">
                  <Link id="header-font" className="nav-link" to="/order">
                    Order
                  </Link>
                </li>
                <li className="Aboutus-font me-2">
                  <Link id="header-font" className="nav-link" to="/about">
                    About us
                  </Link>
                </li>
              </ul>
              <form className="Search-font d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder=""
                  aria-label="Search"
                />
                <button className="btn btn-outline-secondary" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      <footer>
        <a href="#" id="top-text" className="back-to-top">
          Top
        </a>
      </footer>
    </>
  );
};

export default Navbar;
