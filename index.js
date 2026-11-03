// Greeting
console.log("Wlcm to Rock Paper Scissors Game");

// creating a function that takes human input
function getHumanChoice(){
    const human_prompt = prompt("Choose one: Rock | Paper | Scissors").trim().toLowerCase();    
    return human_prompt;
}

function getComputerChoice(){
    const options = ["rock", "paper", 'scissors'];
    const random_choice = Math.floor(Math.random() * options.length);
    return options[random_choice];
}

console.log(getComputerChoice());