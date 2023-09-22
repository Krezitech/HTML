const producto = '                              un Monitor 20"                   ';

console.log(producto);
// Se cuentan los espacios como letras
console.log(producto.length);

// Para eliminar los espacios seria:

// Inicio
console.log(producto.trimStart().length);

// Final
console.log(producto.trimEnd().length);

// Ambos
console.log(producto.trimStart().trimEnd().length);
console.log(producto.trim().length);
