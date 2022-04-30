const Router = require("koa-router");
const UserCtrl = require("../Controller/UserCtrl");

const UserRouter = new Router({ prefix: "/user" });

UserRouter.post("/", UserCtrl.Register)
  .post("/auth/login", UserCtrl.Login)
  .get("/:id", UserCtrl.GetUser)
  .get("/", UserCtrl.GetUsers)
  .put("/", UserCtrl.UpdateUser)
  .delete("/", UserCtrl.DeleteUser);

module.exports = UserRouter;
