import SingleCustomer from "../../Util/Customer/SingleCustomer";
import classes from "./index.module.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

function Customers() {
  //data
  const { token, userID } = useSelector((state) => state.loging);
  const [customers, setCustomers] = useState([]);
  const [searchvalue, setSearch] = useState("");

  //useEffect
  useEffect(() => {
    axios
      .get("http://localhost:5000/users", {
        headers: { Authorization: "valodation " + token },
      })
      .then((res) => {
        if (res.data.data) {
          setCustomers(res.data.data);
        }
      })
      .catch((er) => {});
  }, []);

  //search controller
  const search = (event) => {
    event.preventDefault();
    if (searchvalue.trim()) {
      axios
        .get(`http://localhost:5000/users/search/${searchvalue}`, {
          headers: { Authorization: "valodation " + token },
        })
        .then((res) => {
          setCustomers(res.data.data);
          // setSearch("");
        })
        .catch((er) => {});
    } else {
      setSearch("");
    }
  };

  return (
    <>
      <div className={classes.container}>
        <div
          style={{
            padding: "1rem",
            display: "flex",
            width: "90%",
            margin: "auto",
            flexDirection: "column",
          }}
        >
          <div className={classes.search}>
            <input
              value={searchvalue}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            <button onClick={search}>Search</button>
          </div>
          <div>
            {customers.length > 0 ? (
              customers.map((row, index) => {
                return <SingleCustomer data={row} key={index} />;
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Customers;
