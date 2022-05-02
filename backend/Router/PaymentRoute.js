const Router = require("koa-router");
const PaymentCtrl = require("../Controller/PaymentCtrl");
const auth = require("../Middleware/auth");

const PaymentRouter = new Router({ prefix: "/payment" });

PaymentRouter.get("/:id", auth, PaymentCtrl.GetPayments)
  .post("/:id", auth, PaymentCtrl.AddPayment)
  .delete("/:id", auth, PaymentCtrl.DeletePayment)
  .post("/:id/:OTP", auth, PaymentCtrl.CheckOTP);

module.exports = PaymentRouter;
