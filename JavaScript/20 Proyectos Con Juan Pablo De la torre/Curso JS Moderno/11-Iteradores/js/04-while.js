
let i = 1;                              // Inicializar el While




while (i <= 10) {                        // Condición para que trabaje el While

     console.log(`${i}`);

     i++;                               // Incremento
}

console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');

while (i <= 100) {

     if (i % 2 === 0 ){
          console.log(`${i} es par`);
     } else console.log(`${i} es NON`);

     i++;
}

console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');

/*        Ejemplo de Fizzbuzz


while (i < 100) {

     if ( i % 3 === 0 && i % 5 === 0){
          console.log(`${i} - FizzBuzz`);
     } else if (i % 3 === 0) {
          console.log(`${i} - Fizz`);
     } else if (i % 5 === 0) {
          console.log(`${i} - Buzz`);
     } else console.log(`${i}`);

     i++;
}*/