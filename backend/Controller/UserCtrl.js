const User = require("../Models/UserModel");
const randomBytes = require("randombytes");
const jwt = require("jsonwebtoken");

const userData = new Map();

const user = new User(
  "53c918cb95a0401145c4e4c1e4346eff",
  "niro",
  "email@",
  "1234",
  "1233",
  "alvai",
  "client"
);

userData.set("53c918cb95a0401145c4e4c1e4346eff", user);

exports.Register = (ctx) => {

  if (ctx.request.body) {
    const { email, mobile, address, name, role, password } = ctx.request.body;
    const id = randomBytes(16).toString("hex");
    const newUser = new User(id, name, email, password, mobile, address, role);
    userData.set(id, newUser);

    //set token
    const token = jwt.sign({ userID: id, email: email }, "aflabassignment", {
      expiresIn: "3h",
    });
    ctx.set("Content-Type", "Application/json");
    ctx.body = { token, role, id };
    ctx.status = 201;
  }
};

exports.Login = (ctx) => {
  if (ctx.request.body) {
    const { email, password } = ctx.request.body;
    let singleUser;
    for (let key of userData.keys()) {
      singleUser = userData.get(key);
      if (singleUser.email === email && singleUser.password === password) {
        const token = jwt.sign(
          { userID: singleUser.id, email: singleUser.email },
          "aflabassignment",
          {
            expiresIn: "3h",
          }
        );

        ctx.body = { token, role: singleUser.role, id: singleUser.id };
        ctx.status = 201;
      } else {
        ctx.body = { auth: false };
        ctx.status = 404;
      }
    }
  }
};

exports.GetUser = (ctx) => {
  if (ctx.params.id) {
    const id = ctx.params.id;
    if (userData.has(id)) {
      ctx.body = { data: userData.get(id) };
      ctx.status = 200;
    } else {
      ctx.body = { found: false };
      ctx.status = 404;
    }
  } else {
    ctx.body = { found: false };
    ctx.status = 404;
  }
};

exports.GetUsers = (ctx) => {
  if (userData.size > 0) {
    ctx.body = { data: [...userData.values()] };
    ctx.status = 200;
  } else {
    ctx.body = { found: false };
    ctx.status = 404;
  }
};

exports.UpdateUser = (ctx) => {
  if (ctx.request.body.id) {
    const { email, mobile, address, name, role, password, id } =
      ctx.request.body;
    const newUser = new User(id, name, email, password, mobile, address, role);
    userData.set(newUser.id, newUser);
    ctx.body = { updated: true };
    ctx.status = 200;
  } else {
    ctx.body = { updated: false };
    ctx.status = 404;
  }
};

exports.DeleteUser = (ctx) => {
  const { id } = ctx.request.body;
  if (userData.has(id)) {
    userData.delete(id);
    ctx.body = { deleted: true };
    ctx.status = 200;
  } else {
    ctx.body = { deleted: false };
    ctx.status = 404;
  }
};

exports.AddDP = (ctx) => {};
exports.DeleteDp = (ctx) => {};

exports.AddCart = (ctx) => {
  const { id, cart } = ctx.request.body;
  if (userData.has(id)) {
    userData.get(id).setCart(cart);
    ctx.body = { added: true };
    ctx.status = 200;
  } else {
    ctx.body = { added: false };
    ctx.status = 404;
  }
};

exports.GetCarts = (ctx) => {
  const { id } = ctx.params;
  if (userData.has(id)) {
    ctx.body = userData.get(id).getCart();
    ctx.status = 200;
  } else {
    ctx.body = { fetched: false };
    ctx.status = 404;
  }
};

exports.DeleteCart = (ctx) => {
  const { id } = ctx.params;
  if (userData.has(id)) {
    userData.get(id).deleteCart();
    ctx.body = { deleted: true };
    ctx.status = 200;
  } else {
    ctx.body = { deleted: false };
    ctx.status = 404;
  }
};

exports.AddFavorite = (ctx) => {
  const { id } = ctx.params;
  const { data } = ctx.request.body;
  if (userData.has(id)) {
    userData.get(id).setFavorites(data);
    ctx.body = { added: true };
    ctx.status = 200;
  } else {
    ctx.body = { added: false };
    ctx.status = 404;
  }
};

exports.GetFavourites = (ctx) => {
  const { id } = ctx.params;
  if (userData.has(id)) {
    ctx.body = userData.get(id).getFavorites();
    ctx.status = 200;
  } else {
    ctx.body = { fetched: false };
    ctx.status = 404;
  }
};

exports.RemoveFavourite = (ctx) => {
  const { id } = ctx.params;
  const { data } = ctx.request.body;
  if (userData.has(id)) {
    const res = userData.get(id).removeFavorite(data);
    if (res) {
      ctx.body = { remeoved: true };
      ctx.status = 200;
    } else {
      ctx.body = { remeoved: false };
      ctx.status = 404;
    }
  } else {
    ctx.body = { remeoved: false };
    ctx.status = 404;
  }
};

exports.userData = userData;
// [...userData.values()];
