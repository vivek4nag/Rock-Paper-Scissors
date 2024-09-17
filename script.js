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