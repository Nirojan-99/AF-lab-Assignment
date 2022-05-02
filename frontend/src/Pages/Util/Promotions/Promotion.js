import classes from "./Promotions.module.css";

function Promotion(props) {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.title}>{props.data.title}</div>
        <div className={classes.code}>{props.data.code}</div>
        <div style={{ flexGrow: 1 }} />
        <div>
          <div style={{ fontWeight: "700" }}>{props.data.description}</div>
        </div>
      </div>
    </>
  );
}

export default Promotion;
