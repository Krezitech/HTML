
// Poniendo un objeto dentro de otro objeto

const producto = {
    nombre: 'Monitor de 24"',
    precio: 1900,
    disponibilidad: true,
    informacion: {
        medidas:{
            peso: '1Kg',
            largo: '1m',
        },
        fabricacion:{
            pais: "China",
        },
    }
}

console.log(producto);

// Se pueden agregar mas categorías anidadas y la forma de llamarlas es la siguiente:

console.log(producto.informacion.fabricacion.pais);
console.log(producto.informacion.medidas);
