
// "For" tiene 3 partes: El iniciador, la condición a realizar y el incremento

/*
for ( let i = 0; i <= 200; i++) {
     console.log(`${i}`);
}
*/



/*
for (let i = 1 ; i <= 100; i++) {
     if (i%2 == 0 && i%3 == 0){
          console.log(`${i} es par y también tiene tercia`);
     }else if (i%2 == 0) {
          console.log(`${i} es par`);
     }else if(i%3 ==0) {
          console.log(`${i} tiene tercia`);
     }else {
          console.log(`${i}`);
     }
}
*/


const carrito = [
     { nombre: 'Tablet', precio: 2500},
     { nombre: 'Tv', precio: 7000},
     { nombre: 'Monitor', precio: 3500},
     { nombre: 'Teclado', precio: 600},
     { nombre: 'Celular', precio: 5500},
     { nombre: 'Laptop', precio: 8000},
     ]

console.log(carrito.length);

for ( i = 0 ; i < carrito.length ; i++) {
     console.log(carrito[i]);
     console.log(carrito[i].nombre);
     console.log(carrito[i].precio);
}