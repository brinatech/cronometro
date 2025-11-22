let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalID;

const iniciar = document.getElementById('iniciar');
const pausar = document.getElementById('pausar');
const resetar = document.getElementById('resetar');
const display = document.getElementById('display');

iniciar.addEventListener('click', iniciar_cronometro);
pausar.addEventListener('click', pausar_cronometro);
resetar.addEventListener('click', resetar_cronometro);


function atualizar_tempo(){
    segundos ++;

    if ( segundos === 60){
        segundos = 0;
        minutos ++;
    }
    if(minutos ===60){
        minutos =0;
        horas++;
    }

display.textContent = formatarTempo();
}

function formatarTempo(){
    let sFormatado = segundos;
    let mFormatado = minutos;
    let hFormatado = horas;

    if( segundos < 10){
        sFormatado = "0" + segundos;
    }
    if( minutos < 10){
        mFormatado = "0" + minutos;
    }
    if( horas < 10){
        hFormatado = "0" + horas;
    }

    return `${hFormatado}:${mFormatado}:${sFormatado}`;
}

function iniciar_cronometro() {
   
    if (!intervalID) { 
        intervalID = setInterval(atualizar_tempo, 1000); 
    }
}

function pausar_cronometro(){
    clearInterval(intervalID);
    intervalID = null;
}

function resetar_cronometro(){
    pausar_cronometro();

    segundos = 0;
    minutos = 0;
    horas = 0;

    display.textContent = formatarTempo();
}
