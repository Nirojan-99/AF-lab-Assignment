import classes from "./index.module.css";
import Grid from "../../Util/Grid/Grid";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const SingleProduct = () => {
  return (
    <>
      <div className={classes.contain}>
        <div style={{ flexGrow: 1 }} />
        <Grid />
        <div style={{ flexGrow: 1 }} />
      </div>
    </>
  );
};

function Products() {
  //hooks
  const navigate = useNavigate();

  //state
  const [products, setProducts] = useState([]);
  const { token, userID } = useSelector((state) => state.loging);

  //useEffect call
  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/123?userID=${userID}`, {
        headers: { Authorization: "valodation " + token },
      })
      .then((res) => {
        if (res.data) {
          setProducts(res.data);
        }
      })
      .catch((er) => {});
  }, []);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.addnew}>
          <div style={{ flexGrow: 1 }} />
          <button
            onClick={() => {
              navigate("/product/new");
            }}
            className={classes.newBtn}
          >
            Add Product
          </button>
        </div>
        {products.length >0 &&
          products.map((row) => {
            return <SingleProduct />;
          })}

        <div style={{ paddingBottom: "2rem" }} />
      </div>
    </>
  );
}

export default Products;
