//Check
console.log("Hello World!");

//Webpage Element Access
let checkBtn = document.querySelector('.btn-check');
let attempts = document.querySelector('#attempts-left');
let txtNumber = document.querySelector('.input-number');
let newMessage = document.querySelector('.message');
let secretNumberEl = document.querySelector('.secret-number');
let bodyColor = document.querySelector('body');
let highScoreEl = document.querySelector('.current-high-score');
let currentScoreEl = document.querySelector('#current-score');
let againBtn = document.querySelector('.new-game');

//Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let attemptsLeft = 10;
let highScore = 0;

//Event Listener on check button
checkBtn.addEventListener('click', function(){
    if(attemptsLeft > 0){
    attemptsLeft--;
    attempts.textContent = attemptsLeft;

    //Get number from checkbox
    let guess = Number(txtNumber.value);
    
    //When there is no input
    if(guess === 0){
     newMessage.textContent = 'No Number Is Entered!';
    }

    // When the player guess the correct number
    else if(guess === secretNumber){
        newMessage.textContent = 'Correct Number!';
    
    // Display the secret number inside the question mark box
    secretNumberEl.textContent = secretNumber;

    //Change Background color to green
    bodyColor.style.backgroundColor = 'hsl(110, 55%, 45%)';

    //Set High Score to Current Score
    highScore = currentScore > highScore ? currentScore: highScore;
    highScoreEl.textContent = highScore;
    }
    //When the player does not guess correctly
    else if(guess !== secretNumber){
        if(currentScore > 0){
            bodyColor.style.backgroundColor = '#ff0000';  
            setTimeout(() => {bodyColor.style.backgroundColor = '#2e2c2c'; }, 300);

            let message = guess > secretNumber ? 'You guessed too high!'
            : 'You guessed too low!';
            newMessage.textContent = message;
            currentScore--;
            currentScoreEl.textContent = currentScore;
        }else {
         newMessage.textContent = 'You lost the game!';
         currentScoreEl.textContent = 0;
         bodyColor.style.backgroundColor = '#ff0000';   
        }
    }
} else{
    newMessage.textContent = 'You lost the game!';
    attempts.textContent = 0;
    bodyColor.style.backgroundColor = '#ff0000';   
   }
});

againBtn.addEventListener('click', function(){
   secretNumber = Math.trunc(Math.random() * 20) + 1;
   currentScore = 20;
   attemptsLeft = 10;
   newMessage.textContent = 'Guess a number between 1 - 20';
   attempts.textContent = attemptsLeft;
   secretNumberEl.textContent = '?';
   txtNumber.value = '';
   bodyColor.style.backgroundColor = '#2e2c2c';
})