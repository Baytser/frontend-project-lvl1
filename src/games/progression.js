import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import generateGame from '..';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getData = () => {
  const firstElement = getRandomNum(1, 10);
  const progressionDiff = getRandomNum(1, 10);
  const hiddenElementPosition = getRandomNum(0, progressionLength - 1);
  const rightAnswer = firstElement + progressionDiff * hiddenElementPosition;
  const iter = (progression, count) => {
    if (count === progressionLength) {
      return progression;
    }
    if (count === hiddenElementPosition) {
      return iter(`${progression} ..`, count + 1);
    }
    const progressionElement = firstElement + progressionDiff * count;
    return iter(`${progression} ${progressionElement}`, count + 1);
  };
  const question = iter('', 0);
  const roundData = cons(question, String(rightAnswer));
  return roundData;
};

export default () => generateGame(description, getData);
