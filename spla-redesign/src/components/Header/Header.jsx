import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand"> <img src="//static1.squarespace.com/static/582dc9ea6a4963e5091cd8cd/t/58eeee60414fb57371fdf24d/1561049620762/?format=1500w" alt="Safe Parking LA" className="Header-branding-logo"></img></a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/options">Options <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/map">Map<span className="sr-only">(current)</span></Link>
                    </li>
                   
                </ul>
            </div>
        </nav>
    )
};


export default Header;