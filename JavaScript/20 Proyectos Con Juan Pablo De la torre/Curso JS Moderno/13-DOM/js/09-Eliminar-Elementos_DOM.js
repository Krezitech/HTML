

//? Para eliminar Elementos hay dos formas


const primerEnlace = document.querySelector('a');
console.log(primerEnlace);

//? Eliminando el elmento en si

primerEnlace.remove();                       //* Elimina el primer elemento que es "vender" en el html


//? Eliminando al desde el padre con una referencia del elemento

const navegacion = document.querySelector('.navegacion');

console.log(navegacion.children);

navegacion.removeChild(navegacion.children[2]);        //* Para eliminar "registro"