const producto = {
    nombre: 'Monitor de 24"',
    precio: 1900,
    disponibilidad: true,
    contraseña: "admin"
}

// Para agregar nuevas propiedades al objeto, se usa "." y se agrega "la categoría"
producto.imagen = "imagen.jpg";

console.log(producto);

// Para borrar, se usa "delete"

const producto1 = {
    nombre: 'Monitor de 20"',
    precio: 1500,
    disponibilidad: false,
    contraseña: "admin"
}

delete producto1.contraseña;

console.log(producto1);