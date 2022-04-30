class Order {
  constructor(id, userID, total, address, products, payment) {
    this.is = id;
    this.userID = userID;
    this.total = total;
    this.address = address;
    this.products = products;
    this.payment = payment;
    this.status = "";
  }
}

module.exports = Order;
