import CartProduct from "../Util/Cart/Cart";
import classes from "./Cart.module.css";

function Cart() {
  return (
    <>
      <div className={classes.header}>
        <div style={{ flexGrow: 1 }} />
        <div className={classes.title}>Total : $299.99</div>
      </div>
      <div className={classes.cartdata}>
        <CartProduct />
        <CartProduct />
      </div>
    </>
  );
}

export default Cart;
