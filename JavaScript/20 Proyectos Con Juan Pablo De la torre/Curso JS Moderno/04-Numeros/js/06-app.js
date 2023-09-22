const num1 = "20";
const num2 = "20.2";
const num3 = "Veinte";
const num4 = 20;

// Convertir un "String" a "Number"

console.log(num1);                          // String
console.log(Number.parseInt(num1));         // Número Entero

console.log(num2);                          // String
console.log(Number.parseFloat(num2));       // Número Flotante

console.log(num3);
console.log(Number.parseInt(num3));

// Revisar si un número es entero

console.log(Number.isInteger(num4));        // Dará "True" pq es entero
console.log(Number.isInteger(num1));        // Dará "False" pq es String