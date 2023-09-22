const producto = 'un Monitor de 20 Pulgadas';

// "repeat" ayuda a repetir una cadena de texto

const texto = ' En Promoción!!!'.repeat(4);

console.log(texto);

console.log(`${producto} ${texto}`);


// "Split" es dividir un "String"


const actividad = "Estoy aprendiendo JavaScript moderno";

console.log(actividad.split(" "));      // Divide cada palabra de la oración pues lleva un espacio.

const hobbies = 'Leer, Caminar, Progragmar, Escuchar Música, Nadar, Jugar';
console.log(hobbies.split(","));

const tweet = "Aprendiendo JavaScript #JavaScriptConJuan";
console.log(tweet.split("#"));