// Consejos para escribir booleanos

// 1.- los boleanos van implicitos, y no es necesario hacer un pleonasmo. Ejemplo:
const auth = true;

if (auth === true) {
    console.log('Puedes Accesar');
}   else {
    console.log('No Tienes Acceso');
}

// El código anterior tiene "de sobra" la autenticación, el código funciona igual si:
const auth1 = true;

if (auth1) {
    console.log('Puedes Accesar');
}   else {
    console.log('No Tienes Acceso');
}


// o si fuera falso "NO PUEDE ACCESAR"
const auth2 = false;

if (auth2) {
    console.log('Puedes Accesar');
}   else {
    console.log('No Tienes Acceso');
}


// Operador ternario
const auth3 = true;

console.log(auth3 ? 'SI esta autenticado' : 'NO está autenticado');         // SI esta autenticado

const auth4 = false;

console.log(auth4 ? 'SI esta autenticado' : 'NO está autenticado')          // NO está autenticado