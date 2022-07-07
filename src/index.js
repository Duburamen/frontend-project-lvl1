import readlineSync from 'readline-sync';

export const greetings = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export const summary = (question, correctAnswer, userName) => {
  console.log(question);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer.toString()) {
    console.log('Correct!');
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}."\nLet's try again, ${userName}`);
    return false;
  }
  return true;
};

export const summaryYesNo = (question, correctAnswer, userName) => {
  console.log(question);
  const userAnswer = readlineSync.question('Your answer: ');
  if (((userAnswer === 'yes') && (correctAnswer === 'yes')) || ((userAnswer === 'no') && (correctAnswer === 'no'))) {
    console.log('Correct!');
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}."\nLet's try again, ${userName}`);
    return false;
  }
  return true;
};

export const congrats = (name) => {
  console.log(`Congratulations, ${name}!`);
};
