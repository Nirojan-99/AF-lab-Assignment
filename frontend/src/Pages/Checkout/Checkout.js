import classes from "./Checkout.module.css";
import { useParams } from "react-router-dom";
import Confirmation from "../Util/Model/Confirmation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Checkout() {
  //order id
  const { id } = useParams();

  //input data
  const [address, setAddress] = useState(""); //add to order
  const [carName, setName] = useState("");
  const [cardNum, setNum] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCVC] = useState("");
  const [amount, setAmount] = useState("");

  //other data
  const [isSubmitted, setSubmmitted] = useState(false);
  const [oid, setID] = useState("");
  const { token, userID } = useSelector((state) => state.loging);

  //hooks
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/orders?id=${id}`, {
        headers: { Authorization: "valodation " + token },
      })
      .then((res) => {
        setAmount(res.data.total);
      })
      .catch((er) => {
        navigate("/", { replace: true });
      });
  }, []);

  //submit handler
  const submit = (event) => {
    event.preventDefault();
    axios
      .post(
        `http://localhost:5000/payments/${userID}`,
        {
          amount,
          nameOnCard: carName,
          cardNumber: cardNum,
          exDate: expiry,
          cvc: cvc,
        },
        {
          headers: { Authorization: "valodation " + token },
        }
      )
      .then((res) => {
        setID(res.data.id);
        // axios
        //   .put(`http://localhost:5000/order/${id}`, {
        //     address,
        //     payment: "done",
        //   })
        //   .then((res) => {
        //   });
        setSubmmitted(true);
      })
      .catch((er) => {});
  };

  //close handler
  const closeHandler = () => {
    setSubmmitted(false);
  };

  return (
    <>
      {isSubmitted && <Confirmation closeHandler={closeHandler} id={oid} />}
      <div className={classes.container}>
        <div className={classes.title}>Checkout</div>
        <input
          className={classes.inputs}
          required
          value={address}
          onChange={(event) => {
            setAddress(event.target.value);
          }}
          placeholder="Address"
        />
        <input
          className={classes.inputs}
          required
          value={carName}
          onChange={(event) => {
            setName(event.target.value);
          }}
          placeholder="Name on card"
        />
        <input
          className={classes.inputs}
          required
          value={cardNum}
          onChange={(event) => {
            setNum(event.target.value);
          }}
          placeholder="Card Number"
        />
        <div className={classes.expiry}>
          <input
            className={classes.inputs}
            style={{ marginRight: "1rem" }}
            required
            value={expiry}
            onChange={(event) => {
              setExpiry(event.target.value);
            }}
            placeholder="mm/yy"
          />
          <input
            className={classes.inputs}
            required
            value={cvc}
            onChange={(event) => {
              setCVC(event.target.value);
            }}
            placeholder="cvc"
          />
        </div>
        <button onClick={submit} className={classes.btn}>
          Buy
        </button>
      </div>
    </>
  );
}

export default Checkout;
