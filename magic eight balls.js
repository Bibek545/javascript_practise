let userName = 'Bibek';
// userName = true ? console.log('Hello'+ ' ' + userName) : console.log('Hello');
userName ? console.log(`Hello, ${userName}`) : console.log('Hello');

let userQuestion = ' what number?';
console.log(`${userName} asked = ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 7);

let eightBall = 6;
switch (eightBall) {
  case (0):
    console.log('It is certain');
    break;
  case (1):
    console.log('It is decidedly so');
    break;
  case (2):
    console.log('Reply hazy try again');
    break;
  case (3):
    console.log('Cannot predict now');
    break;
  case (4):
    console.log('Do not count on it');
    break;
  case (5):
    console.log('My sources say no');
    break;
  case (6):
    console.log('Outlook not so good');
    break;
  case (7):
    console.log('Signs point to yes');
    break;
  default:
    console.log('It is not certain');
    break;

}





