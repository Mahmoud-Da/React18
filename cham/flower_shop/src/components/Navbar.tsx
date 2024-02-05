import React from "react";
import Hana_shop from "../assets/image/Hana_shop.png";
import "../Index.css";
const Navbar = () => {
  return (
    <>
      <header>
        <nav
          id="pink-background"
          className="navbar navbar-expand-lg navbar-light"
        >
          <div className="container-fluid">
            <a className="shop-logo" href="./index.html">
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
                  <a
                    id="header-font"
                    className="nav-link active"
                    aria-current="page"
                    href="./index.html"
                  >
                    Home
                  </a>
                </li>
                <li className="Areas-font">
                  <a id="header-font" className="nav-link" href="./area.html">
                    Area
                  </a>
                </li>
                <li className="Oders-font">
                  <a id="header-font" className="nav-link" href="./order.html">
                    Order
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="Aboutus-font me-2">
                  <a
                    id="header-font"
                    className="nav-link"
                    href="./about_us.html"
                  >
                    About us
                  </a>
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
