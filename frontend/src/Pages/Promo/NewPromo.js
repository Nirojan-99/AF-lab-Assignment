import classes from "./NewPromo.module.css";

function NewPromo() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.title}>Add New Promotion</div>
        <div className={classes.formContainer}>
          <form>
            <label className={classes.labels}>Promorion Title</label>
            <input className={classes.inputs}/>
            <label className={classes.labels}>Promorion Code</label>
            <input className={classes.inputs}/>
            <label className={classes.labels}>Promorion Description</label>
            <input className={classes.inputs}/>
            <button className={classes.btn}>Save</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewPromo;
