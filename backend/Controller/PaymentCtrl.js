const Payment = require("../Models/PaymentModel");
const randomBytes = require("randombytes");
//Map of payment data
const paymentData = new Map();

//add details of a payment to Map
exports.AddPayment = (ctx) => {
  const userID = ctx.params.id;
  const OTP = randomBytes(2).toString("hex");
  const id = randomBytes(8).toString("hex");

  const { amount, nameOnCard, cardNumber, exDate, cvc } = ctx.request.body;
  const newPayment = new Payment(
    id,
    userID,
    amount,
    nameOnCard,
    cardNumber,
    exDate,
    cvc,
    OTP
  );
  paymentData.set(id, newPayment);
  ctx.body = { Added: true, id };
  ctx.status = 200;
};

//validate OTP for payment
exports.CheckOTP = (ctx) => {
  const { id, OTP } = ctx.params;
  if (paymentData.has(id)) {
    const data = paymentData.get(id);
    console.log(OTP, data.OTP);
    if (data.OTP === OTP) {
      ctx.body = { match: true };
      ctx.status = 200;
      return;
    } else {
      ctx.body = { match: false };
      ctx.status = 404;
      return;
    }
  } else {
    ctx.body = { match: false };
    ctx.status = 404;
    return;
  }
};

//get payment data of a single user
exports.GetPayments = (ctx) => {
  const { id } = ctx.params;
  for (let key of paymentData.keys()) {
    let data = paymentData.get(key);
    if (data.userID === id) {
      ctx.body = data;
      ctx.status = 200;
      return;
    }
  }
  ctx.body = { fetched: false };
  ctx.status = 404;
};

//delete payment data of a users
exports.DeletePayment = (ctx) => {
  const { id } = ctx.params;

  if (paymentData.has(id)) {
    paymentData.delete(id);
    ctx.body = { deleted: true };
    ctx.status = 200;
  } else {
    ctx.body = { deleted: false };
    ctx.status = 404;
  }
};

exports.paymentData = paymentData;
