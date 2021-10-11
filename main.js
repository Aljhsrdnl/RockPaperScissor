var userScore_div = document.getElementById("userScore");
var compScore_div = document.getElementById("compScore");
var rock = document.getElementById("r");
var paper = document.getElementById("p");
var scissor = document.getElementById("s");
var message = document.getElementById("message");
var userScore = 0;
var compScore = 0;

function getComputerChoice(){
    var options = ["r", "p", "s"];
    var len = options.length;
    var compBet = options[Math.floor(Math.random()*len)];
    return compBet;
}
function toWord(letter) {
    if (letter === "p") return "Paper";
    if (letter === "r") return "Rock";
    return "Scissor";
}

function userWins(userChoice, compChoice) {
    message.innerHTML = toWord(userChoice) + " beats " + toWord(compChoice) + ". You WIN!";
    userScore++;
    userScore_div.innerHTML = userScore;
    compScore_div.innerHTML = compScore;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')}, 500);
}

function computerWins(userChoice, compChoice) {
    message.innerHTML = toWord(compChoice) + " beats " + toWord(userChoice) + ". Computer WINS!";
    compScore++;
    userScore_div.innerHTML = userScore;
    compScore_div.innerHTML = compScore;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')}, 500);
}
function draw(userChoice, compChoice) {
    message.innerHTML = toWord(userChoice) + " equals " + toWord(compChoice) + ". It's a DRAW!";
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')}, 500);
}
function logic(userChoice) {
    var compChoice = getComputerChoice();
    switch(userChoice + compChoice) {
        case "pr":
        case "rs":
        case "sp":
            userWins(userChoice, compChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            computerWins(userChoice, compChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, compChoice);
            break;
    }
}


function main() {
    rock.addEventListener("click", function() {
        logic("r");
    })
    
    paper.addEventListener("click", function() {
        logic("p");
    })

    scissor.addEventListener("click", function() {
        logic("s");
    })
}

main();


/*

//Main loop for game

    //Get comp bet through Math.random
    compOptions = ["rock", "paper", "scissor"]
    var len = compOptions.length;
    var compBet = compOptions[Math.floor(Math.random()*len)]; //COmputer Bet
    

    document.getElementById("yourMove").innerText = "Choose your move.";
    //User will click on choices
    //Get user bet through clicking the emojis

    var userOptions = document.getElementsByClassName("userOptions");
    var i;
    var userBet = "";
    var userUserScore = 0;
    var computerScore = 0;
    for (i = 0; i < userOptions.length; i++) {
        userOptions[i].addEventListener("click", function() {
            if (this.id == "rock") {
                userBet = "rock";
                document.getElementById("yourMove").innerText = "You chose " + userBet + ".";
                gameLogic();
            }
            else if (this.id == "paper") {
                userBet = "paper";
                document.getElementById("yourMove").innerText = "You chose " + userBet + ".";
                gameLogic();
            }
            else if (this.id == "scissor") {
                userBet = "scissor";
                document.getElementById("yourMove").innerText = "You chose " + userBet + ".";
                gameLogic();
            }
        })
    } 


 //Game Logic


function gameLogic () {
    if (userBet == "rock" && compBet == "paper") {
        document.getElementById("message").innerText = "Paper covers rock! Computer wins!";
        computerScore += 1;
        document.getElementById("userScore").innerText = userUserScore;
        document.getElementById("compScore").innerText = computerScore;

    }
    else if (userBet == "paper" && compBet == "rock") {
        document.getElementById("message").innerText = "Paper covers rock! YOU win!";
        userUserScore += 1;
        document.getElementById("userScore").innerText = userUserScore;
        document.getElementById("compScore").innerText = computerScore;
    }
    else if (userBet == "rock" && compBet == "scissor") {
        document.getElementById("message").innerText = "Scissors can't cut the rock! YOU win!";
        userUserScore += 1;
        document.getElementById("userScore").innerText = userUserScore;
        document.getElementById("compScore").innerText = computerScore;
    }
    else if (userBet == "scissor" && compBet == "rock") {
        document.getElementById("message").innerText = "Scissors can't cut the rock! Computer wins!";
        userUserScore += 1;
        document.getElementById("userScore").innerText = userUserScore;
        document.getElementById("compScore").innerText = computerScore;
    }
    else if (userBet == "rock" && compBet == "rock") {
        document.getElementById("message").innerText = "It's a DRAW!";
        document.getElementById("userScore").innerText = userUserScore;
        document.getElementById("compScore").innerText = computerScore;
    }
    else if (userBet == "paper" && compBet == "scissor") {
        document.getElementById("message").innerText = "Scissor cuts the paper! Computer wins!";
        computerScore += 1;
        document.getElementById("userScore").innerText = userUserScore;
        document.getElementById("compScore").innerText = computerScore;
    }
    else if (userBet == "scissor" && compBet == "paper") {
        document.getElementById("message").innerText = "Scissor cuts the paper! YOU win!";
        userUserScore += 1;
        document.getElementById("userScore").innerText = userUserScore;
        document.getElementById("compScore").innerText = computerScore;
    }
    else if (userBet == "paper" && compBet == "paper") {
        document.getElementById("message").innerText = "It's a DRAW!";
        document.getElementById("userScore").innerText = userUserScore;
        document.getElementById("compScore").innerText = computerScore;
    }
    else if (userBet == "scissor" && compBet == "scissor") {
        document.getElementById("message").innerText = "It's a DRAW!";
        document.getElementById("userScore").innerText = userUserScore;
        document.getElementById("compScore").innerText = computerScore;
    }
}
 */