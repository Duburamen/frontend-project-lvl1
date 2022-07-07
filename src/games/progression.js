import readlineSync from 'readline-sync';
import { greetings, congrats } from '../index.js';

const progression = () => {
  const name = greetings();
  const count = 10;
  for (let counter = 1; counter <= 3; counter += 1) {
    const randomNumber = Math.floor(Math.random() * 50);
    const step = Math.floor(Math.random() * 10) + 1;
    const randomArrayIndex = Math.floor(Math.random() * 9);
    const progressionFunction = (a, b) => {
      const array = [];
      for (let i = 0; array.length < count; i += 1) {
        const sum = a + b * i;
        array.push(sum);
      }
      return array;
    };
    const arrayOutput = progressionFunction(randomNumber, step);
    const correctAnswer = arrayOutput[randomArrayIndex];
    arrayOutput[randomArrayIndex] = '..';
    console.log(`Question: ${arrayOutput.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    congrats(name);
  }
};

export default progression;
