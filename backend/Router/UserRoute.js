const Router = require("koa-router");
const UserCtrl = require("../Controller/UserCtrl");
const auth = require("../Middleware/auth");
const authTrader = require("../Middleware/authTrader");

const UserRouter = new Router({ prefix: "/users" });
{
  /*user related routes */
}
UserRouter.post("/", UserCtrl.Register)
  .get("/:id", UserCtrl.GetUser)
  .get("/", auth, authTrader, UserCtrl.GetUsers)
  .put("/", auth, UserCtrl.UpdateUser)
  .delete("/", auth, UserCtrl.DeleteUser)
  .post("/auth/login", UserCtrl.Login)
  .get("/favorites/:id", auth, UserCtrl.GetFavourites)
  .put("/favorites/:id", auth, UserCtrl.AddFavorite)
  .delete("/favorites/:id/:pid", auth, UserCtrl.RemoveFavourite)
  .delete("/carts/:id", auth, UserCtrl.DeleteCart)
  .get("/carts/:id", auth, UserCtrl.GetCarts)
  .put("/carts", auth, UserCtrl.AddCart)
  .put("/carts/:id/:pid", auth, UserCtrl.RemoveElementCart)
  .get("/search/:name", auth, authTrader, UserCtrl.SearchUser)
  .put("/dp", auth, UserCtrl.AddDP)
  .delete("/dp", auth, UserCtrl.DeleteDp);

module.exports = UserRouter;
