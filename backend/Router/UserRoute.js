const Router = require("koa-router")
const UserCtrl = require("../Controller/UserCtrl");

const UserRouter = new Router({ prefix: "/user" });

UserRouter.put("/",UserCtrl.Register);

module.exports = UserRouter;
