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

carrito.push(producto2);           // A como se ponga el orden de "push", es como se agregan a la lista
carrito.push(producto);

console.table(carrito);

const producto3 = {
     nombre: "Mouse Gamer",
     precio: 299,
}

carrito.unshift(producto3);        // Pero, si se usa "unshift", este comando manda al inicio de la lista

console.table(carrito);