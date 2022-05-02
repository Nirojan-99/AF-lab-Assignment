const Router = require("koa-router");
const authTrader = require("../Middleware/authTrader");
const ProductCtrl = require("../Controller/ProductCtrl");
const auth = require("../Middleware/auth");

const ProductRouter = new Router({ prefix: "/products" });

ProductRouter.get("/", auth, ProductCtrl.GetAllProducts)
  .post("/", auth, authTrader, ProductCtrl.AddProduct)
  .get("/:id", auth, authTrader, ProductCtrl.GetProduct)
  .put("/:id", auth, authTrader, ProductCtrl.UpdateProduct)
  .delete("/:id", auth, authTrader, ProductCtrl.DeleteProduct)
  .get("/search/:name", auth, ProductCtrl.GetSearchProduct)
  .get("/promotions/:id", auth, authTrader, ProductCtrl.GetPromotions)
  .put("/promotions/:id", auth, authTrader, ProductCtrl.AddPromotion)
  .del("/promotions/:id", auth, authTrader, ProductCtrl.DeletePromotions);

module.exports = ProductRouter;
