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
  const [favorites, setFavorites] = useState([]);

  //useEffect
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products`, {
        headers: { Authorization: "valodation " + token },
      })
      .then((res) => {
        if (res.data.data) {
          setProducts(res.data.data);
        }
      })
      .catch((er) => {});

    //get fav products
    axios
      .get(`http://localhost:5000/users/favorites/${userID}?favId=${true}`, {
        headers: { Authorization: "Agriuservalidation " + token },
      })
      .then((res) => {
        if (res.data) {
          setFavorites(res.data);
        }
      })
      .catch(() => {});
  }, []);

  //search controller
  const search = (event) => {
    event.preventDefault();
    if (searchvalue) {
      axios
        .get(`http://localhost:5000/products/search/${searchvalue.trim()}`, {
          headers: { Authorization: "valodation " + token },
        })
        .then((res) => {
          console.log(res.data.data);
          setProducts(res.data.data);
        })
        .catch((er) => {});
    } else {
      window.location.reload();
    }
  };

  //find fav products
  const findfav = (array, id) => {
    let val = false;
    array.forEach((data) => {
      if (data === id) {
        val = true;
      }
    });
    return val;
  };

  //delete handler
  const deleteHandler = (index, id) => {
    axios
      .delete("http://localhost:5000/products/" + id, {
        headers: { Authorization: "valodation " + token },
      })
      .then((res) => {
        setProducts((pre) => {
          const array = [...pre];
          array.splice(index, 1);
          return array;
        });
      })
      .catch((er) => {
        console.log(er);
      });
  };

  return (
    <>
      <div className={classes.header}>
        <div style={{ flexGrow: 1 }} />
        <form className={classes.formContainer}>
          <input
            placeholder="Search..."
            type={"string"}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            value={searchvalue}
          />
          <button onClick={search} type="submit">
            Search
          </button>
        </form>
      </div>
      <div className={classes.productContainer}>
        {products.length > 0 ? (
          products.map((row, index) => {
            const val = findfav(favorites, row.id);
            return (
              <Grid
                val={val}
                key={index}
                index={index}
                handler={deleteHandler}
                data={row}
              />
            );
          })
        ) : (
          <>
            <div
              style={{ textAlign: "center", color: "red", fontWeight: "700" }}
            >
              No products available
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Dashboard;
