const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
     { nombre: 'Monitor 27 Pulgadas', precio: 500 },
     { nombre: 'Televisión', precio: 100 },
     { nombre: 'Tablet', precio: 200 },
     { nombre: 'Audifonos', precio: 300 },
     { nombre: 'Teclado', precio: 400 },
     { nombre: 'Celular', precio: 700 },
]

//? "spread" con arreglo de índices

const meses2 = [...meses, 'Agosto'];              //* El orden es importante, se usan mas estos para no afectar el original
console.log(meses2);



//? "spread" con arreglo con objetos

const producto = { nombre: 'Disco Duro', precio: 590};      //* Para añadir un objeto, se crea primero el objeto

const carrito2 = [...carrito,producto];                     //* Se concatena, SIN los 3 puntos para agregarlo, el orden importa

console.log(carrito2);                                      //* Se concatenaron arreglos con objetos