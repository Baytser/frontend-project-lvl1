import { cons } from '@hexlet/pairs';
import { getRandomNum, generateGame } from '..';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
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
  const num = getRandomNum(1, 100);
  const rightAnswer = isPrime(num) ? 'yes' : 'no';
  return cons(String(num), rightAnswer);
};

const play = () => generateGame(rules, gameDate);

export default play;
