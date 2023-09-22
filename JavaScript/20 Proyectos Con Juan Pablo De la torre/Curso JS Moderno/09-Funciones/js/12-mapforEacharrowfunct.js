const carrito = [
     { nombre: 'Tablet', precio: 2500},
     { nombre: 'Tv', precio: 7000},
     { nombre: 'Monitor', precio: 3500},
     { nombre: 'Teclado', precio: 600},
     { nombre: 'Celular', precio: 5500},
     ]


     /* const narreglo = carrito.map( function(producto) {
          console.log(`${producto.nombre} - Precios: ${producto.precio}`);                               // Map
     })*/

     const narreglo = carrito.map (producto => `${producto.nombre} - Precios: ${producto.precio}`);      // Map con arrow function
     console.log(narreglo);



     /* const narreglo2 = carrito.forEach( function(producto) {
          console.log(`${producto.nombre} - Precios: ${producto.precio}`);                               // forEach
     }) */

     carrito.forEach (producto => console.log(`${producto.nombre} - Precios: ${producto.precio}`));      // forEach con arrow function



