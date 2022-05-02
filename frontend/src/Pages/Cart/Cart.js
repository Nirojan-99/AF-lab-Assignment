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
  const [total, setTotal] = useState(0);
  const [cartObj, setCartObj] = useState({});

  //checkout handler
  const checkout = () => {
    axios
      .post(
        `http://localhost:5000/orders`,
        { userID, total, products: cartObj },
        {
          headers: { Authorization: "valodation " + token },
        }
      )
      .then((res) => {
        navigate(`/checkout/${res.data.id}`, { replace: true });
      })
      .catch((er) => {});
  };

  //total calculator
  const quantityHandler = (operation, price, id, amount) => {
    setCartObj((pre) => {
      let obj = { ...pre, [id]: amount };
      return obj;
    });

    if (operation === "inc") {
      setTotal((pre) => {
        let val;
        val = pre * 100 + price * 100;
        return val / 100;
      });
    } else {
      setTotal((pre) => (pre * 100 - price * 100) / 100);
    }
  };

  //useEffect
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/carts/${userID}`, {
        headers: { Authorization: "valodation " + token },
      })
      .then((res) => {
        setcart(res.data.data);
        setCartObj((pre) => {
          for (let i = 0; i < res.data.data.length; i++) {
            let obj = { ...pre, [res.data.data[i].id]: 1 };
            return obj;
          }
        });
        setTotal((pre) => {
          let data = pre * 100;
          for (let i = 0; i < res.data.data.length; i++) {
            data += +res.data.data[i].price * 100;
          }
          return data / 100;
        });
      })
      .catch((er) => {});
  }, []);

  //delete handler
  const deleteHandler = (id, index) => {
    axios
      .put(
        `http://localhost:5000/users/carts/${userID}/${id}`,
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
        <div className={classes.title}>{`Total : ${total}`}</div>
      </div>
      <div className={classes.cartdata}>
        {cart.length > 0 ? (
          cart.map((row, index) => {
            return (
              <CartProduct
                quantityHandler={quantityHandler}
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
          disabled={total === 0}
          onClick={() => {
            checkout();
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
