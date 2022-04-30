import classes from "./Header.module.css";
import logo from "../Assets/logo1.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../Store/auth";
import { useNavigate } from "react-router-dom";

function Header() {
  //data
  const { token, userID, role } = useSelector((state) => state.loging);
  const disptch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={classes.container_header}>
      <a href="/" className={classes.logoContiner}>
        <img className={classes.logo} src={logo} />
        <div className={classes.title}>BrandBucket</div>
      </a>
      <div className={classes.grow} />
      {!token && (
        <>
          <NavLink className={classes.nav} to="/auth/login">
            Login
          </NavLink>
          <NavLink exact={true} className={classes.nav} to="/auth/register">
            Register
          </NavLink>
        </>
      )}
      {token && role === "customer" && (
        <>
          <NavLink className={classes.nav} to="/cart">
            Cart
          </NavLink>
          <NavLink exact={true} className={classes.nav} to="/favorites">
            Favorites
          </NavLink>
        </>
      )}
      {token && (
        <>
          <NavLink className={classes.nav} to="/profile">
            Profile
          </NavLink>
          <div
            className={classes.nav}
            onClick={() => {
              disptch(logout());
              window.location.reload();
            }}
          >
            Logout
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
