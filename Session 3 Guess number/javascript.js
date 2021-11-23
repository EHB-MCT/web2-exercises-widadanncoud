function generateNumber(){
   Math.floor(Math.random(1,20));
}

function putNumber(){
   let guessNumber =  document.getElementsByClassName("guessNumber").value;
   let button = document.getElementsByClassName("button");
   button.addEventListener("submit", guessNumber);
};

const lower = "The mystery number is lower. Guess again!";
const higher = "The mystery number is higher. Guess again!";
const winner = "You have guessed the mystery number!";
const error = "That is not a valid number (Error)";