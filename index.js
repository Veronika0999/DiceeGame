let randomNumber1 = Math.floor(Math.random() *6) + 1;
let randomNumber2 = Math.floor(Math.random() *6) + 1;

let diceImageLeft = "./images/dice" + randomNumber1 + ".png"
let diceImageElementLeft = document.getElementById("leftDice")
diceImageElementLeft.setAttribute("src", diceImageLeft);

let diceImageRight = "./images/dice" + randomNumber2 + ".png"
let diceImageElementRight = document.getElementById("rightDice")
diceImageElementRight.setAttribute("src", diceImageRight);

if(diceImageLeft === diceImageRight){
    document.querySelector("h1").innerHTML = "Draw!";
}else if(diceImageLeft > diceImageRight){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}else{ 
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}