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
//end of dummy data

//exporting product data
exports.productData = productData;

//get all product details
exports.GetAllProducts = (ctx) => {
  if (productData.size > 0) {
    ctx.body = { data: [...productData.values()] };
    ctx.status = 200;
  } else {
    ctx.body = { fetched: false };
    ctx.status = 404;
  }
};

//get one product details
exports.GetProduct = (ctx) => {
  const { id } = ctx.params;
  const { userID } = ctx.query;

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

//update one product details
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

//add one product to Map
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
  if (productData.has(id)) {
    ctx.body = { added: false };
    ctx.status = 404;
  }
  productData.set(id, newProduct);
  ctx.body = { added: true };
  ctx.status = 200;
};

//delete one product from the Map
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

//get all/single promotion data according to creator[trader] id
exports.GetPromotions = (ctx) => {
  const { id } = ctx.params;
  const { single } = ctx.query;

  if (single) {
    if (productData.has(id)) {
      ctx.body = productData.get(id).promotion;
      ctx.status = 200;
      return;
    }
  } else {
    let userProducts = [];
    for (let key of productData.keys()) {
      if (productData.get(key).userID === id) {
        if (productData.get(key).promotion.title) {
          userProducts.push(productData.get(key).promotion);
        }
      }
    }
    ctx.body = { data: userProducts };
    ctx.status = 200;
  }
};

//add promotion to a single product
exports.AddPromotion = (ctx) => {
  const { id } = ctx.params;
  const { title, code, description } = ctx.request.body;
  if (productData.has(id)) {
    productData.get(id).setPromotion(title, code, description);
    ctx.body = { updated: true };
    ctx.status = 200;
  } else {
    ctx.body = { updated: false };
    ctx.status = 404;
  }
};

//delete promotion data of a product
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

//get data of searched value
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

//exporting router
exports.GetPromotion = (ctx) => {};
