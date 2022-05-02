class Product {
  constructor(id, userID, title, price, description, image, category) {
    this.id = id;
    this.userID = userID;
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
    this.category = category;
    this.promotion = {};
  }
  setPromotion = (title, code, description) => {
    this.promotion.title = title;
    this.promotion.code = code;
    this.promotion.description = description;
  };
  removePromotion = () => {
    this.promotion.title = "";
    this.promotion.code = "";
    this.promotion.description = "";
  };
}

module.exports = Product;
