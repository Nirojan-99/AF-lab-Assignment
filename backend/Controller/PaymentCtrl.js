const Payment = require("../Models/PaymentModel");
const randomBytes = require("randombytes");

const paymentData = new Map();

exports.AddPayment = (ctx) => {
  const userID = ctx.params.id;
  const { amount, nameOnCard, cardNumber, exDate, cvc } = ctx.request.body;
  const newPayment = new Payment(
    id,
    userID,
    amount,
    nameOnCard,
    cardNumber,
    exDate,
    cvc
  );
  paymentData.set(id, newPayment);
  ctx.body = { Added: true };
  ctx.status = 200;
};

exports.GetPayments = () => {
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

exports.paymentData = paymentData;
