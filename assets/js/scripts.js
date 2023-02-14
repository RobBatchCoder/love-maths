// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function (){
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'submit') {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute('data-type');
                runGame('gameType');
            }
        });

    }
    runGame('addition');
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

    // Creates two random numbers between 1 and 25
    let numOne = Math.floor(Math.random() * 25) + 1;
    let numTwo = Math.floor(Math.random() * 25) + 1;

    if(gameType === 'addition'){
        displayAdditionAnswer(numOne,numTwo);
    }
    else{
        alert(`unknown game type: ${gameType}`)
        throw `unknown game type: ${gameType} Aborting!`
    }
}



function checkAnswers() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionAnswer(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractAnswer() {

}

function displayMultiplyAnswer() {

}

function displayDivideAnswer() {

}