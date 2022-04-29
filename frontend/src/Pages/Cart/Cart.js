import CartProduct from "../Util/Cart/Cart";
import classes from "./Cart.module.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
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
      <div className={classes.bottom}>
        <div style={{ flexGrow: 3 }} />
        <button
          onClick={() => {
            navigate("/checkout");
          }}
          className={classes.btn}
        >
          Checkout
        </button>
        <div style={{ flexGrow: 1 }} />
      </div>
    </>
  );
}

export default Cart;
