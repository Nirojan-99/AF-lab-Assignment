import classes from "./Grid.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";

function Grid(props) {
  //userdata
  const { token, userID, role } = useSelector((state) => state.loging);
  const [wishlist, setWishlist] = useState("Add to Wishlist");
  const [cart, setCart] = useState("Add to Cart");

  //add to wishlist
  const wishlistHandler = () => {
    axios
      .put(
        "http://localhost:5000/user/favorite/" + userID,
        {
          data: props.data.id,
        },
        {
          headers: { Authorization: "valodation " + token },
        }
      )
      .then((res) => {
        setWishlist("Remove from Wishlist");
      })
      .catch((er) => {});
  };

  //remove from wishlist
  const removeWishlistHandler = () => {
    axios
      .delete(
        "http://localhost:5000/user/favorite/" + userID + "/" + props.data.id,
        {
          headers: { Authorization: "valodation " + token },
        }
      )
      .then((res) => {
        setWishlist("Add to Wishlist");
      })
      .catch((er) => {});
  };

  //add to cart
  const addCart = () => {
    axios
      .put(
        "http://localhost:5000/user/cart",
        {
          cart: props.data.id,
          id: userID,
        },
        {
          headers: { Authorization: "valodation " + token },
        }
      )
      .then((res) => {
        setCart("Remove From Cart");
      })
      .catch((er) => {});
  };

  //remove from cart
  const removeCart = () => {
    axios
      .put(
        `http://localhost:5000/user/cart/${userID}/${props.data.id}`,
        {},
        {
          headers: { Authorization: "valodation " + token },
        }
      )
      .then((res) => {
        setCart("Add to Cart");
      })
      .catch((er) => {});
  };

  const navigate = useNavigate();
  return (
    <>
      <div className={classes.productContainer}>
        <img className={classes.image} src={props.data.image} />
        <div>
          <div className={classes.title}>{props.data.title}</div>
          <div className={classes.price}>{`$${props.data.price}`}</div>
          <div className={classes.description}>{props.data.description}</div>
          <div className={classes.bottom}>
            {role === "customer" ? (
              <>
                <button
                  className={classes.positive}
                  onClick={
                    wishlist === "Add to Wishlist"
                      ? wishlistHandler
                      : removeWishlistHandler
                  }
                >
                  {wishlist}
                </button>
                <button
                  className={classes.positive}
                  onClick={cart === "Add to Cart" ? addCart : removeCart}
                >
                  {cart}
                </button>
              </>
            ) : (
              <>
                <button
                  style={{
                    cursor: props.data.userID !== userID && "not-allowed",
                  }}
                  disabled={props.data.userID !== userID}
                  className={classes.positive}
                  onClick={() => {
                    navigate("/product/edit/" + props.data.id);
                  }}
                >
                  Edit
                </button>
                <button
                  style={{
                    cursor: props.data.userID !== userID && "not-allowed",
                  }}
                  disabled={props.data.userID !== userID}
                  className={classes.negative}
                  onClick={() => {
                    props.handler(props.index, props.data.id);
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Grid;
