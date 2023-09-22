const producto = {
    nombre: 'Monitor de 24"',
    precio: 1900,
    disponibilidad: true,
}


console.log(Object.keys(producto));             // Las "llaves", son como las categoría, en este caso, nombre, precio, disponibilidad.

console.log(Object.values(producto));           // Los "values", da los valores de las llaves.

console.log(Object.entries(producto));          // Da todos los valores llaves y valores