let input = 'BibekHamal';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for( let i = 0; i < input.length; i++) {
  // console.log(i);
  if (input[i] === 'e') {
     resultArray.push(input[i]);
  } else if (input[i] === 'i') {
     resultArray.push(input[i]);
  }else if (input[i] === 'u') {
     resultArray.push(input[i]);
  }
    
  for (let j = 0; j < vowels.length; j++) {
    // console.log(j);
    if( input[i] === vowels[j]){
      resultArray.push(input[i]);

    }
  }
}
// console.log(resultArray);
let resultString = resultArray.join("");
console.log(resultArray);
console.log(resultString.toUpperCase());