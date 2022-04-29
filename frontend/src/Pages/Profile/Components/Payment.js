import classes from "./index.module.css";

function Payment() {
  return (
    <>
      <div className={classes.container}>
        <div style={{ padding: "1rem" }} className={classes.paymentContainer}>
          <div className={classes.payBor}>
            <div className={classes.number}>xxxx xxxx xxxx 2345</div>
            <div className={classes.date}>24/12</div>
            <div style={{ flexGrow: 1 }} />
            <div>
              <button className={classes.remove}>Remove</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
