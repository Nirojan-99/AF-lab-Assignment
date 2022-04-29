import classes from "./Checkout.module.css";

function Checkout() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.title}>Checkout</div>
        <input className={classes.inputs} placeHolder="Address" />
        <input className={classes.inputs} placeHolder="Name on card" />
        <input className={classes.inputs} placeHolder="Card Number" />
        <div className={classes.expiry}>
          <input
            className={classes.inputs}
            style={{ marginRight: "1rem" }}
            placeHolder="mm/yy"
          />
          <input className={classes.inputs} placeHolder="cvc" />
        </div>
        <button className={classes.btn}>Buy</button>
      </div>
    </>
  );
}

export default Checkout;
