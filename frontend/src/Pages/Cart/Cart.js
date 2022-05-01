import CartProduct from "../Util/Cart/Cart";
import classes from "./Cart.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

function Cart() {
  //hook
  const navigate = useNavigate();

  //user data
  const { token, userID } = useSelector((state) => state.loging);
  const [cart, setcart] = useState([]);

  //useEffect
  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/cart/${userID}`, {
        headers: { Authorization: "valodation " + token },
      })
      .then((res) => {
        setcart(res.data.data);
      })
      .catch((er) => {});
  }, []);

  //delete handler
  const deleteHandler = (id, index) => {
    axios
      .put(
        `http://localhost:5000/user/cart/${userID}/${id}`,
        {},
        {
          headers: { Authorization: "valodation " + token },
        }
      )
      .then((res) => {
        setcart((pre) => {
          const array = [...pre];
          array.splice(index, 1);
          return array;
        });
      })
      .catch((er) => {});
  };

  return (
    <>
      <div className={classes.header}>
        <div style={{ flexGrow: 1 }} />
        <div className={classes.title}>Total : $299.99</div>
      </div>
      <div className={classes.cartdata}>
        {cart.length > 0 ? (
          cart.map((row, index) => {
            return (
              <CartProduct
                handler={deleteHandler}
                index={index}
                data={row}
                key={index}
              />
            );
          })
        ) : (
          <></>
        )}
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
