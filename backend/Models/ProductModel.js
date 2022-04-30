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
  setPromotion = (title, discount) => {
    this.promotion.title = title;
    this.promotion.discount = discount;
  };
  removePromotion = () => {
    this.promotion.title = "";
    this.promotion.discount = "";
  };
}

module.exports = Product;
