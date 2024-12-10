import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom w-100">
      <div className="container d-flex justify-content-between">
        <Link className="navbar-brand" to="/">
          Company Name
        </Link>

        <div className="d-flex">
          <Link
            className="nav-link mx-2 text-decoration-underline"
            to="/features"
          >
            Features
          </Link>
          <Link
            className="nav-link mx-2 text-decoration-underline"
            to="/enterprise"
          >
            Enterprise
          </Link>
          <Link
            className="nav-link mx-2 text-decoration-underline"
            to="/support"
          >
            Support
          </Link>
          <Link className="nav-link mx-2 text-decoration-underline" to="/">
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
