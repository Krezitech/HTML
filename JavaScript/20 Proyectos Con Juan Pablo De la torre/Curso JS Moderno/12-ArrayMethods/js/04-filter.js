

const carrito = [
     { nombre: 'Monitor 27 Pulgadas', precio: 500 },
     { nombre: 'Televisión', precio: 100 },
     { nombre: 'Tablet', precio: 200 },
     { nombre: 'Audifonos', precio: 300 },
     { nombre: 'Teclado', precio: 400 },
     { nombre: 'Celular', precio: 700 },
]

let resultado = carrito.filter ( (producto ) => producto.precio >= 300);
console.log(resultado);


let resultado2 = carrito.filter ( (producto ) => producto.precio < 500);
console.log(resultado2);

let resultado3 = carrito.filter ( (producto ) => producto.nombre !== 'Tablet');
console.log(resultado3);

let resultado4 = carrito.filter ( (producto ) => producto.nombre === 'Tablet');
console.log(resultado4);