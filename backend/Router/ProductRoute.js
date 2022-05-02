const Router = require("koa-router");
const authTrader = require("../Middleware/authTrader");
const ProductCtrl = require("../Controller/ProductCtrl");
const auth = require("../Middleware/auth");

const ProductRouter = new Router({ prefix: "/products" });

ProductRouter.get("/", ProductCtrl.GetAllProducts)
  .post("/", ProductCtrl.AddProduct)
  .get("/:id", ProductCtrl.GetProduct)
  .put("/:id", ProductCtrl.UpdateProduct)
  .delete("/:id", ProductCtrl.DeleteProduct)
  .get("/search/:name", ProductCtrl.GetSearchProduct)
  .get("/promotions/:id", auth, authTrader, ProductCtrl.GetPromotions)
  .put("/promotions/:id", auth, authTrader, ProductCtrl.AddPromotion)
  .del("/promotions/:id", auth, authTrader, ProductCtrl.DeletePromotions);

module.exports = ProductRouter;
