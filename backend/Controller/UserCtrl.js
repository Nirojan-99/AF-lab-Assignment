const User = require("../Models/UserModel");
const randomBytes = require("randombytes");
const jwt = require("jsonwebtoken");

//product data
const productCtrl = require("../Controller/ProductCtrl");
const productData = productCtrl.productData;

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

const seconduser = new User(
  "8d1601d6666579e7ca8530d4fc182906",
  "nirojan",
  "project2020sliit@gmail.com",
  "1234",
  "0712461300",
  "Jaffna , PointPedro",
  "trader"
);
const third = new User(
  "8d1601d6666579e7ca8530d4fc182",
  "nirojan1",
  "sliit@gmail.com",
  "1234",
  "0712461300",
  "Jaffna , PointPedro",
  "trader"
);
const forth = new User(
  "8d1601d6666579e7ca8530d4",
  "nirojan2",
  "it20221928@my.sliit.lk",
  "1234",
  "0712461300",
  "Jaffna , PointPedro",
  "customer"
);
const fifth = new User(
  "8d1601d6666579e7ca853",
  "nirojan3",
  "project2020@gmail.com",
  "1234",
  "0712461300",
  "Jaffna , PointPedro",
  "trader"
);
const sixth = new User(
  "8d1601d6666579e7ca8530d4fc1",
  "nirojan4",
  "project2020sliit@gmai.com",
  "1234",
  "0712461300",
  "Jaffna , PointPedro",
  "customer"
);
const seventh = new User(
  "8d1601d6666579e7ca8530d4fc1829",
  "nirojan5",
  "project2020it@gmail.com",
  "1234",
  "0712461300",
  "Jaffna , PointPedro",
  "customer"
);

userData.set("53c918cb95a0401145c4e4c1e4346eff", user);
userData.set("8d1601d6666579e7ca8530d4fc182", third);
userData.set("8d1601d6666579e7ca8530d4", forth);
userData.set("8d1601d6666579e7ca853", fifth);
userData.set("8d1601d6666579e7ca8530d4fc1", sixth);
userData.set("8d1601d6666579e7ca8530d4fc1829", seventh);
userData.set("8d1601d6666579e7ca8530d4fc182906", seconduser);

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
        return;
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

exports.SearchUser = (ctx) => {
  const { name } = ctx.params;
  let searchResult = [];
  for (let key of userData.keys()) {
    if (userData.get(key).name.includes(name)) {
      searchResult.push(userData.get(key));
    }
  }
  ctx.body = { data: searchResult };
  ctx.status = 200;
};

exports.UpdateUser = (ctx) => {
  if (ctx.request.body.id) {
    const { email, mobile, address, name, role, password, id } =
      ctx.request.body;
    console.log(ctx.request.body);
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
    const carts = userData.get(id).getCart();
    let cartProduct = [];
    for (let key of productData.keys()) {
      for (let i = 0; i < carts.length; i++) {
        if (productData.get(key).id === carts[i]) {
          cartProduct.push(productData.get(key));
        }
      }
    }
    ctx.body = { data: cartProduct };
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

exports.RemoveElementCart = (ctx) => {
  const { id, pid } = ctx.params;
  if (userData.has(id)) {
    userData.get(id).removeItem(pid);
    ctx.body = { removed: true };
    ctx.status = 200;
  } else {
    ctx.body = { removed: false };
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
    const favs = userData.get(id).getFavorites();
    let favProducts = [];
    for (let key of productData.keys()) {
      for (let i = 0; i < favs.length; i++) {
        if (productData.get(key).id === favs[i]) {
          favProducts.push(productData.get(key));
        }
      }
    }
    ctx.body = { data: favProducts };
    ctx.status = 200;
  } else {
    ctx.body = { fetched: false };
    ctx.status = 404;
  }
};

exports.RemoveFavourite = (ctx) => {
  const { id, pid } = ctx.params;

  if (userData.has(id)) {
    const res = userData.get(id).removeFavorite(pid);
    if (res) {
      ctx.body = { remeoved: true };
      ctx.status = 200;
      return;
    } else {
      ctx.body = { remeoved: false };
      ctx.status = 404;
      return;
    }
  } else {
    ctx.body = { remeoved: false };
    ctx.status = 404;
    return;
  }
};

exports.userData = userData;
// [...userData.values()];
