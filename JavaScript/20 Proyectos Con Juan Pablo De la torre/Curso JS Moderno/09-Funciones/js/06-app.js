
function saludar (nombre,apellido) {
     console.log(`Hola ${nombre} ${apellido}`);
}

saludar('David',);            // Imprime "undefined" a lo que no se le puso valor


// Si no ponen parámetros, se pueden usar parámetros "por default"

function saludar2 (nombre = 'John',apellido = 'Doe') {
     console.log(`Hola ${nombre} ${apellido}`);
}

saludar2('David',);
saludar2();

