import classes from "./Login.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../Store/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  //states
  const [email, setEmail] = useState();
  const [password, setPasword] = useState();
  const [error, setError] = useState(false);

  // hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //login handler
  const loginHandler = (event) => {
    event.preventDefault();
    setError(false);
    if (!email.trim() || !email.includes("@") || !email.endsWith(".com")) {
      setError(true);
      return;
    }
    if (!password.trim()) {
      setError(true);
      return;
    }
    const data = { email, password };
    axios
      .post("http://localhost:5000/user/auth/login", data)
      .then((res) => {
        dispatch(
          login({ role: res.data.role, id: res.data.id, token: res.data.token })
        );
        navigate("/", { replace: true });
      })
      .catch((er) => {
        setError(true);
      });
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.title}> LogIn</div>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={loginHandler}
        >
          <label className={classes.labels}>Email ID</label>
          <input
            type="text"
            name="email"
            className={classes.inputs}
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <label className={classes.labels}>Password</label>
          <input
            type="password"
            name="password"
            className={classes.inputs}
            required
            value={password}
            onChange={(event) => {
              setPasword(event.target.value);
            }}
          />
          {error && <div className={classes.error}>Invalid credentials</div>}
          <button className={classes.btn}>LogIn</button>
        </form>
      </div>
    </>
  );
}

export default Login;
