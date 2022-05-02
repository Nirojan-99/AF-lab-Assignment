import classes from "./index.module.css";
import Grid from "../../Util/Grid/Grid";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const SingleProduct = (props) => {
  return (
    <>
      <div className={classes.contain}>
        <div style={{ flexGrow: 1 }} />
        <Grid data={props.data} index={props.index} handler={props.handler} />
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
      .get(`http://localhost:5000/products/111?userID=${userID}`, {
        headers: { Authorization: "valodation " + token },
      })
      .then((res) => {
        if (res.data) {
          setProducts(res.data.data);
        }
      })
      .catch((er) => {});
  }, []);

  //delete handler
  const deleteHandler = (index, id) => {
    axios
      .delete("http://localhost:5000/products/" + id, {
        headers: { Authorization: "valodation " + token },
      })
      .then((res) => {
        setProducts((pre) => {
          const array = [...pre];
          array.splice(index, 1);
          return array;
        });
      })
      .catch((er) => {
        console.log(er);
      });
  };

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
        {products.length > 0 ? (
          products.map((row, index) => {
            return (
              <SingleProduct
                key={index}
                handler={deleteHandler}
                index={index}
                data={row}
              />
            );
          })
        ) : (
          <>
            <div
              style={{ textAlign: "center", color: "red", fontWeight: "700" }}
            >
              No products available
            </div>
          </>
        )}

        <div style={{ paddingBottom: "2rem" }} />
      </div>
    </>
  );
}

export default Products;
