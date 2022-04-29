import classes from "./Header.module.css";
import logo from "../Assets/logo1.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isLogedin, setLog] = useState(false);
  const [role, setRole] = useState("tra");
  return (
    <div className={classes.container_header}>
      <a href="/" className={classes.logoContiner}>
        <img className={classes.logo} src={logo} />
        <div className={classes.title}>BrandBucket</div>
      </a>
      <div className={classes.grow} />
      {!isLogedin && (
        <>
          <NavLink className={classes.nav} to="/auth/login">
            Login
          </NavLink>
          <NavLink exact={true} className={classes.nav} to="/auth/register">
            Register
          </NavLink>
        </>
      )}
      {isLogedin && role === "customer" && (
        <>
          <NavLink className={classes.nav} to="/cart">
            Cart
          </NavLink>
          <NavLink exact={true} className={classes.nav} to="/favorites">
            Favorites
          </NavLink>
        </>
      )}
      {isLogedin && (
        <>
          <NavLink className={classes.nav} to="/profile">
            Profile
          </NavLink>
          <div className={classes.nav}>Logout</div>
        </>
      )}
    </div>
  );
}

export default Header;
