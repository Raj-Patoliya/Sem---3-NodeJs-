const prompt = require('prompt-sync')({sigint:true});
const number = parseInt(prompt("Enter Number : ")); 
let temp = 1;
for(i=1;i<=number;i++)
{
    temp = temp *   i;
}
console.log("Factorial Number : "+temp );