let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    let sectionSeleccionarReiniciar = document.getElementById('reiniciar')
    sectionSeleccionarReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}
function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('mascota')
    sectionSeleccionarMascota.style.display = 'none'
    let sectionSeleccionarAtaque = document.getElementById('ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    let inputAang = document.getElementById('aang')
    let inputKorra = document.getElementById('korra')
    let inputKyoshi = document.getElementById('kyoshi')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputAang.checked) {
        spanMascotaJugador.innerHTML = 'Aang'
    } else if (inputKorra.checked) {
        spanMascotaJugador.innerHTML = 'Korra'
    } else if (inputKyoshi.checked) {
        spanMascotaJugador.innerHTML = 'Kyoshi'
    } else {
        alert('NO ELEGISTE NINGUNA MASCOTA')
    }
    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if(mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = 'Aang'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Korra'
    } else  {
        spanMascotaEnemigo.innerHTML = 'Kyoshi'
    }
}
function ataqueFuego() {
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'Fuego'
    }else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'Agua'
    } else {
        ataqueEnemigo = 'Tierra'
    }
    combate()
}
function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje ("Empataron")
    } else if (ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra') {
        crearMensaje ("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego') {
        crearMensaje ("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua') {
        crearMensaje ("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje ("Perdiste")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}
function revisarVidas() {
    if (vidasEnemigo == 0){
        crearMensajeFinal("Felicitaciones eres el MEJOR Avatar")
    } else if (vidasJugador == 0){
        crearMensajeFinal("NO eres el mejor Avatar")
    }
}
function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-Del-Jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-Del-Enemigo')


    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')

    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionSeleccionarReiniciar = document.getElementById('reiniciar')
    sectionSeleccionarReiniciar.style.display = 'block'
}
function reiniciarJuego(){
    location.reload()
}
function aleatorio(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}
window.addEventListener('load', iniciarJuego)

