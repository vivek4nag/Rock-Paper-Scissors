const userScore = 0;
const computerScore = 0;

// a good practice is to use the html tag in variable name to make code legible & debugging easy
// caching the DOM
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
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


function game(userChoice){
    const computerChoice = gtetComputerChoice();
    console.log("User choice is =>" + userChoice);
    console.log("comp choice is =>" + computerChoice);
    
    
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

