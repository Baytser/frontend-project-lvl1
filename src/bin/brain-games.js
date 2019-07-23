#!/usr/bin/env node
import { printWelcome, sayHi, getUserName } from '..';

printWelcome();
console.log('');
const userName = getUserName();
sayHi(userName);
