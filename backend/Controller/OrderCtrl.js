const Order = require("../Models/OrderModel");
const randomBytes = require("randombytes");

const orderData = new Map();

exports.orderData = orderData;

exports.AddOrder = (ctx) => {
  const id = randomBytes(8).toString("hex");
  const { userID, total, address, products, payment } = ctx.request.body;
  const newOrder = new Order(id, userID, total, address, products, payment);
  orderData.set(id, newOrder);
  ctx.body = { added: true };
  ctx.status = 200;
};

exports.GetOrder = (ctx) => {
  const { id } = ctx.params;
  const orders = [];
  if (orderData.size > 0) {
    for (let key of userData.keys()) {
      let data = orderData.get(key);
      if (data.userID === id) {
        orders.push(data);
      }
    }
    ctx.body = { data: orders };
    ctx.status = 200;
  } else {
    ctx.body = { fetched: false };
    ctx.status = 404;
  }
};
