
// Forma de creación "Objet Literal"


const producto = {
    nombre: 'Monitor de 24"',
    precio: 1900,
    disponibilidad: true,
}


// Object Constructor

function Producto(nombre, precio){
    this.nombre =  nombre;
    this.precio = precio;
    this.disponibilidad = true;
}

const producto2 = new Producto ('Tablet', 2200);

console.log(producto2);

const producto3 = new Producto ('Tv', 5499);

console.log(producto3);
