import classes from "./index.module.css";
import Grid from "../../Util/Grid/Grid";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
        <SingleProduct />
        <SingleProduct />
        <div style={{paddingBottom:"2rem"}}/>
      </div>
    </>
  );
}

export default Products;
