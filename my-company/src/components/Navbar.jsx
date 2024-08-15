import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "10px",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          padding: 0,
          margin: 0,
        }}
      >
        <li>
          <Link to="/" style={{ color: "#fff", marginRight: "20px" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" style={{ color: "#fff", marginRight: "20px" }}>
            About
          </Link>
        </li>
        <li>
          <Link to="/Services" style={{ color: "#fff", marginRight: "20px" }}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/Contact" style={{ color: "#fff", marginRight: "20px" }}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
