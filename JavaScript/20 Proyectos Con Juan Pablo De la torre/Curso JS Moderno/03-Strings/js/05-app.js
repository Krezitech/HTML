const producto = 'un Monitor de 20 Pulgadas';

console.log(producto);

// Para reemplazar alguna palabra:

console.log(producto.replace('Pulgadas','"'));
console.log(producto.replace('Monitor','Monitor Curvo'));

// Para extraer una cadena, se usa "slice"

console.log(producto.slice(5,15)); // corta los caracteres desde la posición 5 a la 15

console.log(producto.slice(10)); // Muestra desde el caracter 10 en adelante


// Alternativa a "slice"

console.log(producto.substring(5,15)); // Igual donde inicia y donde acaba

console.log(producto.substring(15,5)); // La diferencia con "slice" es que este puedes poner en desorden y enviará el mismo resultado


// Ejemplos de como Google pone tus lentras inciales

const usuario = "David";

console.log(usuario.substring(0,1));    // Se usa el substring con la primera letra únicamente
console.log(usuario.charAt(0));         // Se usa "charAt" y así tmb se logra