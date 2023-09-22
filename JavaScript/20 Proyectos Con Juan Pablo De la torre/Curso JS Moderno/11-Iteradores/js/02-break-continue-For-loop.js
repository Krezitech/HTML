

for ( let i = 0; i <= 10; i++) {

     if (i==5) {
          console.log(`Llegué al cinco`);
          break;                                       // Corta hasta allí para todo, rompe la ejecución
     }
     console.log(`Numero ${i}`);
}

console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');

for ( let i = 0; i <= 10; i++) {

     if (i==5) {
          console.log(`Llegué al cinco`);
          continue;                                    // Continua con el loop al inicio (salta el 5)
     }
     console.log(`Numero ${i}`);
}


console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');

const carrito = [
     { nombre: 'Tablet', precio: 2500},
     { nombre: 'Tv', precio: 7000},
     { nombre: 'Monitor', precio: 3500, descuento : true},
     { nombre: 'Teclado', precio: 600},
     { nombre: 'Celular', precio: 5500},
     { nombre: 'Laptop', precio: 8000},
     ]

     console.log('Tu carrito tiene:')
for ( i = 0 ; i < carrito.length ; i++ ) {
     if (carrito[i].descuento){
          console.log(`${carrito[i].nombre}, tiene descuento`);
     }else {console.log(`${carrito[i].nombre}`)};
}


console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');

console.log('Tu carrito tiene:')
for ( i = 0 ; i < carrito.length ; i++ ) {
     if (carrito[i].descuento){
          console.log(`${carrito[i].nombre}, tiene descuento`);
     continue;
}
     console.log(`${carrito[i].nombre}`);
}
