const prompt = require('prompt-sync')({sigint: true});


let p1Entry = prompt(`Player 1, enter "rock", "paper", or "scissors": `);
let validEntry= false;
let p2Entry  = 0;

if(p1Entry === "rock" || p1Entry === "scissors" || p1Entry === "paper"){
    validEntry = true;
}
if(validEntry){
    p2Entry = prompt(`Player 2, enter "rock", "paper", or "scissors": `);
    if(p2Entry === "rock" || p1Entry === "scissors" || p1Entry === "paper"){
        validEntry = true;
    }else{
        validEntry = false;
    }
}

if(validEntry){
if(p1Entry === "rock" && p2Entry === "paper"
    || p1Entry === "scissors" && p2Entry === "rock"
    || p1Entry === "paper" && p2Entry === "scissors"){
    console.log("Player 2 wins!");
}else if(p1Entry === "paper" && p2Entry === "rock"
|| p1Entry === "rock" && p2Entry === "scissors"
|| p1Entry === "scissors" && p2Entry === "paper"){
console.log("Player 1 wins!");
}else{
    console.log("Draw!");
}
}else{
    console.log("Not a valid entry!");
}