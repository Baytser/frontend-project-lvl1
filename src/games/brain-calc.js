import { cons } from '@hexlet/pairs';
import { l, random } from '@hexlet/pairs-data';
import getRandomNum from '../utils';
import generateGame from '..';

const description = 'What is the result of the expression?';

const getGameDate = () => {
  const num1 = getRandomNum(0, 100);
  const num2 = getRandomNum(0, 100);
  const operations = l('+', '-', '*');
  const operation = random(operations);
  switch (operation) {
    case '+':
      return cons(`${num1} + ${num2}`, String(num1 + num2));
    case '-':
      return cons(`${num1} - ${num2}`, String(num1 - num2));
    case '*':
      return cons(`${num1} * ${num2}`, String(num1 * num2));
    default:
      return cons();
  }
};

export default () => generateGame(description, getGameDate);
