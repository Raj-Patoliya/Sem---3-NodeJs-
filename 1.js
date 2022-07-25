const prompt = require('prompt-sync')({sigint:true});
const number = parseInt(prompt("Enter Number : "));
console.log(number);
if(number%2 == 0)
{
   console.log("Number is Even"); 
}
else
{
    console.log("Number is Odd");
}