const koa = require("koa");
const bodyParser = require("koa-bodyparser");
const UserRouter = require("./Router/UserRoute");
const ProductRouter = require("./Router/ProductRoute");

const app = new koa();

app.use(
  bodyParser({
    formidable: { uploadDir: "./uploads" },
    multipart: true,
    urlencoded: true,
  })
);

app.use(ProductRouter.routes()).use(UserRouter.allowedMethods());
app.use(UserRouter.routes()).use(UserRouter.allowedMethods());

app.listen(5000, function () {});
