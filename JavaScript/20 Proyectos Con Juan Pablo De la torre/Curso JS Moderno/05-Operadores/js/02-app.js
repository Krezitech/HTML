const n1 = 20;
const n2 = "20";
const n3 = 30;

// Revisar si dos números son iguales

console.log(n1 == n3);                  // "False", no son iguales
console.log(n1 != n3);                  // "True", si son diferentes

console.log(n1 == n2);                  // "True", si son iguales (aunque uno sea string y otro número)
console.log(n1 === n2);                 // "False", porque en un comparador estricto NO son iguales, uno es string y el otro es número

console.log(n1 === parseInt(n2));       // "True", al convertirlo en entero (Int), ya son iguales

console.log(n1 != n2);                  // "False", si son iguales (aunque uno sea string y otro número)
console.log(n1 !== n2);                 // "True", porque en un comparador estricto Si son diferentes, uno es string y el otro es número