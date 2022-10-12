import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <Fragment>
      <nav>
        {/* Logo */}
        <Link className="logo-container" to="/">
          <div>P<span>N</span>D</div>
        </Link>
        {/* Nav links */}
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;