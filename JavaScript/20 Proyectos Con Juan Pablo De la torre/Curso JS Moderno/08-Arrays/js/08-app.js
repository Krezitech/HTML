const producto = {
     nombre: 'Monitor de 24"',
     precio: 1900,
     disponibilidad: true,
}

 // Ahora se usa (Destructuring):

const { nombre } = producto;
console.log(nombre);

// En Arreglos también se puede usar el Destructuring

// Destructuring con Arreglos

const nums = [10,20,30,40,50];

const [primer, seg, ter] = nums;             // se pueden ir haciendo cada valor con una nueva variable

console.log(seg);                            // 20

const [,,tercero] = nums;                    // Si solo se quiere un valor en particular, se san "," para ir saltando valores

console.log(tercero);                        // 30

const [uno,dos,...tres] = nums;              // Usa todos los valores que "sobran

console.log(tres);                           // 30,40,50