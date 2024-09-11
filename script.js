let randomNumber=(parseInt((Math.random()*100)+1));

let submit=document.querySelector('#submit');
let input = document.querySelector('#userInput');
let prev = document.querySelector('#previousGuess')
let remaining = document.querySelector('#remaining')
let lohi = document.querySelector('#loworhi');
let previous = document.querySelector('.previous')
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault();
        const guess=parseInt(input.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a number.")
    }
    else if(guess>100 || guess<0 ){
        alert("Number should be in range of 0 to 100.")
    }
    else{
        prevGuess.push(guess);
        if(numGuess==11){
            displayGuess(guess);
            displayMessage(`Game Over! Random Number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You guessed it right! Quite Impressive!`);
        endGame();
    }
    else if(guess<randomNumber){
        displayMessage(`Number is too low! Try Again`);
    }
    else if(guess>randomNumber){
        displayMessage(`Number is too high! Try Again`);
    }
}

function displayMessage(message){
    lohi.innerHTML=`<h2>${message}</h2>`
}

function displayGuess(guess){
    input.value='';
    prev.innerHTML+=`${guess} , `;
    remaining.innerHTML = `${12-numGuess}`;
    numGuess++;
}

function endGame(){
    input='';
    input.setAttribute('disabled','')
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>'
    p.classList.add('button');
    previous.appendChild(p);
    playGame=false;
    newGame();
}

function newGame(){
    let randomNumber=(parseInt((Math.random()*100)+1));
    prevGuess=[];
    numGuess=1;
    prev.innerHTML=''
    remaining.innerHTML = `${12-numGuess}`;

    input.removeAttribute('disabled');
    previous.removeChild(p);
    playGame=true;
}

