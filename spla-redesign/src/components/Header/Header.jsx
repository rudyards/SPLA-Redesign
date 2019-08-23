import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      <Link className="navbar-brand" to="/">
        <img
          src="//static1.squarespace.com/static/582dc9ea6a4963e5091cd8cd/t/58eeee60414fb57371fdf24d/1561049620762/?format=1500w"
          alt="Safe Parking LA"
          className="Header-branding-logo"
        />
      </Link>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link
              style={{
                color: "rgb(240, 130, 34)",
                fontWeight: "900",
                backgroundColor: "rgba(240,130,34,0.3)"
              }}
              className="nav-link"
              to="/apply"
            >
              APPLY <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerAbout"
              aria-controls="navbarTogglerAbout"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              About
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerAbout">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link" to="/about">
                    About Safe Parking LA
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item active">Our Stories</li>
                <li className="nav-item active">Our Process</li>
                <li className="nav-item active">In the News</li>
                <li className="nav-item active">Events</li>
                <li className="nav-item active">Partner with Us</li>
              </ul>
            </div>
          </li>

          <li className="nav-item active">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerResources"
              aria-controls="navbarTogglerResources"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Resources
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarTogglerResources"
            >
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link" to="/resources">
                    Resources Near Me<span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item active">FAQs</li>
                <li className="nav-item active">Green Streets Map</li>
                <li className="nav-item active">Veteran Resources</li>
                <li className="nav-item active">LA HSA</li>
                <li className="nav-item active">SPLA Pilot</li>
                <li className="nav-item active">Ordinance 85.02</li>
                <li className="nav-item active">Medical Emergency</li>
              </ul>
            </div>
          </li>
          <li className="nav-item active">
            <a
              className="nav-link"
              href="https://safeparkingla.networkforgood.com/projects/68953-safe-parking-la"
            >
              Donate<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/contactus">
              Contact Us<span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
