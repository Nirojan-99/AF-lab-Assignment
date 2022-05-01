import classes from "./Cart.module.css";
import { BiX } from "react-icons/bi";

function CartProduct(props) {
  return (
    <div className={classes.cartContainer}>
      <img className={classes.image} src={props.data.image} />
      <box className={classes.sidebox}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className={classes.title}>{props.data.title}</div>
          <BiX
            className={classes.icon}
            onClick={() => {
              props.handler(props.data.id, props.index);
            }}
          />
        </div>
        <div className={classes.price}>{`$${props.data.price}`}</div>
        <div className={classes.description}>{props.data.description}</div>
        <div style={{ flexGrow: 1 }} />
        <div className={classes.bottom}>
          <button className={classes.positive}>-</button>
          <div>1</div>
          <button className={classes.positive1}>+</button>
        </div>
      </box>
    </div>
  );
}

export default CartProduct;
