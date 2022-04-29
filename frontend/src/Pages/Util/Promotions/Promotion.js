import classes from "./Promotions.module.css";

function Promotion() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.title}>70% off</div>
        <div className={classes.code}>OFF70</div>
        <div style={{ flexGrow: 1 }} />
        <div>
          <button className={classes.remove}>Remove</button>
        </div>
      </div>
    </>
  );
}

export default Promotion;
