import readlineSync from 'readline-sync';
import {
  car, cdr,
} from '@hexlet/pairs';

const raundsCount = 3;

export default (description, getGameDate) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log();
  const userName = readlineSync.question('May I have your name? ', { defaultInput: 'John Doe' });
  console.log(`Hello, ${userName}`);
  console.log();

  const iter = (getRoundData, numRaund) => {
    if (numRaund < raundsCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const currentGame = getRoundData();
    console.log(`Question: ${car(currentGame)}`);
    const userAnswer = readlineSync.question('Your answer: ', { defaultInput: '' });
    const rightAnswer = cdr(currentGame);
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      // eslint-disable-next-line consistent-return
      return iter(getRoundData, numRaund + 1);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
    console.log(`Let's try again, ${userName}!`);
  };
  return iter(getGameDate, 0);
};
