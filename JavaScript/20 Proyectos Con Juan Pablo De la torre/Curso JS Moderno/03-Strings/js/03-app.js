
// Se pueden concatenar dos strings o bien agregar un texto extra

const producto = 'un Monitor 20" ';
const precio = '30 USD';

console.log(producto.concat(precio));
console.log(producto.concat( "Aprovecha que está en descuento"));

console.log('El producto ' + producto + " con un precio de " + precio);

// La sintaxis nueva es "template strings" o "template literats" y usa la comilla invertida (alt 96) ` y las variables se ponen con un ${} donde, dentro de las llaves va la variable

console.log(`El producto ${producto} con un precio de $ ${precio} `);