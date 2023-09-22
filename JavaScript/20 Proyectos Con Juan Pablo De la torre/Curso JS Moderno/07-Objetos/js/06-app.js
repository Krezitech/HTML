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


const { nombre } = producto;

console.log(nombre);

// Y, para sacar información mas detallada se anidan de igual forma:

const { precio, informacion: {fabricacion: {pais}} } = producto;

console.log(precio);
console.log(pais);

// Sin embargo, solo se hizo "pais", NO se hizo ni "informacion" ni "fabricacion"

// console.log(informacion); Manda ERROR

// Para hacerlo, tendría que ser:
const { disponibilidad, informacion, informacion: { medidas, medidas: { peso }} } = producto;

console.log(disponibilidad);
console.log(informacion);
console.log(medidas);
console.log(peso);



