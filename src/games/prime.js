import { greetings, summaryYesNo, congrats } from '../index.js';

const isPrime = (a) => {
  if (a <= 1) {
    return false;
  }
  for (let i = 2; i <= a / 2; i += 1) {
    if (a % i === 0) {
      return false;
    }
  }
  return true;
};

const prime = () => {
  const name = greetings();
  for (let counter = 1; counter <= 3; counter += 1) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isPrime(randomNumber) === true ? 'yes' : 'no';
    const question = `Question: ${randomNumber}`;

    if (summaryYesNo(question, correctAnswer, name) === false) {
      return;
    }
  }
  congrats(name);
};

export default prime;
