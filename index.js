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

// human score function

function humanScore(score){
    total_score = 0
    total_score += score
    return total_score
}

function computerScore(score){
    total_score = 0
    total_score += score
    return total_score
}

function playRound(){
    const human = getHumanChoice();
    const computer = getComputerChoice();
    // Possible outcomes:
    // "rock", "paper", "scissors":
    // Human         computer
    // "rock"         "rock"
    // "rock"         "paper"
    // "rock"         "scissors"
    // "paper"        "rock"
    // "paper"        "paper"
    // "paper"        "scissors"
    // "scissors"     "rock"
    // "scissors"     "paper"
    // "scissors"     "scissors"
    if (human === "rock"){
        switch (computer){
            case "rock":
                return `OOPS Draw. You choosed "${human}" and Computer choosed the same "${computer}" `;
                break;
            case "paper":
                return `Computer Wins. You choosed "${human}" and Computer choosed the same "${computer}" `;
                break;
        }
    }
    else if ()
}

console.log(playRound());