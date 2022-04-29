import SingleCustomer from "../../Util/Customer/SingleCustomer";
import classes from "./index.module.css";

function Customers() {
  return (
    <>
      <div className={classes.container}>
        <div
          style={{
            padding: "1rem",
            display: "flex",
            width: "90%",
            margin: "auto",
            flexDirection:"column"
          }}
        >
          <div className={classes.search}>
            <input />
            <button>Search</button>
          </div>
          <div>
            <SingleCustomer />
            <SingleCustomer />
            <SingleCustomer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Customers;
