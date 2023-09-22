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

console.table(carrito);

// Funciones declarativas

let resultado;

resultado = [...carrito,producto];                // Se pueden agregar también creando una nueva variable y agregando el producto linkeandola con la constante inicial

console.table(resultado);

resultado = [...resultado,producto2];             // Y, se le pueden agregar más elementos

console.table(resultado);

resultado = [producto3,...resultado];             // El orden en que se ponen, definirá el orden del arreglo

console.table(resultado);

console.table(carrito);                           // Nótese que carrito sigue vacío pues solo se "llamó" para usarse en "resultado", pero NO se editó