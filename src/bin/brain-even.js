#!/usr/bin/env node
import {
  printWelcome, sayHi, getUserName, playEvenGame,
} from '..';

printWelcome();
console.log('Answer "yes" if number even otherwise answer "no".');
console.log('');
const userName = getUserName();
sayHi(userName);
console.log('');
playEvenGame(userName);
