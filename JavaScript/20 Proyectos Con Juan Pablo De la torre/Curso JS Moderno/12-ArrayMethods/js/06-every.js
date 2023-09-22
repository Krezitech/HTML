
const carrito = [
     { nombre: 'Monitor 27 Pulgadas', precio: 500 },
     { nombre: 'Televisión', precio: 100 },
     { nombre: 'Tablet', precio: 200 },
     { nombre: 'Audifonos', precio: 300 },
     { nombre: 'Teclado', precio: 400 },
     { nombre: 'Celular', precio: 700 },
]

//? "Every" y su uso

//! NOTA: los elementos de un arreglo deben cumplir la condición para que sea "true"

const resultado = carrito.every( producto => producto.precio < 1000 );
console.log(resultado);                                                    //* Da "true" pq todos cuestan menos de mil


const resultado2 = carrito.every( producto => producto.precio < 200 );     //* Da "false" pq todos NO todos cuestan menos de 200
console.log(resultado2);


const resultado3 = carrito.some( producto => producto.precio < 200 );     //* Da "true" pq al menos uno cuesta menos de 200
console.log(resultado3);



//- En este caso son su equivalente ( every == and ) y ( some == or )