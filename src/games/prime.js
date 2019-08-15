import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import generateGame from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const iter = (counter) => {
    if (counter > Math.sqrt(num)) {
      return true;
    }
    if (num % counter === 0) {
      return false;
    }
    return iter(counter + 1);
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
