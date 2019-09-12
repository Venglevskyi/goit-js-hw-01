

const CANSELED_BY_USER = 'Отменено пользователем';
const WELCOME = 'Добро пожаловать';
const ACCES_DENIED = 'Доступ запрещен, неверный пароль';

const ADMIN_PASSWORD = 'jqueryismyjam';
const userSaid = prompt('Please enter your password');

let message;

if (userSaid === null) {
  message = CANSELED_BY_USER;
  console.log(message);
}

if (userSaid === ADMIN_PASSWORD) {
  message = WELCOME;
  console.log(message);
}

if (userSaid !== ADMIN_PASSWORD && userSaid !== null) {
  message = ACCES_DENIED;
  console.log(message);
}
