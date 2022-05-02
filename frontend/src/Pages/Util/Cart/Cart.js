import classes from "./Cart.module.css";
import { BiX } from "react-icons/bi";
import { useState } from "react";

function CartProduct(props) {
  // cart value
  const [val, setVal] = useState(1);

  //increase value
  const incVal = () => {
    setVal((pre) => ++pre);
    props.quantityHandler("inc", +props.data.price, props.data._id, val + 1);
  };

  //decrease value
  const decVal = () => {
    if (val >= 2) {
      props.quantityHandler("dec", +props.data.price, props.data._id, val - 1);
    }
    setVal((pre) => {
      if (pre > 1) {
        return --pre;
      } else {
        return 1;
      }
    });
  };
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
          <button className={classes.positive} onClick={decVal}>
            -
          </button>
          <div>{val}</div>
          <button className={classes.positive1} onClick={incVal}>
            +
          </button>
        </div>
      </box>
    </div>
  );
}

export default CartProduct;
