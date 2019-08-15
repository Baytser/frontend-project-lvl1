import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import generateGame from '..';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getQuestion = (progression, count, hiddenElementPosition, first, diff) => {
  if (count === progressionLength) {
    return progression;
  }
  if (count === hiddenElementPosition) {
    return getQuestion(`${progression} ..`, count + 1, hiddenElementPosition, first, diff);
  }
  const progressionElement = first + diff * count;
  return getQuestion(`${progression} ${progressionElement}`, count + 1, hiddenElementPosition, first, diff);
};

const getData = () => {
  const first = getRandomNum(1, 10);
  const diff = getRandomNum(1, 10);
  const hiddenElementPosition = getRandomNum(0, progressionLength - 1);
  const rightAnswer = first + diff * hiddenElementPosition;
  const question = getQuestion('', 0, hiddenElementPosition, first, diff);
  const roundData = cons(question, String(rightAnswer));
  return roundData;
};

export default () => generateGame(description, getData);
