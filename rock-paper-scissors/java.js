let humanScore = 0; 
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.random();

    if (choice <=.33) {
        return 'rock';
    } else if (choice <=.66) {
        return 'paper';
    } else { 
        return 'scissors';
    }
}

let compChoice = getComputerChoice()
console.log("computer chose: ", compChoice);

function getHumanChoice() {
let humanChoice = prompt("Choose rock, paper or scissors");
return humanChoice;
}

function printResult(humanChoice, compChoice) {
    if (humanChoice === 'rock' && compChoice === 'scissors') {
        console.log("You win!");
        humanScore++;
    } else if (humanChoice === 'paper' && compChoice === 'rock') {
        console.log ("You win!");
        humanScore++;
    } else if (humanChoice === 'scissors' && compChoice === 'paper') {
        console.log("You win!");
        humanScore++;
    } else if (humanChoice === compChoice) {
        console.log("It's a tie");
    } else {
        console.log("You lose!");
        computerScore++
    }
}

printResult(getHumanChoice(), compChoice);


while (true) {
    let humanChoice = prompt("Choose rock, paper or scissors (or type 'quit' to stop):").toLowerCase();
    if (humanChoice === "quit") {
        console.log("Thanks for playing!");
        break;
    }

    let compChoice = getComputerChoice();
    console.log("You chose:", humanChoice);
    console.log("Computer chose:", compChoice);
    printResult(humanChoice, compChoice);

    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}

if (humanScore === 5) {
    console.log("You are a winner!");
} else {
    console.log("Computer won the game!");
}


