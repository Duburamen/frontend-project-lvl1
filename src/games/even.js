import { greetings, summaryYesNo, congrats } from '../index.js';

const even = () => {
  const name = greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let counter = 1; counter <= 3; counter += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
    const question = `Question: ${randomNumber}`;

    if (summaryYesNo(question, correctAnswer, name) === false) {
      return;
    }
  }
  congrats(name);
};
export default even;
