import Grid from "../Util/Grid/Grid";
import classes from "./Dashboard.module.css";

function Dashboard() {
  return (
    <>
      <div className={classes.header}>
        <div style={{ flexGrow: 1 }} />
        <form className={classes.formContainer}>
          <input placeholder="Search..." type={"string"} />
          <button>Search</button>
        </form>
      </div>
      <div className={classes.productContainer}>
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
      </div>
    </>
  );
}

export default Dashboard;
