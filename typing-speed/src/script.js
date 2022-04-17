"use strict";
const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetBtn = document.querySelector("#resetBtn");
const theTimer = document.querySelector(".timer");
var timer = [0, 0, 0, 0];
var interval;
var timerRunning = false;
// Adiciona zero inicial aos números <= 9 (apenas para estética):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}
// Executa um timer padrão de minuto / segundo / centésimos:
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;
    timer[0] = Math.floor((timer[3] / 100) / 60);
    timer[1] = Math.floor((timer[3] / 100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}
// Verifica se texto digitado com o fornecido na página:
function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0, textEntered.length);
    //Verifica se a digitação está correta.
    if (textEntered == originText) {
        clearInterval(interval);
        //Se o texto estiver correto, a borda assumirá um tom de verde
        testWrapper.style.borderColor = "lime";
    }
    else {
        if (textEntered == originTextMatch) {
            //Se o texto estiver correto, mas incompleto, um tom de azul
            testWrapper.style.borderColor = "#65CCf3";
        }
        else {
            //Se o texto estiver incorreto, um tom de laranja.
            testWrapper.style.borderColor = "#E95D0F";
        }
    }
}
// Inicia o cronômetro.
function start() {
    let textEnteredLength = testArea.value.length;
    if (textEnteredLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
}
// Reinicia o teste de velocidade
function reset() {
    //Limpando os intervalos de tempo e chaves de incio de timer.
    clearInterval(interval);
    interval = null;
    timer = [0, 0, 0, 0];
    timerRunning = false;
    //Redefinindo os textos para o padrão
    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    //Redefinindo a Borda para o padrão neutro.
    testWrapper.style.borderColor = "gray";
}
// Listeners de eventos para entrada de teclado e o botão de recomeçar:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetBtn.addEventListener("click", reset, false);
