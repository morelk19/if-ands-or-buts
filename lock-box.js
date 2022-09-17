const prompt = require('prompt-sync')({sigint: true});

let pinCode = '1234';

let pinEntry = Number(prompt("Enter your pin: "));

if(pinCode === pinEntry){
    console.log("Success!");
}else{
    console.log("Failure!");    
}