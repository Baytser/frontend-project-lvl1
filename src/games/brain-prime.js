import { cons } from '@hexlet/pairs';
import { getRandomNum, generateGame } from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const iter = (acc) => {
    if (acc > Math.sqrt(num)) {
      return true;
    }
    if (num % acc === 0) {
      return false;
    }
    return iter(acc + 1);
  };
  return iter(2);
};

const gameDate = () => {
  const num = getRandomNum(0, 100);
  const rightAnswer = isPrime(num) ? 'yes' : 'no';
  const question = cons(String(num), rightAnswer);
  return question;
};

export default () => generateGame(description, gameDate);
