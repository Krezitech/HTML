const numeros = [10,20,30,40,50,["x","y","z"]];

console.log(numeros);
console.table(numeros);         // Otra forma de visualizar es en "tabla", con el "índice" y su valor

// Acceder al arreglo

console.log(numeros[2]);        // Para acceder al valor, hay que poner el índice entre corchetes
console.log(numeros[5]);        // Muestra el arreglo "x,y,z"
console.log(numeros[5][1]);     // Muestra el subarreglo "y"