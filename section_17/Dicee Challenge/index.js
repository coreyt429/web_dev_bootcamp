function setDie(index, value=6){
    document.querySelector(`.img${index}`).src = `images/dice${value}.png`;
}

function reset(){
    setDie(1, 6);
    setDie(2, 6);
}

function dieRoll(){
    return Math.floor(Math.random() * 6) + 1;
}

function playTurn(){
    player1Score = dieRoll();
    player2Score = dieRoll();
    setDie(1, player1Score);
    setDie(2, player2Score);
    h1Element = document.querySelector('h1')
    if (player1Score > player2Score) {
        h1Element.innerText = "🚩 Player 1 Wins!";
    } else if (player1Score < player2Score) {
        h1Element.innerText = "Player 2 Wins! 🚩";
    } else {
        h1Element.innerText = "It's a Draw!";
    }
}

playTurn()