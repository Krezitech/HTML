const carrito = [
{ nombre: 'Tablet', precio: 2500},
{ nombre: 'Tv', precio: 7000},
{ nombre: 'Monitor', precio: 3500},
{ nombre: 'Teclado', precio: 600},
{ nombre: 'Celular', precio: 5500},
]

for( let i = 0 ;  i < carrito.length ; i++ ) {
     //console.log(carrito[i]);                                                   // Se pueden ir desplegando como objeto
    // console.log(carrito[i].nombre);                                            // solo un valor
     console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);        // O sacando variables con sus valores
}

carrito.forEach( function(producto) {
     console.log(`${producto.nombre} - Precios: ${producto.precio}`);
})