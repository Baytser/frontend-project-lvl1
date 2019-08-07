import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import generateGame from '..';

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

const getData = () => {
  const question = getRandomNum(0, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  const roundData = cons(question, rightAnswer);
  return roundData;
};

export default () => generateGame(description, getData);
