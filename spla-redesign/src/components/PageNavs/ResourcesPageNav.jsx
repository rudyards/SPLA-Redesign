import React from "react";
import { Link } from "react-router-dom";

const ResourcesPageNav = props => {
  return (
    <div className="aboutSpla-container">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <button
            style={{
              color: "rgb(240, 130, 34)",
              fontWeight: "900",
              backgroundColor: "none"
            }}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerResources"
            aria-controls="navbarTogglerResources"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Resources
            <br />
            <i
              className="fas fa-chevron-circle-down"
              style={{ padding: "3px" }}
            />
          </button>
          <div
            className="collapse"
            id="navbarTogglerResources"
            style={{ backgroundColor: "white" }}
          >
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link to="/resources" style={{ color: "#212529" }}>
                  Resources Near Me
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/resources/greenstreets" style={{ color: "#212529" }}>
                  Green Streets Map
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/resources/veterans" style={{ color: "#212529" }}>
                  Veteran Resources
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ResourcesPageNav;
