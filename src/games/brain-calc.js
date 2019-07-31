import { cons } from '@hexlet/pairs';
import { l, get } from '@hexlet/pairs-data';
import getRandomNum from '../utils';
import generateGame from '..';

const description = 'What is the result of the expression?';

const getGameDate = () => {
  const num1 = getRandomNum(0, 100);
  const num2 = getRandomNum(0, 100);
  const numGameDate = getRandomNum(0, 2);
  const questionSum = cons(`${num1} + ${num2}`, String(num1 + num2));
  const questionDiff = cons(`${num1} - ${num2}`, String(num1 - num2));
  const questionMultiplication = cons(`${num1} * ${num2}`, String(num1 * num2));
  const questions = l(questionSum, questionDiff, questionMultiplication);
  return get(numGameDate, questions);
};

export default () => generateGame(description, getGameDate);
