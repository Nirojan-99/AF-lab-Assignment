import classes from "./SingleCustomer.module.css";

function SingleCustomer(props) {
  return (
    <>
      <div className={classes.container}>
        <div>
          <img
            src="https://www.looper.com/img/gallery/these-actors-were-almost-cast-as-walter-white-on-breaking-bad/l-intro-1601576773.jpg"
            className={classes.image}
          />
        </div>
        <div className={classes.details}>
          <div  className={classes.name}>{props.data.name}</div>
          <div className={classes.email}>{props.data.email}</div>
          <div className={classes.mobile}>{props.data.mobile}</div>
        </div>
        <div style={{flexGrow:1}}/>
        <div className={classes.address}>{props.data.address}</div>
      </div>
    </>
  );
}

export default SingleCustomer;
