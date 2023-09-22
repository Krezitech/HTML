

//? Seleccionar elementos por su clase

const header = document.getElementsByClassName('header');             //* Hay que poner las clases como definidas en el HTML (CASE SENSITIVE)
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);


//? si las clases existen más de una vez

const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);


//? Si una clase NO existe:

const noExiste = document.getElementsByClassName('no-existe');        //* Retorna un [], o sea, un elemento vacío
console.log(noExiste);