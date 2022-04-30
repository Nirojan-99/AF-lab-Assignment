const Product = require("../Models/ProductModel");
const randomBytes = require("randombytes");
// const userData = require("../Controller/UserCtrl");

const productData = new Map();

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
  if (productData.has(id)) {
    ctx.body = { data: productData.get(id) };
    ctx.status = 200;
  } else {
    ctx.body = { fetched: false };
    ctx.status = 404;
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
