import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import generateGame from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const getGameDate = () => {
  const num = getRandomNum(0, 1000);
  const rightAnswer = isEven(num) ? 'yes' : 'no';
  const question = cons(num, rightAnswer);
  return question;
};

export default () => generateGame(description, getGameDate);