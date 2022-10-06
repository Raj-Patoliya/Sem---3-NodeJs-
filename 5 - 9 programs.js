// 5.JavaScript Program to Clone a JS Object
const person = {
    name: 'LalaRam',
    surname:'Chorasia',
    maritalStatus :'Akhand Single' ,
}
console.log("\n5.1 Lalaram JS Object through aa rhe hai..");
console.log(person);
console.log("\n5.2 Lalaram single single aa rhe hai..");
console.log("Name : "+person.name);
console.log("Surname : "+person.surname);
console.log("Marital Status : "+person.maritalStatus);


// 6. JavaScript Program to Loop Through an Object
 
const FirSePerson = {
    name: 'LalaRam',
    surname:'Chorasia',
    maritalStatus :'Akhand Single' ,
}
console.log("\n\n6. Lalaram Loop se aa Rhe hai...");
for (const key in FirSePerson) {
    if (Object.hasOwnProperty.call(FirSePerson, key)) {
        const element = FirSePerson[key];
        console.log(key +" : "+element);

    }
}

// 7. JavaScript Program to Add Key/Value Pair to an Object
console.log("\n\n7. Lalaram ko Lottery lag gay ...");
FirSePerson.Jamin = "Highway ke pass liya hai";
FirSePerson.JaminKitniHai = "30 Acre";
console.log(FirSePerson);

// 8. JavaScript Program to Format the Date


var date = new Date();
console.log("\n\n8. Lalaram ki hajari ki Tarikh ...");
console.log(date.toDateString());
console.log("Date: "+date.getDate());
console.log("Day: "+date.getDay().toString());
console.log("Month: "+date.getMonth());
console.log("Year: "+date.getFullYear());

// 9. JavaScript Program to Append an Object to An Array

var array =[10,20,30]
array.push(FirSePerson)

console.log(array);
