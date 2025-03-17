let raceNumber = Math.floor(Math.random() * 1000);
const earlyRegister = false;
const runnerAge = 17;
if (runnerAge > 18 && earlyRegister === true) {
  raceNumber += 1000;
} if (runnerAge > 18 && earlyRegister === true) {
  console.log(`You will race at 9:30 am, ${raceNumber}`);
} else if (runnerAge > 18 && earlyRegister !== true ) {
  console.log(`You will race at 11:00 am, ${raceNumber}`);
} else if(runnerAge < 18) {
  console.log(`
“Youth registrants run at 12:30 pm (regardless of registration), ${raceNumber}`);
} else {
  console.log(`You are 18 please see the registration desk, ${raceNumber}`);
}

let myDog = "dog";
const string = [];
for (let i = myDog.length; i >= 3; i++) {
  
}
console.log(myDog)

