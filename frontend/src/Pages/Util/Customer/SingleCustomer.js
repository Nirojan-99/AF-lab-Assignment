import classes from "./SingleCustomer.module.css";

function SingleCustomer() {
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
          <div  className={classes.name}>User Name</div>
          <div className={classes.email}>Email@gmail.com</div>
          <div className={classes.mobile}>0778862173</div>
        </div>
        <div style={{flexGrow:1}}/>
        <div className={classes.address}>jaffna,alvai</div>
      </div>
    </>
  );
}

export default SingleCustomer;
