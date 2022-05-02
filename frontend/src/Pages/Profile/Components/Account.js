import classes from "./index.module.css";
import { FaUserAlt } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Account() {
  //user data
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [userObj, setUserObj] = useState();

  //credentials
  const { token, userID } = useSelector((state) => state.loging);

  //called on render
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${userID}`, {
        headers: { Authorization: "valodation " + token },
      })
      .then((res) => {
        const data = res.data.data;
        setUserObj(data);
        setAddress(data.address);
        setEmail(data.email);
        setName(data.name);
        setMobile(data.mobile);
      })
      .catch((er) => {});
  }, []);

  //update details
  const updateData = (event) => {
    event.preventDefault();
    const data = { ...userObj, name, email, address, mobile };
    axios
      .put(`http://localhost:5000/users`, data, {
        headers: { Authorization: "valodation " + token },
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((er) => {});
  };

  //update password
  const updatePassword = (event) => {
    event.preventDefault();
    //check user input
    if (!oldPassword.trim() || !newPassword.trim() || !retypePassword.trim()) {
      return;
    }
    if (newPassword !== retypePassword) {
      return;
    }
    if (userObj.password !== oldPassword) {
      return;
    }
    const data = { ...userObj, password: newPassword };

    axios
      .put(`http://localhost:5000/users`, data, {
        headers: { Authorization: "valodation " + token },
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((er) => {});
  };

  return (
    <div className={classes.container}>
      <div style={{ padding: "1rem" }}>
        <div className={classes.dp}>
          <div className={classes.imagDiv}>
            {img ? (
              <img src={img} className={classes.avatar} />
            ) : (
              <FaUserAlt className={classes.user} />
            )}
            <GrGallery className={classes.dpbtn} onClick={() => {}} />
          </div>
        </div>
        {/* body */}
        <form className={classes.form}>
          <label>User Name</label>
          <input
            required
            type={"text"}
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <label>User Email</label>
          <input
            required
            type={"text"}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <label>Mobile Number</label>
          <input
            required
            type={"text"}
            value={mobile}
            onChange={(event) => {
              setMobile(event.target.value);
            }}
          />
          <label>User Address</label>
          <input
            required
            type={"text"}
            value={address}
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
          <button className={classes.btn} onClick={updateData}>
            Save Changes
          </button>
        </form>
        <form className={classes.form}>
          <label>Old Password</label>
          <input
            required
            type={"password"}
            value={oldPassword}
            onChange={(event) => {
              setOldPassword(event.target.value);
            }}
          />
          <label>New Password</label>
          <input
            required
            type={"password"}
            value={newPassword}
            onChange={(event) => {
              setnewPassword(event.target.value);
            }}
          />
          <label>Re-type Password</label>
          <input
            required
            type={"password"}
            value={retypePassword}
            onChange={(event) => {
              setRetypePassword(event.target.value);
            }}
          />
          <button className={classes.btn} onClick={updatePassword}>
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default Account;
