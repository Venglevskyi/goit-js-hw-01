const total = 100;
const ordered = 50;
let userChoice = prompt();
let message;

if(userChoice>100) {
    message = 'На складе недостаточно товаров';
} else(userChoice<100) {
    message = 'Заказ оформлен, с вами свяжеться менеджер';
}

console.log('message');
