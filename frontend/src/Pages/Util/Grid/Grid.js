import classes from "./Grid.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Grid(props) {
  //userdata
  const { token, userID, role } = useSelector((state) => state.loging);

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
                <button className={classes.positive}>Add to Wishlist</button>
                <button className={classes.positive}>Add to Cart</button>
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
