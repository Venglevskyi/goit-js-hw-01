const total = 100;
const ordered = 50;
let result;

if (ordered > total) {
  result = 'На складе недостаточно товаров';
  console.log(result);
} else {
  result = 'Заказ оформлен, с вами свяжеться менеджер';
  console.log(result);
}
