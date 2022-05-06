{
  /*validating each request for authentication */
}
const jwt = require("jsonwebtoken");
const userCtrl = require("../Controller/UserCtrl");

const userData = userCtrl.userData;

module.exports = async (ctx, next) => {
  const authHeader = ctx.header.authorization;

  if (!authHeader) {
    ctx.body = { auth: "fail" };
    ctx.status = 404;
    return;
  }
  const token = authHeader.split(" ")[1];
  if (!token || token === "") {
    ctx.body = { auth: "fail" };
    ctx.status = 404;
    return;
  }
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "aflabassignment");
  } catch (err) {
    ctx.body = { auth: "fail" };
    ctx.status = 404;
    return;
  }
  if (!decodedToken) {
    ctx.body = { auth: "fail" };
    ctx.status = 404;
    return;
  }

  ctx.header.userID = decodedToken.userID;
  userID = decodedToken.userID;

  if (userData.has(userID)) {
    ctx.header.role = userData.get(userID).role;
  } else {
    ctx.body = { auth: "fail" };
    ctx.status = 404;
    return;
  }

  next();
};
