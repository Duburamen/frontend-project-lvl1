import { greetings, summary, congrats } from '../index.js';

const gcdGenerator = (a, b) => {
  if (!b) {
    return a;
  }
  return gcdGenerator(b, a % b);
};

const gcd = () => {
  const name = greetings();
  for (let counter = 1; counter <= 3; counter += 1) {
    const randomNumberFirst = Math.floor(Math.random() * 50);
    const randomNumberSecond = Math.floor(Math.random() * 50);
    const correctAnswer = gcdGenerator(randomNumberFirst, randomNumberSecond);
    const question = `Question: ${randomNumberFirst} ${randomNumberSecond}`;

    if (summary(question, correctAnswer, name) === false) {
      return;
    }
  }
  congrats(name);
};
export default gcd;
