const carrito = [
     { nombre: 'Tablet', precio: 2500},
     { nombre: 'Tv', precio: 7000},
     { nombre: 'Monitor', precio: 3500},
     { nombre: 'Teclado', precio: 600},
     { nombre: 'Celular', precio: 5500},
     ]

     const narreglo = carrito.map( function(producto) {
          console.log(`${producto.nombre} - Precios: ${producto.precio}`);
     })

     const narreglo2 = carrito.forEach( function(producto) {
          console.log(`${producto.nombre} - Precios: ${producto.precio}`);
     })

     console.log(narreglo);
     console.log(narreglo2);