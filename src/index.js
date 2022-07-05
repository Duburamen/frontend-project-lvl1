import readlineSync from 'readline-sync';

export const greetings = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export const congrats = (name) => {
  console.log(`Congratulations, ${name}!`);
};
