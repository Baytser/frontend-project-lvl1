import { cons } from '@hexlet/pairs';
import { l, random } from '@hexlet/pairs-data';
import getRandomNum from '../utils';
import generateGame from '..';

const description = 'What is the result of the expression?';
const operations = l('+', '-', '*');

const getData = () => {
  const num1 = getRandomNum(0, 100);
  const num2 = getRandomNum(0, 100);
  const operation = random(operations);
  let rightAnswer;
  let question;
  switch (operation) {
    case '+':
      rightAnswer = num1 + num2;
      question = `${num1} + ${num2}`;
      break;
    case '-':
      rightAnswer = num1 - num2;
      question = `${num1} - ${num2}`;
      break;
    case '*':
      rightAnswer = num1 * num2;
      question = `${num1} * ${num2}`;
      break;
    default:
      return false;
  }
  return cons(question, String(rightAnswer));
};

export default () => generateGame(description, getData);
