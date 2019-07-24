import readlineSync from 'readline-sync';

export const printWelcome = () => console.log('Welcome to the Brain Games!');
export const sayHi = name => console.log(`Hello, ${name}`);
export const getUserName = () => readlineSync.question('May I have your name? ', { defaultInput: 'John Doe' });
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const playEvenGame = (userName) => {
  const iter = (acc) => {
    if (acc === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const num = getRandomNum(0, 1000);
    const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ', { defaultInput: '' });
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      return iter(acc + 1);
    }
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}\nLet's try again, ${userName}!'`);
  };
  iter(0);
};
