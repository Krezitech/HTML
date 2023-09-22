
const auth = true;

// Si es una validación no se necesita if = true
if (auth) {
     console.log('El usuario esta autenticado');
}

// Siempre poner el comparador mas grande hasta arriba pues "if" se para al primero q se cumpla
// Usar "return" para que el código deje de ejecutarse, sino, ambas se mostrarían


function revisarPuntaje(puntaje) {
     if (puntaje > 400) {
          console.log('Excelente puntaje');
          return;
     }
     if (puntaje > 300) {
          console.log('Buen puntaje');
          return;
     }
}

revisarPuntaje(2000);