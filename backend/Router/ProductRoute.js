const Router = require("koa-router");
const authTrader = require("../Middleware/authTrader");
const ProductCtrl = require("../Controller/ProductCtrl");
const auth = require("../Middleware/auth");

const ProductRouter = new Router({ prefix: "/product" });

ProductRouter.get("/", ProductCtrl.GetAllProducts)
  .get("/search/:name", ProductCtrl.GetSearchProduct)
  .get("/offer/:id", auth, authTrader, ProductCtrl.GetPromotions)
  .put("/offer/:id", auth, authTrader, ProductCtrl.AddPromotion)
  .del("/offer/:id", auth, authTrader, ProductCtrl.DeletePromotions)
  .get("/:id", ProductCtrl.GetProduct)
  .put("/:id", ProductCtrl.UpdateProduct)
  .delete("/:id", ProductCtrl.DeleteProduct) 
  .post("/", ProductCtrl.AddProduct);

module.exports = ProductRouter;
