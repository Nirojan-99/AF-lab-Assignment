const koa = require("koa");
const bodyParser = require('koa-bodyparser');
const UserRouter = require("./Router/UserRoute");

const app = new koa();

app.use(bodyParser());
// app.use((ctx) => {
//   console.log(ctx.request);
// });
app.use(UserRouter.routes()).use(UserRouter.allowedMethods());

app.listen(5000, function () {});
