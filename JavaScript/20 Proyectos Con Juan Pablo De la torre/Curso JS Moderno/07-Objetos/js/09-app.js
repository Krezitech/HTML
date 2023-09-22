
// Para sellar un objeto (seal), NO se pueden agregar o eliminar, pero SI se pueden modificar los existentes

"use strict";

const producto = {
    nombre: 'Monitor de 24"',
    precio: 1900,
    disponibilidad: true
}


Object.seal (producto);

producto.disponibilidad = false;           // Si se puede modificar un campo
// producto.imagen = "imagen.jpg";         Tampoco puedes agregar nuevos campos
// delete producto.precio;                 De igual forma NO se puede borrar ningún campo

console.log(producto);

console.log(Object.isSealed(producto));     // Está sellado así que es "true"