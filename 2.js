const prompt = require('prompt-sync')({sigint:true});
const a = parseInt(prompt("Enter 1st Number : "));
const b = parseInt(prompt("Enter 2nd Number : "));
const c = parseInt(prompt("Enter 3rd Number : "));
if((a > b) && (a > c))
{
   console.log(a+" is Largest Number"); 
}
else if((b > a) && (b > c))
{
   console.log(b+" is Largest Number"); 
}
else
{
    console.log(c+" is Largest Number"); 
}