const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
     { nombre: 'Monitor 27 Pulgadas', precio: 500 },
     { nombre: 'Televisión', precio: 100 },
     { nombre: 'Tablet', precio: 200 },
     { nombre: 'Audifonos', precio: 300 },
     { nombre: 'Teclado', precio: 400 },
     { nombre: 'Celular', precio: 700 },
]

// Método "forEach"

meses.forEach( (mes, index) => {
     if ( mes === 'Abril') {
          console.log(`Encontrado Abril en el índice ${index}`);
     }
})

// Metodo "findIndex" para un arreglo de indices

const indicemes = meses.findIndex( (mes) => mes === 'Abril');
console.log(indicemes);                                               // Marca 3, (Enero-0, Febrero-1, Marzo-2, Abril-3)

const indicemes2 = meses.findIndex( (mes) => mes === 'Diciembre');
console.log(indicemes2);                                              // Marca -1 pq Diciembre NO se encontró



// Para un arreglo de Objetos

const indicecarrito = carrito.findIndex((producto => producto.precio === 400));
console.log(indicecarrito);                                           // Marca 4, pq el teclado está en el índice 4