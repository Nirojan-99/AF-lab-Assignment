import classes from "./Register.module.css";

function Register() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.title}>Register</div>
        <label className={classes.labels}>User Name</label>
        <input type="text" className={classes.inputs} />
        <label className={classes.labels}>Email ID</label>
        <input type="text" className={classes.inputs} />
        <label className={classes.labels}>Address</label>
        <input type="text" className={classes.inputs} />
        <label className={classes.labels}>Mobile Number</label>
        <input type="text" className={classes.inputs} />
        <label className={classes.labels}>Password</label>
        <input type="password" className={classes.inputs} />
        {false && <div className={classes.error}>login failure</div>}
        <div className={classes.radiogrp}>
          <input type="radio" id="trader" value="trader" name="role" />
          <label htmlFor="trader">Trader</label>
          <input id="cus" value="customer" type="radio" name="role" />
          <label htmlFor="cus">Customer</label>
        </div>
        <button className={classes.btn}>Register</button>
      </div>
    </>
  );
}

export default Register;
