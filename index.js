// Greeting
console.log("Wlcm to Rock Paper Scissors Game");

// creating a function that takes human input
function getHumanChoice(){
    const human_prompt = prompt("Choose one: Rock | Paper | Scissors").trim().toLowerCase();    
    return human_prompt;
}

// creating a function that return a random option
function getComputerChoice(){
    const options = ["rock", "paper", 'scissors'];
    // Below we do "Math.random() * options.length" for choosing a random number b/w 0 and 3(excluded).
    // Then we do "Math.floor()" it round down to nearest int b/w 0 and 3(excluded) and that becomes the random array index
    const random_choice = Math.floor(Math.random() * options.length);
    return options[random_choice];
}

