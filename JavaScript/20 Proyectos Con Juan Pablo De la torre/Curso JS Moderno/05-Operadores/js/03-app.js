
// Undefined
let numero;
console.log(numero);                    // Esta definida la variabl pero no tiene "valor", por eso es "undefined"
console.log(typeof numero);             // Tipo es "undefined"

// Null
let numero2 = null;                     // Definida como "null"
console.log(numero2);                   // Se ve como "null"
console.log(typeof numero2);            // El tipo es "object"

console.log(numero === numero2);        // Comparador estricto, "False"
console.log(numero == numero2);         // Comparador NO estricto, "True"