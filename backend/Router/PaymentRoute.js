const Router = require("koa-router");
const PaymentCtrl = require("../Controller/PaymentCtrl");
const auth = require("../Middleware/auth");

const PaymentRouter = new Router({ prefix: "/payments" });
{
  /*payment related routes */
}
PaymentRouter.get("/:id", auth, PaymentCtrl.GetPayments)
  .post("/:id", auth, PaymentCtrl.AddPayment)
  .delete("/:id", auth, PaymentCtrl.DeletePayment)
  .get("/:id/:OTP", auth, PaymentCtrl.CheckOTP);

module.exports = PaymentRouter;
