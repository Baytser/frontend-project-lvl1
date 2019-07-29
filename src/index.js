import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
} from '@hexlet/pairs';

const numCorrectAnswersForWin = 3;
const printDescription = (description = '') => (description === '' ? null : console.log(description));
export const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const generateGame = (description, gameFunc = cons()) => {
  console.log('Welcome to the Brain Games!');
  printDescription(description);
  console.log();
  const userName = readlineSync.question('May I have your name? ', { defaultInput: 'John Doe' });
  console.log(`Hello, ${userName}`);
  if (description === '') {
    console.log();
    return true;
  }
  console.log();
  const iter = (func, acc) => {
    if (acc === numCorrectAnswersForWin) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    const curGame = func();
    console.log(`Question: ${car(curGame)}`);
    const userAnswer = readlineSync.question('Your answer: ', { defaultInput: '' });
    const rightAnswer = cdr(curGame);
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      return iter(func, acc + 1);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}`);
    console.log(`Let's try again, ${userName}!`);
    return true;
  };
  return iter(gameFunc, 0);
};
