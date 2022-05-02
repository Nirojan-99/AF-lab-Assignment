import classes from "./Confirmation.module.css";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Confirmation(props) {
  //user data
  const { token, userID } = useSelector((state) => state.loging);

  //inputs
  const [OTP, setOTP] = useState("");
  const [error, setError] = useState(false);

  //hooks
  const navigate = useNavigate();

  //submit handler
  const submit = (event) => {
    event.preventDefault();
    setError(false);

    //checkotp
    if (!OTP.trim() || OTP.length !== 4) {
      setError(true);
    }

    axios
      .post(
        `http://localhost:5000/payment/${props.id}/${OTP}`,
        {},
        {
          headers: { Authorization: "valodation " + token },
        }
      )
      .then((res) => {
        if (res.data) {
          // props.closeHandler();
          axios
            .delete(`http://localhost:5000/user/cart/${userID}`, {
              headers: { Authorization: "valodation " + token },
            })
            .then((res) => {
              navigate("/", { replace: true });
            })
            .catch((er) => {});
        }
      })
      .catch((er) => {
        setError(true);
      });
  };

  return (
    <>
      <div className={classes.model}>
        <div className={classes.box}>
          <div>OTP verification</div>
          <input
            required
            name="OTP"
            type={"password"}
            value={OTP}
            onChange={(event) => {
              setOTP(event.target.value);
            }}
          />
          {error && <div className={classes.error}>Invalid OTP</div>}
          <button onClick={submit}>Submit</button>
          <div style={{ flexGrow: 1 }} />
        </div>
      </div>
    </>
  );
}

export default Confirmation;
