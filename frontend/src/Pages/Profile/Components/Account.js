import classes from "./index.module.css";
import { FaUserAlt } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { useState } from "react";

function Account() {
  const [img, setImg] = useState(
    "https://www.looper.com/img/gallery/these-actors-were-almost-cast-as-walter-white-on-breaking-bad/l-intro-1601576773.jpg"
  );
  return (
    <div className={classes.container}>
      <div style={{ padding: "1rem" }}>
        <div className={classes.dp}>
          <div className={classes.imagDiv}>
            {true ? (
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
          <input />
          <label>User Email</label>
          <input />
          <label>Mobile Number</label>
          <input />
          <label>User Address</label>
          <input />
          <button className={classes.btn}>Save Changes</button>
        </form>
        <form className={classes.form}>
          <label>Old Password</label>
          <input />
          <label>New Password</label>
          <input />
          <label>Re-type Password</label>
          <input />
          <button className={classes.btn}>Change Password</button>
        </form>
      </div>
    </div>
  );
}

export default Account;
