const CANSELED_BY_USER = 'Отменено пользователем';
const WELCOME = 'Добро пожаловать';
const ACCES_DENIED = 'Доступ запрещен, неверный пароль';

const ADMIN_PASSWORD = 'jqueryismyjam';
const userSaid = prompt('Please enter your password');

let message;

if (userSaid === ADMIN_PASSWORD) {
  message = WELCOME;
  console.log(message);
} else if (userSaid === null) {
  message = CANSELED_BY_USER;
  console.log(message);
} else {
  message = ACCES_DENIED;
  console.log(message);
}

alert(message);
