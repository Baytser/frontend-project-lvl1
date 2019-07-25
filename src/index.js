import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
} from '@hexlet/pairs';

const printWelcome = () => console.log('Welcome to the Brain Games!');
const sayHi = name => console.log(`Hello, ${name}`);
const getUserName = () => readlineSync.question('May I have your name? ', { defaultInput: 'John Doe' });
export const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const generateGame = (rules, gameFunc = cons()) => {
  printWelcome();
  console.log();
  const userName = getUserName();
  sayHi(userName);
  if (rules === '') {
    return console.log();
  }
  console.log();
  const iter = (func, acc) => {
    if (acc === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const curGame = func();
    console.log(`Question: ${car(curGame)}`);
    const userAnswer = readlineSync.question('Your answer: ', { defaultInput: '' });
    const rightAnswer = cdr(curGame);
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      return iter(func, acc + 1);
    }
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'\nLet's try again, ${userName}!`);
  };
  return iter(gameFunc, 0);
};
