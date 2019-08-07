import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import generateGame from '..';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let firstNum = num1;
  let secondNum = num2;
  if (firstNum === 0 || secondNum === 0) {
    return firstNum + secondNum;
  }
  if (firstNum > secondNum) {
    firstNum %= secondNum;
  } else {
    secondNum %= firstNum;
  }
  return getGcd(firstNum, secondNum);
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
