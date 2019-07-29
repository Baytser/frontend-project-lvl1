import { cons } from '@hexlet/pairs';
import { getRandomNum, generateGame } from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const gameDate = () => {
  const num = getRandomNum(0, 1000);
  const rightAnswer = isEven(num) === 0 ? 'yes' : 'no';
  const question = cons(num, rightAnswer);
  return question;
};

export default () => generateGame(description, gameDate);
