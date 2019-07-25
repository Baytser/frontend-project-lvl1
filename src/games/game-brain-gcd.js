import { cons } from '@hexlet/pairs';
import { getRandomNum, generateGame } from '..';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
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
  return gcd(firstNum, secondNum);
};

const gameDate = () => {
  const num1 = getRandomNum(0, 100);
  const num2 = getRandomNum(0, 100);
  const rightAnswer = gcd(num1, num2);
  return cons(`${num1} ${num2}`, String(rightAnswer));
};

const play = () => generateGame(rules, gameDate);

export default play;
