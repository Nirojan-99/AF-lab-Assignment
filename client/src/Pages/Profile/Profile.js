import classes from "./Profile.module.css";
import { useState, useEffect } from "react";
import Account from "./Components/Account";
import Products from "./Components/Products";
import Order from "./Components/Order";

function Profile() {
  const [page, setPage] = useState("details");

  const render = () => {
    switch (page) {
      case "details":
        return <Account />;
        break;
      case "products":
        return <Products />;
        break;
      case "order":
        return <Order />;
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
        <div
          onClick={() => {
            setPage("Promotions");
          }}
          className={page === "Promotions" ? classes.activeTabs : classes.tabs}
        >
          <button>Promotions</button>
        </div>
      </div>
      <div className={classes.container}>{render()}</div>
    </>
  );
}

export default Profile;
