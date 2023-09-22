
// Uso de la palabra "this", busca la propiedad dentro del objeto.

nombre = "teletubbie";
precio = 99999;

const producto = {
    nombre: 'Monitor de 24"',
    precio: 1900,
    disponibilidad: true,
    mostrarInfo: function (){
        console.log(`El Producto: ${nombre} tiene un precio de ${precio}`)
    }
}

producto.mostrarInfo();         // Muestra las variables "teletubbie" y "99999", NO las variables internas de "producto"


const producto2 = {
    nombre: 'Monitor de 24"',
    precio: 1900,
    disponibilidad: true,
    mostrarInfo: function (){
        console.log(`El Producto: ${this.nombre} tiene un precio de ${this.precio}`)
    }
}


const producto3 = {
    nombre: 'Tablet',
    precio: 2200,
    disponibilidad: true,
    mostrarInfo: function (){
        console.log(`El Producto: ${this.nombre} tiene un precio de ${this.precio}`)
    }
}
producto2.mostrarInfo();        // Aquí si muestra las variables "Monitor de 24" y "1900"
producto3.mostrarInfo();        // Y aunque tengan las mismas variable (this.nombre), NO se mezclan