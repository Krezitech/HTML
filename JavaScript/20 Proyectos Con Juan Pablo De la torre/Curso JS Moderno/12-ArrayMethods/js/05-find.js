

const carrito = [
     { nombre: 'Monitor 27 Pulgadas', precio: 500 },
     { nombre: 'Televisión', precio: 100 },
     { nombre: 'Tablet', precio: 200 },
     { nombre: 'Audifonos', precio: 300 },
     { nombre: 'Teclado', precio: 400 },
     { nombre: 'Celular', precio: 700 },
]


//  Con un "forEach"

let resfoeach = '';
carrito.forEach((producto, index) => {
     if (producto.nombre === 'Tablet') {
          resfoeach = carrito[index]
     }
});

console.log(resfoeach);


// Con un "find"

const resultadofind = carrito.find(( elemento) => elemento.precio === 100);

console.log(resultadofind);


const resultadofind2 = carrito.find(( elemento) => elemento.nombre === "Teclado");

console.log(resultadofind2);