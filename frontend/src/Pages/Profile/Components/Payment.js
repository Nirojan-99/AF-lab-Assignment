import classes from "./index.module.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

function Payment() {
  //user data
  const { token, userID } = useSelector((state) => state.loging);

  //data
  const [payment, setPayment] = useState({});

  //useEffect
  useEffect(() => {
    axios
      .get(`http://localhost:5000/payments/${userID}`, {
        headers: { Authorization: "valodation " + token },
      })
      .then((res) => {
        setPayment(res.data);
      })
      .catch((er) => {});
  }, []);

  //handler
  const removeHandler = () => {
    axios
      .delete(`http://localhost:5000/payments/${payment.id}`, {
        headers: { Authorization: "valodation " + token },
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((er) => {});
  };

  return (
    <>
      <div className={classes.container}>
        <div style={{ padding: "1rem" }} className={classes.paymentContainer}>
          {payment.exDate && (
            <div className={classes.payBor}>
              <div className={classes.number}>{payment.cardNumber}</div>
              <div className={classes.date}>{payment.exDate}</div>
              <div style={{ flexGrow: 1 }} />
              <div>
                <button className={classes.remove} onClick={removeHandler}>
                  Remove
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Payment;
