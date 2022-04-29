import Promotion from "../../Util/Promotions/Promotion";
import classes from "./index.module.css";

function Promotions() {
  return (
    <>
      <div className={classes.container}>
        <div style={{ padding: "1rem" }} className={classes.paymentContainer}>
            <div className={classes.top}>
                <div style={{flexGrow:1}}/>
                <div className={classes.newPromo}><a href="/promo/add">Add Promo</a></div>
            </div>
          <Promotion />
          <Promotion />
        </div>
      </div>
    </>
  );
}

export default Promotions;
