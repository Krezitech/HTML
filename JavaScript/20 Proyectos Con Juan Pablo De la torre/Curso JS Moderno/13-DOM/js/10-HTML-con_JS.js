
//? creando un elemento HTML, en este caso un "enlace", por eso lleva la "a"
const enlace = document.createElement('a');


//? Agregando el texto del enlace
enlace.textContent = 'Nuevo enlace';


//? Agregando el link del enlace
enlace.href = 'http://www.google.com';


//? Agregando que abra en nueva página
enlace.target = "_blank";


//? Agregando clase al enlace
enlace.classList.add('Clasenueva');


//? Agregando una funcion
enlace.onclick = miFuncion;


//? Para agregarlo y hacerlo visiblen hay que ver donde, en este caso se utilizará "navegacion"
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace);                                       //* Lo coloca al final (appendChild)
console.log(navegacion.children);                                     //* Vemos las posiciones de los children

navegacion.insertBefore(enlace, navegacion.children[1]);              //* Lo colocará antes de la pos 1, o sea entre "vender" y "ayuda"

console.log(enlace);


function miFuncion () {
     alert ("diste click");
}


//! ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//! ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//! ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//! ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//! ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 


//? Creando un CARD

const parrafo1 = document.createElement('p');
parrafo1.textContent = ('Concierto');
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = ('Concierto de Rock');
parrafo2.classList.add('titulo');


const parrafo3 = document.createElement('p');
parrafo3.textContent = '800 por persona';
parrafo3.classList.add('precio');

//? Creando un "div" con la clase info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);


//? Creando la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

imagen.classList.add('img-fluid');
imagen.alt = ('texto de la imagen');


//? Creando el card
const card = document.createElement('div');
card.classList.add('card');


//? Asignando la imagen
card.appendChild(imagen);

//? Asignando info
card.appendChild(info);


//? Insertando en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);


console.log(parrafo1);
console.log(parrafo2);
console.log(parrafo3);

console.log(info);