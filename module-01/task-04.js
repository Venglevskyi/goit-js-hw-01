const userCredit = 23580;
const pricePerDroid = 3000;

const userPurchase = prompt('How many droids do you want to buy');
const totalPrice = userPurchase * pricePerDroid;
const accountBalance = userCredit - totalPrice;

const CANSELED_BY_USER = 'Отменено пользователем';
const OVER_LIMIT = 'Недостаточно средств на счету';
const saleStatus = `Вы купили ${userPurchase} дроидов, на счету осталось ${accountBalance} кредитов.`;

let message;

if (userPurchase === null) {
  message = CANSELED_BY_USER;
  console.log(message);
}

if (accountBalance > 0) {
  message = saleStatus;
  console.log(message);
} else {
  message = OVER_LIMIT;
  console.log(message);
}
