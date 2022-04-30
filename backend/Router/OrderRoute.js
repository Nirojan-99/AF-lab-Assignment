const Router = require("koa-router");
const authTrader = require("../Middleware/authTrader");
const orderCtrl = require("../Controller/OrderCtrl");
const auth = require("../Middleware/auth");

const orderRouter = new Router({ prefix: "/order" });

orderRouter
  .get("/:id", auth, orderCtrl.GetOrder)
  .post("/", auth, orderCtrl.AddOrder);

module.exports = orderRouter;
