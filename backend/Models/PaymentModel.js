class Payment {
  constructor(id, userID, amount, nameOnCard, cardNumber, exDate, cvc, OTP) {
    this.id = id;
    this.userID = userID;
    this.amount = amount;
    this.nameOnCard = nameOnCard;
    this.cardNumber = cardNumber;
    this.exDate = exDate;
    this.cvc = cvc;
    this.OTP = OTP;
  }
}
module.exports = Payment;
