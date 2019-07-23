import readlineSync from 'readline-sync';

export const printWelcome = () => console.log('Welcome to the Brain Games!');
export const sayHi = name => console.log(`Hello, ${name}`);
export const getUserName = () => readlineSync.question('May I have your name? ', { defaultInput: 'John Doe' });
