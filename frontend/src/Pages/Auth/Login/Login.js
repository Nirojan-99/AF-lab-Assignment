import classes from "./Login.module.css";

function Login() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.title}> LogIn</div>
        <label className={classes.labels}>Email ID</label>
        <input type="text" className={classes.inputs} />
        <label className={classes.labels}>Password</label>
        <input type="password" className={classes.inputs} />
        {false && <div className={classes.error}>login failure</div>}
        <button className={classes.btn}>LogIn</button>
      </div>
    </>
  );
}

export default Login;
