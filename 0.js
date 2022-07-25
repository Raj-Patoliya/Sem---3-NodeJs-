const prompt = require('prompt-sync')({sigint:true});
const number = parseInt(prompt("Enter 1st Number : "));
const number2 = parseInt(prompt("Enter 2nd Number : "));
console.log(number + number2);
