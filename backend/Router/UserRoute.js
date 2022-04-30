const Router = require("koa-router");
const UserCtrl = require("../Controller/UserCtrl");

const UserRouter = new Router({ prefix: "/user" });

UserRouter.post("/", UserCtrl.Register)
  .put("/dp", UserCtrl.AddDP)
  .delete("/dp", UserCtrl.DeleteDp)
  .get("/cart/:id", UserCtrl.GetCarts)
  .put("/cart", UserCtrl.AddCart)
  .del("/cart/:id", UserCtrl.DeleteCart)
  .get("/favorite/:id", UserCtrl.GetFavourites)
  .put("/favorite/:id", UserCtrl.AddFavorite)
  .del("/favorite/:id", UserCtrl.RemoveFavourite)
  .post("/auth/login", UserCtrl.Login)
  .get("/:id", UserCtrl.GetUser)
  .get("/", UserCtrl.GetUsers)
  .put("/", UserCtrl.UpdateUser)
  .delete("/", UserCtrl.DeleteUser);

module.exports = UserRouter;
