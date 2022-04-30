import Grid from "../Util/Grid/Grid";
import classes from "./Dashboard.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function Dashboard() {
  //data
  const { token, userID } = useSelector((state) => state.loging);
  const [products, setProducts] = useState([]);
  const [searchvalue, setSearch] = useState("");

  //useEffect
  useEffect(() => {
    axios
      .get(`http://localhost:5000/product`, {
        headers: { Authorization: "valodation " + token },
      })
      .then((res) => {
        if (res.data.data) {
          setProducts(res.data.data);
        }
      })
      .catch((er) => {});
  }, []);

  //search controller
  const search = () => {
    if (searchvalue) {
      axios
        .get(`http://localhost:5000/product/search/${searchvalue}`, {
          headers: { Authorization: "valodation " + token },
        })
        .then((res) => {
          setProducts(res.data.data);
        })
        .catch((er) => {});
    } else {
      window.location.reload();
    }
  };

  return (
    <>
      <div className={classes.header}>
        <div style={{ flexGrow: 1 }} />
        <form className={classes.formContainer} onSubmit={search}>
          <input
            placeholder="Search..."
            type={"string"}
            onKeyDown={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            value={searchvalue}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className={classes.productContainer}>
        {products.length > 0 &&
          products.map((row) => {
            return <Grid />;
          })}
      </div>
    </>
  );
}

export default Dashboard;
