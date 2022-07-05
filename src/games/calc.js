import readlineSync from 'readline-sync';
import { greetings, congrats } from '../index.js';

const calc = () => {
  const name = greetings();
  for (let counter = 1; counter <= 3; counter += 1) {
    const operators = [{
      sign: '+',
      method: (a, b) => a + b,
    }, {
      sign: '-',
      method: (a, b) => a - b,
    }, {
      sign: '*',
      method: (a, b) => a * b,
    }];
    const randomOperator = Math.floor(Math.random() * operators.length);
    const randomNumberFirst = Math.floor(Math.random() * 50);
    const randomNumberSecond = Math.floor(Math.random() * 50);
    const correctAnswer = operators[randomOperator].method(randomNumberFirst, randomNumberSecond);

    console.log(`Question: ${randomNumberFirst} ${operators[randomOperator].sign} ${randomNumberSecond}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      return;
    }
  }
  congrats(name);
};
export default calc;
