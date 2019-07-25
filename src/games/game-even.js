import { cons } from '@hexlet/pairs';
import { getRandomNum, generateGame } from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".';
const gameDate = () => {
  const num = getRandomNum(0, 1000);
  const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
  return cons(num, rightAnswer);
};
const play = () => generateGame(rules, gameDate);

export default play;
