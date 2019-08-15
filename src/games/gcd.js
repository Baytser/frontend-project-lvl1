import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import generateGame from '..';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let first = num1;
  let second = num2;
  if (first === 0 || second === 0) {
    return first + second;
  }
  if (first > second) {
    first %= second;
  } else {
    second %= first;
  }
  return getGcd(first, second);
};

const getData = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  const rightAnswer = getGcd(num1, num2);
  const question = `${num1} ${num2}`;
  const roundData = cons(question, String(rightAnswer));
  return roundData;
};

export default () => generateGame(description, getData);
