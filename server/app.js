var koa = require("koa");
var app = new koa();

app.use((ctx,next)=> {
  console.log(ctx);
});

app.listen(5000, function () {});
