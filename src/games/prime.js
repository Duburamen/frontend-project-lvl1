import readlineSync from 'readline-sync';
import { greetings, congrats } from '../index.js';

const primeFunction = (a) => {
  let isPrime = true;
  if (a === 1) {
    return false;
  }
  if (a > 1) {
    for (let i = 2; i < a / 2; i += 1) {
      if (a % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
  return isPrime;
};

const prime = () => {
  const name = greetings();
  for (let counter = 1; counter <= 3; counter += 1) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (((answer === 'yes') && (primeFunction(randomNumber) === true)) || ((answer === 'no') && (primeFunction(randomNumber) === false))) {
      console.log('Correct!');
    } else {
      const correctAnswer = (primeFunction(randomNumber) === true) ? 'yes' : 'no';
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  congrats(name);
};

export default prime;
