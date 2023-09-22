"use strict";

const producto = {
    nombre: 'Monitor de 24"',
    precio: 1900,
    disponibilidad: true
}

const medidas = {
    peso: '1Kg',
    longitud: '1m',
}

console.log(producto);
console.log(medidas);

const unir = Object.assign(producto,medidas);       // Se unen según el orden en el que se agregan
const unir2 = Object.assign(medidas,producto);

console.log(unir);
console.log(unir2);

// Otra forma es el "Spread Operator" o "Rest Operator"

const espread = {...producto,...medidas};           // Se unen según el orden en el que se agregan
const espread2 = {...medidas,...producto};

console.log(espread);
console.log(espread2);
