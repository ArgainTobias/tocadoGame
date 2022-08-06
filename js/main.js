let puntos = 0;
const necesarios = 30;
let contadorTiempo = 25;
const player = document.getElementById("player");
const puntaje = document.querySelector("#puntaje");
const tiempo = document.querySelector("#tiempo");
const botonComenzar = document.getElementById('comenzar');
const botonReiniciar = document.getElementById('reiniciar');

const sumarPuntos = () => {
    puntos++;
    puntaje.innerHTML = `Su puntaje es: ${puntos}/30`;
    ganador();
    
    let randNum = Math.round(Math.random()*58);
    let randNum2 = Math.round(Math.random()*36);

    player.style.marginTop = `${randNum + "vh"}`;
    player.style.marginLeft = `${randNum2 + "vw"}`;

}

const funcionalidadPlayer = () => {
    player.addEventListener("mouseover", sumarPuntos);
}

const disminuirTiempo = () => {
    contadorTiempo--;
    tiempo.innerHTML = `Tiempo restante: ${contadorTiempo}s`;

    if(contadorTiempo === 0){
        swal.fire({
            title:"Perdiste",
            text:"Vuelve a intentarlo!",
            icon:"error"
        })
        clearInterval(interval);
        contadorTiempo = 25;
        puntos = 0;
    }
}

const ganador = () => {
    if(puntos === necesarios){
        swal.fire({
            title:"Ganaste!",
            text:"Felicitaciones",
            icon:"success"
        });

        clearInterval(interval);
        
        puntos = 0;
        contadorTiempo = 25;
        puntaje.innerHTML = `Su puntaje es: ${puntos}/30`;
        tiempo.innerHTML = `Tiempo restante: ${contadorTiempo}s`;
    }
}

const funcionBotonEmpezar = () => {
    
    botonComenzar.addEventListener("click", empezarPartida);
}

const empezarPartida = () => {
    puntos = 0;
    contadorTiempo = 25;
    interval = setInterval(disminuirTiempo, 1000);
    
    funcionalidadPlayer();
        
}

const init = () => {
    funcionBotonEmpezar();
}

init();