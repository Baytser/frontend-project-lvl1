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
  const iter = (getQuestion, answersCount) => {
    if (answersCount === correctAnswerCount) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const currentGame = getQuestion();
    console.log(`Question: ${car(currentGame)}`);
    const userAnswer = readlineSync.question('Your answer: ', { defaultInput: '' });
    const rightAnswer = cdr(currentGame);
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      return iter(getQuestion, answersCount + 1);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
    return console.log(`Let's try again, ${userName}!`);
  };
  return iter(getGameDate, 0);
};
