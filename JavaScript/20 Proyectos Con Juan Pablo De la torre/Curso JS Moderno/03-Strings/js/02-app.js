// La función "length" muestra cuantos caracteres tiene la constante

const producto = 'un Monitor 20"';

console.log(producto);

// NO usa paréntesis pq es una propiedad, pero los demás en general usan paréntesis
console.log(producto.length);

// "Monitor" está en la posición 3 (0,1,2,3) de la variable "producto"
console.log(producto.indexOf("Monitor"));

// Si NO lo encuentra, pondrá un "-1"
console.log(producto.indexOf("Tablet"));

// Pero si se usa "includes" ahora podrá "false" porque NO lo encontró
console.log(producto.includes("Tablet"));

// Pero si se usa "includes" ahora podrá "true" porque SI lo encontró
console.log(producto.includes("Monitor"));

// Los STRINGS son CASE SENSITIVE
