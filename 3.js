const prompt = require('prompt-sync')({sigint:true});
const number = parseInt(prompt("Enter Number : ")); 
let temp = 0;
for(i=2;i<number;i++)
{
    if(number%i==0)
    {
        temp = 1
    }
}
if (temp == 0) {
    console.log(number+" is prime Number")   
}
else
{
    console.log(number+" is not prime Number")
}