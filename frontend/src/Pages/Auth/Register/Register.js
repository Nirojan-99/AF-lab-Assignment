import classes from "./Register.module.css";
import axios from "axios";
import {  useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../Store/auth";
import { useNavigate } from "react-router-dom";

function Register() {
  //states
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userName, setUserName] = useState();
  const [address, setAddress] = useState();
  const [mobile, setMobile] = useState();
  const [role, setRole] = useState();
  const [error, setError] = useState(false);

  //hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //submit handler
  const submitHandler = (event) => {
    event.preventDefault();
    if (!email.trim() || !email.includes("@") || !email.endsWith(".com")) {
      return;
    }
    if (
      !password.trim() ||
      !userName.trim() ||
      !address.trim() ||
      !mobile.trim() ||
      mobile.length != 10 ||
      !role
    ) {
      return;
    }

    const data = { email, mobile, address, name: userName, role, password };

    axios
      .post("http://localhost:5000/users", data)
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
        <div className={classes.title}>Register</div>
        <form
          onSubmit={submitHandler}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label className={classes.labels}>User Name</label>
          <input
            type="text"
            className={classes.inputs}
            required
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
          <label className={classes.labels}>Email ID</label>
          <input
            type="text"
            className={classes.inputs}
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <label className={classes.labels}>Address</label>
          <input
            type="text"
            className={classes.inputs}
            required
            value={address}
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
          <label className={classes.labels}>Mobile Number</label>
          <input
            type="text"
            className={classes.inputs}
            required
            value={mobile}
            onChange={(event) => {
              setMobile(event.target.value);
            }}
          />
          <label className={classes.labels}>Password</label>
          <input
            type="password"
            className={classes.inputs}
            required
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          {false && <div className={classes.error}>login failure</div>}
          <div className={classes.radiogrp}>
            <input
              type="radio"
              id="trader"
              value="trader"
              name="role"
              required
              checked={role === "trader"}
              onChange={(event) => {
                setRole(event.target.value);
              }}
            />
            <label htmlFor="trader">Trader</label>
            <input
              id="cus"
              value="customer"
              type="radio"
              name="role"
              required
              checked={role === "customer"}
              onChange={(event) => {
                setRole(event.target.value);
              }}
            />
            <label htmlFor="cus">Customer</label>
          </div>
          <button type="submit" className={classes.btn}>
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
