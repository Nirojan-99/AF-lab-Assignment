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
            {false ? (
              <img src={img} className={classes.avatar} />
            ) : (
              <FaUserAlt className={classes.user} />
            )}
            <GrGallery className={classes.dpbtn} onClick={() => {}} />
          </div>
        </div>
        {/* body */}
        <form>
          <input />
        </form>
      </div>
    </div>
  );
}

export default Account;
