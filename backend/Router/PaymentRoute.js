const Router = require("koa-router");
const PaymentCtrl = require("../Controller/PaymentCtrl");
const auth = require("../Middleware/auth");

const PaymentRouter = new Router({ prefix: "/order" });

PaymentRouter.get("/:id", auth, PaymentCtrl.GetPayments).post(
  "/:id",
  auth,
  PaymentCtrl.AddPayment
);

module.exports = PaymentRouter;
