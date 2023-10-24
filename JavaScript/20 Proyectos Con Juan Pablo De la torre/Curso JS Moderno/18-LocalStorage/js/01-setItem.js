//? localStorage se mantienen siempre, aunq se apague la compu

//? sessionStorage se mantiene hasta cerrar el navegador

//? Para ambos se usa "setItem" para agregar los datos

//? solo almacena "strings"


localStorage.setItem('nombre', 'David');

sessionStorage.setItem('nombre', 'David');

const producto = {
     nombre: "Monito 24 pulgadas",
     precio: 300
}

const productoString = JSON.stringify(producto);                 //* Se puede convertir a "string" un objeto con "JSON.stringify()"
console.log(productoString);
console.log(typeof productoString);

localStorage.setItem('producto', productoString);


const meses = ['Enero', 'Febrero', 'Marzo'];                     //* De igual forma un arreglo se puede convertir en un "string"
const mesesString = JSON.stringify(meses);
console.log(mesesString);
console.log(typeof mesesString);

localStorage.setItem('meses', mesesString);

const meses2 = ['Octubre', 'Noviembre', 'Diciembre'];
localStorage.setItem('meses2', JSON.stringify(meses2));          //* Se puede convertir directo en la funcion de "localStorage"