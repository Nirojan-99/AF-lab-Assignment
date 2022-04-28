import classes from "./Header.module.css";
import logo from "../Assets/logo1.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className={classes.container_header}>
      <img className={classes.logo} src={logo} />
      <div className={classes.grow} />
      <NavLink
        className={classes.nav}
        activeClassName={classes.navActive}
        to="/cart"
      >
        Cart
      </NavLink>
      <NavLink className={classes.nav} to="/favorites">
        Favorites
      </NavLink>
      <NavLink className={classes.nav} to="/profile">
        Profile
      </NavLink>
    </div>
  );
}

export default Header;
