import classes from "./Products.module.css";
import { BsImage } from "react-icons/bs";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Products() {
  //data
  const { token, userID } = useSelector((state) => state.loging);
  const { id } = useParams();

  //hook
  const navigate = useNavigate();

  //inputs
  const [title, setTile] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [pid, setID] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  //useEffect
  useEffect(() => {
    if (id) {
      axios
        .get("http://localhost:5000/products/" + id, {
          headers: { Authorization: "valodation " + token },
        })
        .then((res) => {
          setID(res.data.data.id);
          setTile(res.data.data.title);
          setPrice(res.data.data.price);
          setCategory(res.data.data.category);
          setImage(res.data.data.image);
          setDescription(res.data.data.description);
        })
        .catch((er) => {
          navigate("/", { replace: true });
        });
    }
  }, []);

  //update
  const updateHandler = (event) => {
    event.preventDefault();
    if (
      !title.trim() ||
      !price.trim() ||
      !category.trim() ||
      !description.trim()
    ) {
      return;
    }

    const data = {
      userID,
      title,
      price,
      description,
      image,
      category,
    };

    axios
      .put("http://localhost:5000/products/" + id, data, {
        headers: { Authorization: "valodation " + token },
      })
      .then((res) => {
        if (res.data) {
          navigate("/", { replace: true });
        }
      })
      .catch((er) => {});
  };

  //add product
  const addHandler = (event) => {
    event.preventDefault();
    if (
      !title.trim() ||
      !price.trim() ||
      !category.trim() ||
      !description.trim()
    ) {
      return;
    }
    const data = {
      userID,
      title,
      price,
      description,
      image,
      category,
    };

    axios
      .post("http://localhost:5000/products/", data, {
        headers: { Authorization: "valodation " + token },
      })
      .then((res) => {
        if (res.data) {
          navigate("/", { replace: true });
        }
      })
      .catch((er) => {});
  };

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
            {/* <label>Product ID</label> */}
            {/* <input
              type={"text"}
              value={pid}
              name="id"
              onChange={(event) => {
                setID(event.target.value);
              }}
              required
            /> */}
            <label>Product Name</label>
            <input
              type={"text"}
              value={title}
              name="name"
              onChange={(event) => {
                setTile(event.target.value);
              }}
              required
            />
            <label>Product Price</label>
            <input
              type={"text"}
              value={price}
              name="price"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
              required
            />
            <label>Product Category</label>
            <input
              type={"text"}
              value={category}
              name="category"
              onChange={(event) => {
                setCategory(event.target.value);
              }}
              required
            />
            <label>Product Description</label>
            <textarea
              required
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
            <button
              onClick={id ? updateHandler : addHandler}
              type="submit"
              className={classes.add}
            >
              {id ? "UPDATE" : "ADD"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Products;
