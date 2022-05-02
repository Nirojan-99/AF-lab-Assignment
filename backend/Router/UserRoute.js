const Router = require("koa-router");
const UserCtrl = require("../Controller/UserCtrl");
const auth = require("../Middleware/auth");
const authTrader = require("../Middleware/authTrader");

const UserRouter = new Router({ prefix: "/users" });

UserRouter.post("/", UserCtrl.Register)
  .put("/dp", auth, UserCtrl.AddDP)
  .delete("/dp", auth, UserCtrl.DeleteDp)
  .get("/carts/:id", auth, UserCtrl.GetCarts)
  .put("/carts", auth, UserCtrl.AddCart)
  .put("/carts/:id/:pid", auth, UserCtrl.RemoveElementCart)
  .delete("/carts/:id", auth, UserCtrl.DeleteCart)
  .get("/favorites/:id", auth, UserCtrl.GetFavourites)
  .put("/favorites/:id", auth, UserCtrl.AddFavorite)
  .delete("/favorites/:id/:pid", auth, UserCtrl.RemoveFavourite)
  .post("/auth/login",  UserCtrl.Login)
  .get("/:id", UserCtrl.GetUser)
  .get("/search/:name", auth, authTrader, UserCtrl.SearchUser)
  .get("/", auth, UserCtrl.GetUsers)
  .put("/", auth, UserCtrl.UpdateUser)
  .delete("/", auth, UserCtrl.DeleteUser);

module.exports = UserRouter;
