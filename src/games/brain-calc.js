import { cons } from '@hexlet/pairs';
import { getRandomNum, generateGame } from '..';

const description = 'What is the result of the expression?';
const numOperations = 3;
const gameDate = () => {
  const num1 = getRandomNum(0, 100);
  const num2 = getRandomNum(0, 100);
  const numGameDate = getRandomNum(1, numOperations);
  const questionSum = cons(`${num1} + ${num2}`, String(num1 + num2));
  const questionDiff = cons(`${num1} - ${num2}`, String(num1 - num2));
  const questionMultiplication = cons(`${num1} * ${num2}`, String(num1 * num2));
  switch (numGameDate) {
    case 1:
      return questionSum;
    case 2:
      return questionDiff;
    case 3:
      return questionMultiplication;
    default:
      return questionSum;
  }
};

export default () => generateGame(description, gameDate);
