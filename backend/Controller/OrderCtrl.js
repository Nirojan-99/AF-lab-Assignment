const Order = require("../Models/OrderModel");
const randomBytes = require("randombytes");

const orderData = new Map();

exports.orderData = orderData;

exports.AddOrder = (ctx) => {
  const id = randomBytes(8).toString("hex");
  const rawDate = new Date();
  const date =
    rawDate.getDate() +
    "/" +
    (rawDate.getMonth() + 1) +
    "/" +
    rawDate.getFullYear();
  const { userID, total, address, products, payment } = ctx.request.body;
  const newOrder = new Order(
    id,
    userID,
    total,
    address,
    products,
    payment,
    date
  );
  orderData.set(id, newOrder);
  ctx.body = { added: true, id: id };
  ctx.status = 200;
};

exports.UpdateOrder = (ctx) => {
  const { id } = ctx.params;
  const { address, payment } = ctx.request.body;
  if (orderData.has(id)) {
    const data = orderData.get(id);
    data.setPayment(payment);
    data.setAddress(address);
    ctx.body = { updated: true };
    ctx.status = 200;
  } else {
    ctx.body = { updated: false };
    ctx.status = 404;
  }
};

exports.GetOrders = (ctx) => {
  const { id } = ctx.params;
  const orders = [];
  if (orderData.size > 0) {
    for (let key of orderData.keys()) {
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

exports.GetOrder = (ctx) => {
  const { id } = ctx.query;
  if (orderData.has(id)) {
    ctx.body = orderData.get(id);
    ctx.status = 200;
  } else {
    ctx.body = { fetched: false };
    ctx.status = 404;
  }
};
