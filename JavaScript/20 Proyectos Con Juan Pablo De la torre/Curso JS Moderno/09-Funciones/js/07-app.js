

iniciarApp();

function iniciarApp() {
     console.log('Iniciando App...');
     segundaFuncion();                                 // Va encadenando las funciones siguientes
}

function segundaFuncion () {
     console.log('Desde la segunda función');
     usuarioAutenticado('Kreziped');
}

function usuarioAutenticado (usuario) {
     console.log('Autenticando usuario... espere...');
     console.log(`Usuario Autenticando exitosamente: ${usuario}`);
}