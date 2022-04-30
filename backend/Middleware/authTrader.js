module.exports = (req, next) => {
  if (req.header.role !== "trader") {
    ctx.body = { auth: "fail" };
    ctx.status = 200;
    return;
  }
  next();
};
