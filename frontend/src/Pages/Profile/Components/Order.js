import Orders from "../../Util/Orders/Orders";
import classes from "./index.module.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

function Order() {
  //user data
  const { token, userID } = useSelector((state) => state.loging);

  //data
  const [orders, setOrders] = useState([]);

  //useEffect
  useEffect(() => {
    axios
      .get(`http://localhost:5000/orders/${userID}`, {
        headers: { Authorization: "valodation " + token },
      })
      .then((res) => {
        setOrders(res.data.data);
      })
      .catch((er) => {});
  }, []);

  return (
    <>
      <div className={classes.container}>
        <div style={{ padding: "1rem" }} className={classes.innerContainer}>
          {orders.length > 0 ? (
            orders.map((row, index) => {
              return <Orders key={index} data={row} />;
            })
          ) : (
            <div style={{textAlign:"center",color:"red",fontWeight:"bold"}}>No past orders available</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Order;
