const Router = require("koa-router");
const authTrader = require("../Middleware/authTrader");
const ProductCtrl = require("../Controller/ProductCtrl");
const auth = require("../Middleware/auth");

const ProductRouter = new Router({ prefix: "/product" });

ProductRouter.get("/", auth, ProductCtrl.GetAllProducts)
  .get("/:id", auth, ProductCtrl.GetProduct)
  .put("/:id", auth, authTrader, ProductCtrl.UpdateProduct)
  .delete("/:id", auth, authTrader, ProductCtrl.DeleteProduct)
  .post("/", auth, authTrader, ProductCtrl.AddProduct);

module.exports = ProductRouter;
