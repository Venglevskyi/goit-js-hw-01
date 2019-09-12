const CHINA = 'КИТАЙ';
const CHILI = 'ЧИЛИ';
const AUSTRALIA = 'АВСТРАЛИЯ';
const INDIA = 'ИНДИЯ';
const JAMAICA = 'ЯМАЙКА';

const userChoise = prompt('Enter your country');
let message;

if (userChoise === null) {
  message = 'Вы не сделали свой выбор';
} else {
  switch (userChoise.toUpperCase()) {
    case CHINA:
      message = `Доставка в ${userChoise} будет стоить 100 кредитов`;
      break;

    case CHILI:
      message = `Доставка в ${userChoise} будет стоить 250 кредитов`;
      break;

    case AUSTRALIA:
      message = `Доставка в ${userChoise} будет стоить 170 кредитов`;
      break;

    case INDIA:
      message = `Доставка в ${userChoise} будет стоить 80 кредитов`;
      break;

    case JAMAICA:
      message = `Доставка в ${userChoise} будет стоить 120 кредитов`;
      break;

    default:
      alert('В вашей стране доставка не доступна');
  }
}


console.log(message);
