import { greetings, summary, congrats } from '../index.js';

const progressionGenerator = (a, b) => {
  const array = [];
  const count = 10;
  for (let i = 0; array.length < count; i += 1) {
    const sum = a + b * i;
    array.push(sum);
  }
  return array;
};

const progression = () => {
  const name = greetings();
  for (let counter = 1; counter <= 3; counter += 1) {
    const randomNumber = Math.floor(Math.random() * 50);
    const step = Math.floor(Math.random() * 10) + 1;
    const randomArrayIndex = Math.floor(Math.random() * 9);
    const arrayOutput = progressionGenerator(randomNumber, step);
    const correctAnswer = arrayOutput[randomArrayIndex];
    arrayOutput[randomArrayIndex] = '..';
    const question = `Question: ${arrayOutput.join(' ')}`;

    if (summary(question, correctAnswer, name) === false) {
      return;
    }
    congrats(name);
  }
};

export default progression;
