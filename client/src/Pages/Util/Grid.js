import classes from "./Grid.module.css";

function Grid() {
  return (
    <>
      <div className={classes.productContainer}>
        <img
          className={classes.image}
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
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
            and text box designs that complement each other. For example, you
            can add a matching cover page, header, and sidebar. Click Insert and
            then choose the elements you want from the different galleries.
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
