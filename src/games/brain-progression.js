import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import generateGame from '..';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getGameDate = () => {
  const num = getRandomNum(1, 10);
  const progressionDiff = getRandomNum(1, 10);
  const hiddenPositionElement = getRandomNum(0, progressionLength - 1);
  const progression = '';

  const iter = (accProgression, count) => {
    if (count === progressionLength) {
      const hiddenElement = num + progressionDiff * hiddenPositionElement;
      const question = cons(accProgression, String(hiddenElement));
      return question;
    }
    if (count === hiddenPositionElement) {
      return iter(`${accProgression} ..`, count + 1);
    }
    const progressionElement = num + progressionDiff * count;
    return iter(`${accProgression} ${progressionElement}`, count + 1);
  };

  return iter(progression, 0);
};

export default () => generateGame(description, getGameDate);
