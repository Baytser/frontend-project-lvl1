import readlineSync from 'readline-sync';
import {
  car, cdr,
} from '@hexlet/pairs';

const roundsCount = 3;

export default (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log();
  const userName = readlineSync.question('May I have your name? ', { defaultInput: 'John Doe' });
  console.log(`Hello, ${userName}`);
  console.log();

  const iter = (counter) => {
    if (counter === roundsCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const gameData = getGameData();
    console.log(`Question: ${car(gameData)}`);
    const userAnswer = readlineSync.question('Your answer: ', { defaultInput: '' });
    const rightAnswer = cdr(gameData);
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      iter(counter + 1);
      return;
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
    console.log(`Let's try again, ${userName}!`);
  };
  return iter(0);
};
