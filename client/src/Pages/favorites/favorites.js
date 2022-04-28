import classes from "../Dashboard/Dashboard.module.css";
import Grid from "../Util/Grid";

function Favorites() {
  return (
    <div style={{ marginTop: "6rem" }}>
      <div className={classes.productContainer}>
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
      </div>
    </div>
  );
}

export default Favorites;
