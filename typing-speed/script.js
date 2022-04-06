const testContainer = document.querySelector(".test-wrapper");
const area51 = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#resetBtn");
const chronometer = document.querySelector(".timer");


//Verifying text typed
function spellChecking(){
    let textEntered = area51.value;
    console.log(textEntered);
}
//Chronometer Starts
function start(){
    let textEnteredLenght = area51.value.lenght;
    console.log(textEnteredLenght);
}

//Reset Function
function reset(){
    console.log("The Reset Button has been clicked!");
}

//Event Listeners
area51.addEventListener("keypress", start, false);
area51.addEventListener("keyup", spellChecking, false);
resetButton.addEventListener("click", reset, false);