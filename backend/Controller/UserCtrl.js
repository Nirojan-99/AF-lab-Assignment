const User = require("../Models/UserModel");
const randomBytes = require("randombytes");

const userData = new Map();

exports.Register = (ctrx) => {
  if (ctrx.request.body) {
    const { email, mobile, address, name, role, password } = ctrx.request.body;
    const id = randomBytes(16).toString("hex");
    const newUser = new User(id, name, email, password, mobile, address, role);
    userData.set(id, newUser);
  }
};
