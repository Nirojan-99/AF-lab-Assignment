import classes from "./Orders.module.css";
import { useState } from "react";

function Orders(props) {
  return (
    <>
      <div className={classes.orderContainer}>
        <div className={classes.title}>Order id {`#${props.data.id}`}</div>
        <div style={{ marginTop: "1rem" }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className={classes.total}>{`Date : ${props.data.date}`}</div>
          <div style={{ flexGrow: 1 }} />
          <div className={classes.total}>{`Total : ${props.data.total}`}</div>
        </div>
      </div>
    </>
  );
}

export default Orders;
