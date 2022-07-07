import readlineSync from 'readline-sync';
import { greetings, congrats } from '../index.js';

const gcd = () => {
  const name = greetings();
  for (let counter = 1; counter <= 3; counter += 1) {
    const randomNumberFirst = Math.floor(Math.random() * 50);
    const randomNumberSecond = Math.floor(Math.random() * 50);
    const gcdFunction = (a, b) => {
      if (!b) {
        return a;
      }
      return gcdFunction(b, a % b);
    };
    const correctAnswer = gcdFunction(randomNumberFirst, randomNumberSecond);
    console.log(`Question: ${randomNumberFirst} ${randomNumberSecond}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  congrats(name);
};
export default gcd;
