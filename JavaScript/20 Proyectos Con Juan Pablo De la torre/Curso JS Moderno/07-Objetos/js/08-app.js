"use strict";

const producto = {
    nombre: 'Monitor de 24"',
    precio: 1900,
    disponibilidad: true
}

// Se pueden editar las propiedades de los objetos

producto.disponibilidad = false;
producto.imagen = "imagen.jpg";

console.log(producto);

// Para bloquearlas, lo que hay que hacer es habilitar el "modo estricto" poniendo "use strict";


const producto2 = {
    nombre: 'Monitor de 30"',
    precio: 2000,
    disponibilidad: true
}

Object.freeze (producto2);

// producto2.disponibilidad = false;        Manda error por eso está comentado
// producto2.imagen = "imagen.jpg";         Tampoco puedes agregar nuevos campos
// delete producto2.precio;                 De igual forma NO se puede borrar ningún campo

console.log(producto2);

console.log(Object.isFrozen(producto));     // Pregunta si está congelado, NO lo está, por lo cual es "false"
console.log(Object.isFrozen(producto2));    // Pregunta si está congelado, SI lo está, por lo cual es "true"