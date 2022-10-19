import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.scss";

import { UserContext } from "../../contexts/UserContext";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <nav>
        {/* Logo */}
        <Link className="logo-container" to="/">
          <div>
            P<span>N</span>D
          </div>
        </Link>
        {/* Nav links */}
        <div className="nav-links-container">
          <Link className="nav-link shop" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link sign-in" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
