import classes from "./Orders.module.css";
import { useState } from "react";

const SingleProduct = (props) => {
  return (
    <>
      <div className={classes.rowdata}>
        <div>{props.data}</div>
        <div style={{ flexGrow: 1 }} />
        <div>2</div>
        <div style={{ flexGrow: 1 }} />
        <div>$129</div>
      </div>
    </>
  );
};

function Orders() {
  const [products, setProducts] = useState([
    "product 1",
    "product 2",
    "product 3",
    "product 4",
  ]);
  return (
    <>
      <div className={classes.orderContainer}>
        <div className={classes.title}>Order id #33456789</div>
        <div style={{ marginTop: "1rem" }} />
        {products.map((row) => {
          return <SingleProduct data={row} />;
        })}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className={classes.total}>Date : 2022/12/2</div>
          <div style={{ flexGrow: 1 }} />
          <div className={classes.total}>Total : $1999</div>
        </div>
      </div>
    </>
  );
}

export default Orders;
