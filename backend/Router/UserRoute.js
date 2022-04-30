const Router = require("koa-router");
const UserCtrl = require("../Controller/UserCtrl");
const auth = require("../Middleware/auth");
const authTrader = require("../Middleware/authTrader");

const UserRouter = new Router({ prefix: "/user" });

UserRouter.post("/", UserCtrl.Register)
  .put("/dp", auth, UserCtrl.AddDP)
  .delete("/dp", auth, UserCtrl.DeleteDp)
  .get("/cart/:id", auth, UserCtrl.GetCarts)
  .put("/cart", auth, UserCtrl.AddCart)
  .del("/cart/:id", auth, UserCtrl.DeleteCart)
  .get("/favorite/:id", auth, UserCtrl.GetFavourites)
  .put("/favorite/:id", auth, UserCtrl.AddFavorite)
  .del("/favorite/:id", auth, UserCtrl.RemoveFavourite)
  .post("/auth/login", UserCtrl.Login)
  .get("/:id", auth, UserCtrl.GetUser)
  // .get("/", auth, authTrader, UserCtrl.GetUsers)
  .get("/", UserCtrl.GetUsers)
  .put("/", auth, UserCtrl.UpdateUser)
  .delete("/", auth, UserCtrl.DeleteUser);

module.exports = UserRouter;
