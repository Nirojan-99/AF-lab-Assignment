import classes from "./Profile.module.css";
import { useState, useEffect } from "react";
import Account from "./Components/Account";
import Products from "./Components/Products";
import Order from "./Components/Order";
import Payment from "./Components/Payment";
import Promotions from "./Components/Promotions";
import Customers from "./Components/Customers";

function Profile() {
  const [page, setPage] = useState("details");
  const [aniClass, setAniClass] = useState(classes.container);

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
      case "payment":
        return <Payment />;
        break;
      case "Promotions":
        return <Promotions />;
        break;
      case "Customers":
        return <Customers />;
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
            setAniClass(classes.anomationClass);
            setTimeout(() => {
              setAniClass(classes.container);
            }, 400);
          }}
          className={page === "details" ? classes.activeTabs : classes.tabs}
        >
          <button>Account</button>
        </div>
        <div
          onClick={() => {
            setPage("products");
            setAniClass(classes.anomationClass);
            setTimeout(() => {
              setAniClass(classes.container);
            }, 400);
          }}
          className={page === "products" ? classes.activeTabs : classes.tabs}
        >
          <button>Products</button>
        </div>
        <div
          onClick={() => {
            setPage("order");
            setAniClass(classes.anomationClass);
            setTimeout(() => {
              setAniClass(classes.container);
            }, 400);
          }}
          className={page === "order" ? classes.activeTabs : classes.tabs}
        >
          <button>Order</button>
        </div>
        <div
          onClick={() => {
            setPage("payment");
            setAniClass(classes.anomationClass);
            setTimeout(() => {
              setAniClass(classes.container);
            }, 400);
          }}
          className={page === "payment" ? classes.activeTabs : classes.tabs}
        >
          <button>Payment</button>
        </div>
        <div
          onClick={() => {
            setPage("Promotions");
            setAniClass(classes.anomationClass);
            setTimeout(() => {
              setAniClass(classes.container);
            }, 400);
          }}
          className={page === "Promotions" ? classes.activeTabs : classes.tabs}
        >
          <button>Promotions</button>
        </div>
        <div
          onClick={() => {
            setPage("Customers");
            setAniClass(classes.anomationClass);
            setTimeout(() => {
              setAniClass(classes.container);
            }, 400);
          }}
          className={page === "Customers" ? classes.activeTabs : classes.tabs}
        >
          <button>Customers</button>
        </div>
      </div>
      <div className={aniClass}>{render()}</div>
    </>
  );
}

export default Profile;
