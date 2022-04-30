const Router = require("koa-router");
const ProductCtrl = require("../Controller/ProductCtrl");
const auth = require("../Middleware/auth");

const ProductRouter = new Router({ prefix: "/product" });

ProductRouter.get("/", auth, ProductCtrl.GetAllProducts);

module.exports = ProductRouter;
