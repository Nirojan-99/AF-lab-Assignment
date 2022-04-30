const Router = require("koa-router");
const authTrader = require("../Middleware/authTrader");
const ProductCtrl = require("../Controller/ProductCtrl");
const auth = require("../Middleware/auth");

const ProductRouter = new Router({ prefix: "/product" });

ProductRouter.get("/", auth, ProductCtrl.GetAllProducts)
  .get("/search/:name", auth, ProductCtrl.GetSearchProduct)
  .get("/offer/:id", auth, authTrader, ProductCtrl.GetPromotions)
  .put("/offer/:id", auth, authTrader, ProductCtrl.AddPromotion)
  .del("/offer/:id", auth, authTrader, ProductCtrl.DeletePromotions)
  .get("/:id", auth, authTrader, ProductCtrl.GetProduct)
  .put("/:id", auth, authTrader, ProductCtrl.UpdateProduct)
  .delete("/:id", auth, authTrader, ProductCtrl.DeleteProduct)
  .post("/", auth, authTrader, ProductCtrl.AddProduct);

module.exports = ProductRouter;
