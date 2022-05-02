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
  .put("/cart/:id/:pid", auth, UserCtrl.RemoveElementCart)
  .delete("/cart/:id", auth, UserCtrl.DeleteCart)
  .get("/favorite/:id", auth, UserCtrl.GetFavourites)
  .put("/favorite/:id", auth, UserCtrl.AddFavorite)
  .delete("/favorite/:id/:pid", auth, UserCtrl.RemoveFavourite)
  .post("/auth/login",  UserCtrl.Login)
  .get("/:id", UserCtrl.GetUser)
  .get("/search/:name", auth, authTrader, UserCtrl.SearchUser)
  .get("/", auth, UserCtrl.GetUsers)
  .put("/", auth, UserCtrl.UpdateUser)
  .delete("/", auth, UserCtrl.DeleteUser);

module.exports = UserRouter;
