const Router = require("koa-router");
const authTrader = require("../Middleware/authTrader");
const orderCtrl = require("../Controller/OrderCtrl");
const auth = require("../Middleware/auth");

const orderRouter = new Router({ prefix: "/order" });

orderRouter
  .get("/", auth, orderCtrl.GetOrder)
  .get("/:id", auth, orderCtrl.GetOrders)
  .post("/", auth, orderCtrl.AddOrder)
  .put("/", auth, orderCtrl.UpdateOrder);

module.exports = orderRouter;
