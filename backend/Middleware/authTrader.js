module.exports = (req, res, next) => {
  if (req.header.role !== "trader") {
    ctx.body = { auth: "fail" };
    ctx.status = 404;
    return;
  }
  next();
};
