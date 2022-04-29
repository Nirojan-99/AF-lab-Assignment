import Orders from "../../Util/Orders/Orders";
import classes from "./index.module.css";

function Order() {
  return (
    <>
      <div className={classes.container}>
        <div style={{ padding: "1rem" }} className={classes.innerContainer}>
            <Orders/>
            <Orders/>
            <Orders/>
            <Orders/>
        </div>
      </div>
    </>
  );
}

export default Order;
