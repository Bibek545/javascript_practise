// using const will not allow to chnage the value later in future
const kelvin = 293;
// here we wil get the value of celsius by esubtratcing 
const celsius = kelvin - 273;

let fahrenheit = celsius * (9 + 5) + 32;
console.log(Math.floor(fahrenheit));
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);




