const POINTERHOUR = document.querySelector("#hour");
const POINTERMINUTE = document.querySelector("#minute");
const POINTERSECOND = document.querySelector("#second");

function runClock(){ 
    var catchData = new Date();
    console.log(catchData);
    
    let hr = catchData.getHours();
    let min = catchData.getMinutes();
    let seg = catchData.getSeconds();
    console.log("Hora: " + hr + " Minuto: " + min + " Segundo: " + seg);

    let posHr = (hr*360/12)+(min*(360/60)/12);
    let posMin = (min*360/60)+(seg*(360/60)/60);
    let posSeg = seg*360/60;

    POINTERHOUR.style.transform = "rotate(" + posHr + "deg)";
    POINTERMINUTE.style.transform = "rotate(" + posMin + "deg)";
    POINTERSECOND.style.transform = "rotate(" + posSeg + "deg)";
}

var intervalo = setInterval(runClock, 1000);