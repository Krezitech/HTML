const actividades = ['Tarea', 'Comer', 'Proyect', 'Estudiar JavaScript'];

const carrito = [
     { nombre: 'Tablet', precio: 2500},
     { nombre: 'Tv', precio: 7000},
     { nombre: 'Monitor', precio: 3500},
     { nombre: 'Teclado', precio: 600},
     { nombre: 'Celular', precio: 5500},
     ]


for (let pendientes of actividades) {
     console.log(pendientes);
}

console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');

for (let items of carrito) {
     console.log(items.nombre, '-', items.precio);
}