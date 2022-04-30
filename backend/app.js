const koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");

const UserRouter = require("./Router/UserRoute");
const ProductRouter = require("./Router/ProductRoute");
const OrderRouter = require("./Router/OrderRoute");
const PaymentRouter = require("./Router/PaymentRoute");

const app = new koa();

app.use(
  bodyParser({
    formidable: { uploadDir: "./uploads" },
    multipart: true,
    urlencoded: true,
  })
);

app.use(cors());

app.use(PaymentRouter.routes()).use(PaymentRouter.allowedMethods());
app.use(OrderRouter.routes()).use(OrderRouter.allowedMethods());
app.use(ProductRouter.routes()).use(ProductRouter.allowedMethods());
app.use(UserRouter.routes()).use(UserRouter.allowedMethods());

app.listen(5000, function () {
  // console.log("server running on port 5000");
});
