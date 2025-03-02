console.log('hi');
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error, please make the choice.');
  }

}
console.log(getUserChoice('Rock'));
console.log(getUserChoice('stone'));

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1 :
      return 'paper';
    case 2 :
      return 'scissors';
  }
};

// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'User won';
  }
    if(userChoice === computerChoice) {
      return 'Game was a tie';
    } 
    if (userChoice ==='rock' ) {
      if  (computerChoice === 'paper') {
      return 'Computer won.';

      }else {
      return 'User won.'
    }
  }
    if (userChoice ==='paper' ) {
      if  (computerChoice === 'scissors' || computerChoice === 'rock') {
      return 'Computer won.';

      }else {
      return 'User won.'
    }
  }
    if (userChoice ==='scissors' ) {
      if  (computerChoice === 'rock' || computerChoice === 'paper')  {
      return 'Computer won.';

      }else {
      return 'User won.'
    }
  }

};
console.log(determineWinner('bomb', 'scissors'));

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
   console.log( 'User threw: ' + userChoice);
  console.log(' Computer threw: ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
} 
playGame();
