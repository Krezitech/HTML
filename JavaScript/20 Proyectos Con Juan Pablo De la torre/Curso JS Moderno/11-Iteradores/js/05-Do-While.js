
// "Do While" al menos se hace una vez


let i = 0;                         // Inicio

do {
     console.log(`Número ${i}`)
     i++;                          // Incremento
} while (i<10);                    // Condición


console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');


do {
     if ( i % 3 === 0 && i % 5 === 0){
          console.log(`${i} - FizzBuzz`);
     } else if (i % 3 === 0) {
          console.log(`${i} - Fizz`);
     } else if (i % 5 === 0) {
          console.log(`${i} - Buzz`);
     } else console.log(`${i}`);
     i++;
} while (i<100);