import classes from "./Products.module.css";
import { BsImage } from "react-icons/bs";
import { useState } from "react";

function Products() {
  const [image, setImage] = useState(
    "https://img.freepik.com/free-psd/cosmetic-product-packaging-mockup_1150-40282.jpg?w=2000"
  );
  return (
    <>
      <div className={classes.container}>
        <div
          style={{
            borderRight: "2px solid #333",
            padding: 0,
            margin: 0,
            height: "100%",
          }}
        >
          {image ? (
            <img src={image} className={classes.image} />
          ) : (
            <>
              <label htmlFor="file" style={{ cursor: "pointer" }}>
                <BsImage className={classes.image} />
              </label>
              <input hidden id="file" type={"file"} />
            </>
          )}
        </div>
        <div style={{ flexGrow: 1, backgroundColor: "#fff" }}>
          <form className={classes.formcontainer} onSubmit={() => {}}>
            <label>Product ID</label>
            <input type={"text"} onChange={() => {}} required />
            <label>Product Name</label>
            <input type={"text"} onChange={() => {}} required />
            <label>Product Price</label>
            <input type={"text"} onChange={() => {}} required />
            <label>Product Category</label>
            <input type={"text"} onChange={() => {}} required />
            <label>Product Description</label>
            <textarea />
            <button type="submit" className={classes.add}>ADD</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Products;
