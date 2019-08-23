import React from "react";
import { Link } from "react-router-dom";

const AboutPageNav = props => {
  return (
    <div className="aboutSpla-container">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active ">
          <button
            style={{
              color: "rgb(240, 130, 34)",
              fontWeight: "900",
              backgroundColor: "none"
            }}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerAbout"
            aria-controls="navbarTogglerAbout"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            About Safe Parking LA <br />
            <i
              className="fas fa-chevron-circle-down"
              style={{ padding: "3px" }}
            />
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarTogglerAbout"
            style={{ backgroundColor: "white" }}
          >
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
              <li
                className="nav-item active"
                style={{ textDecoration: "none" }}
              >
                <Link to="/about" style={{ color: "#212529" }}>
                  About SPLA{" "}
                </Link>
              </li>
              <li
                className="nav-item active"
                style={{ textDecoration: "none" }}
              >
                <Link to="/about/ourprocess" style={{ color: "#212529" }}>
                  Our Process{" "}
                </Link>
              </li>
              <li
                className="nav-item active"
                style={{ textDecoration: "none" }}
              >
                <Link to="/about/news" style={{ color: "#212529" }}>
                  In The News{" "}
                </Link>
              </li>
              <li
                className="nav-item active"
                style={{ textDecoration: "none" }}
              >
                <Link to="/about/partner" style={{ color: "#212529" }}>
                  Partner with Us{" "}
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AboutPageNav;
