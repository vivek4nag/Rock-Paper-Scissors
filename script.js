let userScore = 0;
let computerScore = 0;

// a good practice is to use the html tag in variable name to make code legible & debugging easy
// caching the DOM
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissor_div = document.getElementById("s")

function gtetComputerChoice (){
    const choices = ['r', 'p', 's']; // storing rock pape scissor for computer to select in array
    // console.log(Math.floor(Math.random() * 3));
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]; // getting random computer choice
    
}
// console.log(gtetComputerChoice());

// to convert letter r p s to word
function convertToWord(letter){
    if( letter === "r") return "Rock";
    if( letter === "p") return "Paper";
    if( letter === "s") return "Scissor";
}

// function to output Win
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You Win 🔥🔥`
    
}

// function to output lose
function lose(userChoice, computerChoice){
    computerScore++
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You Lost 💩💩`
    
}

// function to output draw
function draw(userChoice, computerChoice){
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. Game Tied ` 
}

function game(userChoice){
    const computerChoice = gtetComputerChoice();
    // console.log("userchoice is => " + userChoice);
    // console.log("computerchoice is => " + computerChoice);
    
    switch (userChoice + computerChoice) {
        //user wins
        case "rs":
        case "pr":
        case "sp":    
            win(userChoice, computerChoice);
            break;
        
        // pc wins    
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        
        // game tied    
        case "ss":
        case "rr":
        case "pp":
            draw(userChoice, computerChoice);
            break;

    }
    
    
}

function main() {
    rock_div.addEventListener("click", function(){
        game("r")
        
    })
    paper_div.addEventListener("click", function(){
        // console.log("you clicked on paper");
        game("p")

        
    })
    scissor_div.addEventListener("click", function(){
        // console.log("you clicked on scissor");
        game("s")

        
    })
}

main();

