import classes from "../Dashboard/Dashboard.module.css";
import Grid from "../Util/Grid/Grid";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Favorites() {
  //user data
  const { token, userID } = useSelector((state) => state.loging);
  const [products, setProducts] = useState([]);

  //useEffect
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/favorites/${userID}`, {
        headers: { Authorization: "valodation " + token },
      })
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((er) => {});
  }, []);

  return (
    <div style={{ marginTop: "6rem" }}>
      <div className={classes.productContainer}>
        {products.length > 0 ? (
          products.map((row, index) => {
            return <Grid val={true} data={row} index={index} key={index} />;
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Favorites;
