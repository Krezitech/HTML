

const carrito = [
     { nombre: 'Monitor 27 Pulgadas', precio: 500 },
     { nombre: 'Televisión', precio: 100 },
     { nombre: 'Tablet', precio: 200 },
     { nombre: 'Audifonos', precio: 300 },
     { nombre: 'Teclado', precio: 400 },
     { nombre: 'Celular', precio: 700 },
]

// Función "reduce", es tomar datos, unirlos y entregar resultado



// Con "forEach", se van iterando y sumando los productos

let totalfE = 0;
carrito.forEach( productos => totalfE += productos.precio);
console.log(totalfE);


// Con un "reduce"

let totalreduce = carrito.reduce((total, producto) => total +producto.precio, 0 );

console.log(totalreduce);