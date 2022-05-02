import Promotion from "../../Util/Promotions/Promotion";
import classes from "./index.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function Promotions() {
  //user data
  const { token, userID } = useSelector((state) => state.loging);

  //data
  const [promotions, setPromotions] = useState([]);

  //useeffect
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/promotions/${userID}`, {
        headers: { Authorization: "valodation " + token },
      })
      .then((res) => {
        if (res.data) {
          setPromotions(res.data.data);
        }
      })
      .catch((er) => {});
  }, []);

  return (
    <>
      <div className={classes.container}>
        <div style={{ padding: "1rem" }} className={classes.paymentContainer}>
          {promotions.length > 0 ? (
            promotions.map((row,index) => {
              return <Promotion key={index} data={row}/>;
            })
          ) : (
            <div
              style={{ textAlign: "center", color: "red", fontWeight: "bold" }}
            >
              no promotions available
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Promotions;
