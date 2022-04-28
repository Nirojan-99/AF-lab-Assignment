import classes from "./Cart.module.css";
import { BiX } from "react-icons/bi";

function CartProduct() {
  return (
    <div className={classes.cartContainer}>
      <img
        className={classes.image}
        src="https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <box className={classes.sidebox}>
        <div style={{ display: "flex" , alignItems:"center" }}>
          <div className={classes.title}>some product</div>
          <BiX className={classes.icon} onClick={() => {}} />
        </div>
        <div className={classes.price}>$299.99</div>
        <div className={classes.description}>
          Video provides a powerful way to help you prove your point. When you
          click Online Video, you can paste in the embed code for the video you
          want to add. You can also type a keyword to search online for the
          video that best fits your document. To make your document look
          professionally produced, Word provides header, footer, cover page, and
          text box designs that complement each other. For example, you can add
          a matching cover page, header, and sidebar. Click Insert and then
          choose the elements you want from the different galleries.
        </div>
        <div style={{ flexGrow: 1 }} />
        <div className={classes.bottom}>
          <button className={classes.positive}>-</button>
          <div>1</div>
          <button className={classes.positive1}>+</button>
        </div>
      </box>
    </div>
  );
}

export default CartProduct;
