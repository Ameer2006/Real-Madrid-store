import React, { useState, useEffect } from "react";
import img1 from "./logo.png";
import { FaShoppingCart, FaSignInAlt, FaUser } from "react-icons/fa";
import { useLocation } from "react-router-dom"; // Assuming you're using React Router

export default function Navbar() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/":
        setActiveItem("Home");
        break;
      case "/about":
        setActiveItem("About");
        break;
      case "/contact":
        setActiveItem("Contact");
        break;
      default:
        setActiveItem("");
    }
  }, [location]);

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary shadow border-primary fixed-top"
      style={{ maxHeight: 75 }}
    >
      <div className="container-fluid">
        <img
          className="navbar-brand"
          alt="logo"
          href="/"
          src={img1}
          style={{ maxHeight: 70 }}
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className=" container collapse navbar-collapse justify-content-center bg-light"
          id="navbarNav"
        >
          <ul className="col-md-3"></ul>
          <ul className="navbar-nav col-md-5 ms-md-5">
            <li className="nav-item fs-5">
              <a
                className={`nav-link table-hover icon-link-hover ${
                  activeItem === "Home" ? "text-primary" : ""
                }`}
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item fs-5">
              <a
                className={`nav-link ${
                  activeItem === "About" ? "text-primary" : ""
                }`}
                href="/about"
              >
                About Us
              </a>
            </li>
            <li className="nav-item fs-5">
              <a
                className={`nav-link ${
                  activeItem === "Contact" ? "text-primary" : ""
                }`}
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item fs-5">
              <a className="nav-link" href="/login">
                <FaSignInAlt size={20} color="black" className="me-2" />
                Log in
              </a>
            </li>
            <li className="nav-item fs-5">
              <a className="nav-link" href="/signup">
                <FaUser size={20} color="black" className="me-2" />
                Sign up
              </a>
            </li>
            <li className="nav-item fs-5">
              <a className="  nav-link" href="/cart">
                <FaShoppingCart size={39} color="black" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
