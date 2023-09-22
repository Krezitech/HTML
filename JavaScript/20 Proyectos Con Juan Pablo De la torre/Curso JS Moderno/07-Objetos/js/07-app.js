const producto = {
    nombre: 'Monitor de 24"',
    precio: 1900,
    disponibilidad: true
}

console.log(producto);

// Las propiedades de los objetos, SI se pueden editar. Al contrario de las "const" que NO se pueden editar

// Se tiene "disponibilidad = true" y se puede camiar:

producto.disponibilidad = false;

console.log(producto.disponibilidad);