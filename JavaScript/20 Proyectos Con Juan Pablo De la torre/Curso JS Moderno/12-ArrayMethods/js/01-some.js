const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Revisar si un valor existe se usa "includes", Es CASE SENSITIVE, funcionan con arreglos de un solo indice


const existe = meses.includes('Enero');     // True pq Enero si existe

console.log(existe);


// Para un arreglo de objetos se utiliza "some", tmb es CASE SENSITIVE


const esta = carrito.some( producto => producto.nombre === 'Tablet' );

console.log(esta);          // True pq Tablet si exsite


// SOME tmb existe en un arreglo de solamente índices

const esta2 = meses.some( mes => mes === 'Diciembre');

console.log(esta2);         // False pq Diciembre NO existe en el arreglo