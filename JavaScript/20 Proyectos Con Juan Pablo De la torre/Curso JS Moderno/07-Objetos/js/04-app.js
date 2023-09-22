const producto = {
    nombre: 'Monitor de 24"',
    precio: 1900,
    disponibilidad: true,
}

console.log(producto.nombre);

// Para sacar asignar un valor del objeto a una variable, antes se usaba:

const precio = producto.precio;
console.log(precio);

// Ahora se usa (Destructuring):

const { nombre } = producto;
console.log(nombre);

// Si se quiere se puede sacar todos los valores en una sola linea:

const producto2 = {
    nombre2: 'Monitor de 40"',
    precio2: 2500,
    disponibilidad2: false,
}

const { nombre2, precio2, disponibilidad2 } = producto2;

console.log(nombre2);
console.log(precio2);
console.log(disponibilidad2);