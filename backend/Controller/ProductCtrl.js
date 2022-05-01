const Product = require("../Models/ProductModel");
const randomBytes = require("randombytes");
// const userData = require("../Controller/UserCtrl");

const productData = new Map();

//dummy data
const newProduct1 = new Product(
  "12345",
  "8d1601d6666579e7ca8530d4fc182906",
  "computer1",
  "123.99",
  "its a good product",
  "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "computer"
);

productData.set(newProduct1.id, newProduct1);

const newProduct2 = new Product(
  "1234567",
  "8d1601d6666579e7ca8530d4fc182906",
  "computer2",
  "123.99",
  "its a good product",
  "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "computer"
);

productData.set(newProduct2.id, newProduct2);
const newProduct3 = new Product(
  "12345678",
  "8d1601d6666579e7ca8530d4fc182906",
  "computer3",
  "123.99",
  "its a good product",
  "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "computer"
);

productData.set(newProduct3.id, newProduct3);
const newProduct4 = new Product(
  "12345679",
  "d1601d6666579e7ca8530d4fc182906",
  "computer4",
  "123.99",
  "its a good product",
  "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "computer"
);

productData.set(newProduct4.id, newProduct4);
const newProduct5 = new Product(
  "123456790",
  "8d1601d6666579e7ca8530d4fc182906",
  "computer5",
  "123.99",
  "its a good product",
  "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "computer"
);

productData.set(newProduct5.id, newProduct5);

exports.productData = productData;

exports.GetAllProducts = (ctx) => {
  if (productData.size > 0) {
    ctx.body = { data: [...productData.values()] };
    ctx.status = 200;
  } else {
    ctx.body = { fetched: false };
    ctx.status = 404;
  }
};

exports.GetProduct = (ctx) => {
  const { id } = ctx.params;
  const { userID } = ctx.query;
  console.log(userID)
  let userProducts = [];
  if (userID) {
    for (let key of productData.keys()) {
      if (productData.get(key).userID === userID) {
        userProducts.push(productData.get(key));
      }
    }
    ctx.body = { data: userProducts };
    ctx.status = 200;
  } else {
    if (productData.has(id)) {
      ctx.body = { data: productData.get(id) };
      ctx.status = 200;
    } else {
      ctx.body = { fetched: false };
      ctx.status = 404;
    }
  }
};

exports.UpdateProduct = (ctx) => {
  const { id } = ctx.params;
  const { userID, title, price, description, image, category } =
    ctx.request.body;
  if (productData.has(id)) {
    const newProduct = new Product(
      id,
      userID,
      title,
      price,
      description,
      image,
      category
    );
    productData.set(id, newProduct);
    ctx.body = { updated: true };
    ctx.status = 200;
  } else {
    ctx.body = { updated: false };
    ctx.status = 404;
  }
};

exports.AddProduct = (ctx) => {
  const id = randomBytes(8).toString("hex");
  const { userID, title, price, description, image, category } =
    ctx.request.body;
  const newProduct = new Product(
    id,
    userID,
    title,
    price,
    description,
    image,
    category
  );
  productData.set(id, newProduct);
  ctx.body = { added: true };
  ctx.status = 200;
};

exports.DeleteProduct = (ctx) => {
  const { id } = ctx.params;
  if (productData.has(id)) {
    productData.delete(id);
    ctx.body = { deleted: true };
    ctx.status = 200;
  } else {
    ctx.body = { deleted: false };
    ctx.status = 404;
  }
};

exports.GetPromotions = (ctx) => {
  const { id } = ctx.params;
  let userProducts = [];
  for (let key of productData.keys()) {
    if (productData.get(key).userID === userID) {
      userProducts.push(productData.get(key).promotion);
    }
  }
  ctx.body = { data: userProducts };
  ctx.status = 200;
};

exports.AddPromotion = (ctx) => {
  const { id } = ctx.params;
  const { title, discount } = ctx.request.body;

  if (productData.has(id)) {
    productData.get(id).setPromotion(title, discount);
    ctx.body = { updated: true };
    ctx.status = 200;
  } else {
    ctx.body = { updated: false };
    ctx.status = 404;
  }
};

exports.DeletePromotions = (ctx) => {
  const { id } = ctx.params;
  if (productData.has(id)) {
    productData.get(id).removePromotion();
    ctx.body = { deleted: true };
    ctx.status = 200;
  } else {
    ctx.body = { deleted: false };
    ctx.status = 404;
  }
};

exports.GetSearchProduct = (ctx) => {
  const { name } = ctx.params;
  let data = [];
  for (let key of productData.keys()) {
    if (productData.get(key).title.includes(name)) {
      data.push(productData.get(key));
    }
  }
  ctx.body = { data: data };
  ctx.status = 200;
};

exports.GetPromotion = (ctx) => {};
