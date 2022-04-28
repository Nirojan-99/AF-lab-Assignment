import classes from "./Profile.module.css";
import { useState, useEffect } from "react";
import Account from "./Components/Account";

function Profile() {
  const [page, setPage] = useState("details");

  const render = () => {
    switch (page) {
      case "details":
        return <Account />;
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className={classes.header}>
        <div
          onClick={() => {
            setPage("details");
          }}
          className={page === "details" ? classes.activeTabs : classes.tabs}
        >
          <button>Account</button>
        </div>
        <div
          onClick={() => {
            setPage("products");
          }}
          className={page === "products" ? classes.activeTabs : classes.tabs}
        >
          <button>Products</button>
        </div>
        <div
          onClick={() => {
            setPage("order");
          }}
          className={page === "order" ? classes.activeTabs : classes.tabs}
        >
          <button>Order</button>
        </div>
        <div
          onClick={() => {
            setPage("payment");
          }}
          className={page === "payment" ? classes.activeTabs : classes.tabs}
        >
          <button>Payment</button>
        </div>
      </div>
      <div className={classes.container}>{render()}</div>
    </>
  );
}

export default Profile;
