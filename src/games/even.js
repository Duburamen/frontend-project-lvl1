import readlineSync from 'readline-sync';

const even = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let counter = 1; counter <= 3; counter += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (((answer === 'yes') && (randomNumber % 2 === 0)) || ((answer === 'no') && (randomNumber % 2 === 1))) {
      console.log('Correct!');
    } else {
      const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default even;
