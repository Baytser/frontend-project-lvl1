import { cons } from '@hexlet/pairs';
import { getRandomNum, generateGame } from '..';

const rules = 'What number is missing in the progression?';

const gameDate = () => {
  const firstNum = getRandomNum(1, 10);
  const progDiff = getRandomNum(1, 10);
  const positionHideElement = getRandomNum(0, 9);
  const progression = '';
  let hideElement = 0;

  const iter = (accProgression, lastNum, count) => {
    if (count === 10) {
      return cons(accProgression, String(hideElement));
    }
    if (count === positionHideElement) {
      hideElement = lastNum + progDiff;
      return iter(`${accProgression} ..`, hideElement, count + 1);
    }
    return iter(`${accProgression} ${lastNum + progDiff}`, lastNum + progDiff, count + 1);
  };

  return iter(progression, firstNum, 0);
};

const play = () => generateGame(rules, gameDate);

export default play;
