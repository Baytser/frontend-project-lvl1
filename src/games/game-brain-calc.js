import { cons } from '@hexlet/pairs';
import { getRandomNum, generateGame } from '..';

const rules = 'What is the result of the expression?';
const gameDate = () => {
  const num1 = getRandomNum(0, 100);
  const num2 = getRandomNum(0, 100);
  const numGameDate = getRandomNum(0, 3);
  console.log(`numGameDate: ${numGameDate}`);
  switch (numGameDate) {
    case 0:
      return cons(`${num1} + ${num2}`, String(num1 + num2));
    case 1:
      return cons(`${num1} - ${num2}`, String(num1 - num2));
    case 2:
      return cons(`${num1} * ${num2}`, String(num1 * num2));
    default:
      return cons(`${num1} + ${num2}`, String(num1 + num2));
  }
};

const play = () => generateGame(rules, gameDate);

export default play;
