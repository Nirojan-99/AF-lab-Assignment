import classes from "./Grid.module.css";

function Grid() {
  return (
    <>
      <div className={classes.productContainer}>
        <img
          className={classes.image}
          src="https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        <div>
          <div className={classes.title}>some product</div>
          <div className={classes.price}>$299.99</div>
          <div className={classes.description}>
            Video provides a powerful way to help you prove your point. When you
            click Online Video, you can paste in the embed code for the video
            you want to add. You can also type a keyword to search online for
            the video that best fits your document. To make your document look
            professionally produced, Word provides header, footer, cover page,
            and text box designs that complement each other. 
          </div>
          <div className={classes.bottom}>
            {false ? (
              <>
                <button className={classes.positive}>Add to Wishlist</button>
                <button className={classes.positive}>Add to Cart</button>
              </>
            ) : (
              <>
                <button className={classes.positive}>Edit</button>
                <button className={classes.negative}>Delete</button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Grid;
