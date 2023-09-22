

// Se ejecuta al menos el mismo número que el tamaño del arreglo


const actividades = ['Tarea', 'Comer', 'Proyect', 'Estudiar JavaScript'];

actividades.forEach( (pendiente, indice) => console.log(`${indice} - ${pendiente}`));


console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');

const carrito = [
     { nombre: 'Tablet', precio: 2500},
     { nombre: 'Tv', precio: 7000},
     { nombre: 'Monitor', precio: 3500},
     { nombre: 'Teclado', precio: 600},
     { nombre: 'Celular', precio: 5500},
     ]

carrito.forEach((articulo, index) => console.log(`${index} - ${articulo.nombre} - ${articulo.precio}`));


console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');


carrito.map((articulo, index) => console.log(`${index} - ${articulo.nombre} - ${articulo.precio}`));

//        map crea un nuevo arreglo, forEach NO crea un nuevo arreglo


console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');



const nuevoArreglo = carrito.forEach((articulo, index) => console.log(`${index} - ${articulo.nombre} - ${articulo.precio}`));

const nuevoArreglo2 = carrito.map((articulo, index) => console.log(`${index} - ${articulo.nombre} - ${articulo.precio}`));

console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');

console.log(nuevoArreglo);                   // Indefinido porque NO creo un nuevo arreglo
console.log(nuevoArreglo2);                  // SI existe pq map, crea nuevos arreglos