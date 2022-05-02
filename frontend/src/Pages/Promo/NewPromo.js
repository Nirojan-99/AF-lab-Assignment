import classes from "./NewPromo.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function NewPromo() {
  //input data
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescriptin] = useState("");

  //user data
  const { token, userID } = useSelector((state) => state.loging);
  const { id } = useParams();

  //hook
  const navigate = useNavigate();

  //useEffect
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/promotions/${id}?single=${true}`, {
        headers: { Authorization: "valodation " + token },
      })
      .then((res) => {
        if (res.data) {
          setTitle(res.data.title);
          setCode(res.data.code);
          setDescriptin(res.data.description);
        }
      })
      .catch((er) => {});
  }, []);

  //submit handler
  const submit = (event) => {
    event.preventDefault();
    if (!title.trim() || !code.trim() || !description.trim()) {
      return;
    }

    axios
      .put(
        `http://localhost:5000/products/promotions/${id}`,
        {
          title,
          code,
          description,
        },
        {
          headers: { Authorization: "valodation " + token },
        }
      )
      .then((res) => {
        navigate("/product/edit/" + id);
      })
      .catch((er) => {});
  };

  //delete promotion
  const deletepromo = (event) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:5000/products/promotions/${id}`, {
        headers: { Authorization: "valodation " + token },
      })
      .then((res) => {
        navigate("/product/edit/" + id, { replace: true });
      })
      .catch((er) => {});
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.title}>Add New Promotion</div>
        <div className={classes.formContainer}>
          <form>
            <label className={classes.labels}>Promorion Title</label>
            <input
              className={classes.inputs}
              required
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <label className={classes.labels}>Promorion Code</label>
            <input
              className={classes.inputs}
              required
              value={code}
              onChange={(event) => {
                setCode(event.target.value);
              }}
            />
            <label className={classes.labels}>Promorion Description</label>
            <input
              className={classes.inputs}
              required
              value={description}
              onChange={(event) => {
                setDescriptin(event.target.value);
              }}
            />
            <button onClick={submit} className={classes.btn}>
              Save
            </button>
            {id && (
              <button className={classes.delete} onClick={deletepromo}>
                Delete promotion
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default NewPromo;
