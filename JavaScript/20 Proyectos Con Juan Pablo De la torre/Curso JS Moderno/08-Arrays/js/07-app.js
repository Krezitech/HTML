const carrito = [];

// Definir un producto
const producto = {
     nombre: "Tablet 10 pulgadas",
     precio: 3499,
}

const producto2 = {
     nombre: "Celular",
     precio: 5999,
}

const producto3 = {
     nombre: "Mouse Gamer",
     precio: 299,
}

carrito.push(producto2);           // A como se ponga el orden de "push", es como se agregan a la lista
carrito.push(producto);
carrito.unshift(producto3);        // Pero, si se usa "unshift", este comando manda al inicio de la lista

console.table(carrito);

// Para eliminar:

// delete producto.nombre En los objetos se borra así el final
carrito.pop()                      // En los arreglos se usa ".pop" y borra el último elemento

console.table(carrito);


// Borrar al inico de la lista
carrito.shift();                   // Con esto BORRA el primero de la lista

console.table(carrito);


// Eliminar de "en medio" se usa splice, usa dos parámetros, q son la posición y el segundo, cuantos elementos quieres eliminar

carrito.push(producto);
carrito.unshift(producto3);

console.table(carrito);

carrito.splice(1,1);                // Elimina la pos 1 y borra uno

console.table(carrito);