const b1 = true;
const b2 = false;

console.log(b1 === b2);                 // No son iguales, son del mismo tipo de datos pero diferente "valor"

console.log(b1 === true);               // Da "true" pq es "true" ambos y son boleanos
console.log(b1 === "true");             // Da "false" pq uno es string y el otro booleano