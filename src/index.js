import readlineSync from 'readline-sync';
import {
  car, cdr,
} from '@hexlet/pairs';

const correctAnswerCount = 3;

export default (description, getGameDate) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log();
  const userName = readlineSync.question('May I have your name? ', { defaultInput: 'John Doe' });
  console.log(`Hello, ${userName}`);
  console.log();
  const iter = (func, acc) => {
    if (acc === correctAnswerCount) {
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
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
    console.log(`Let's try again, ${userName}!`);
  };
  return iter(getGameDate, 0);
};
