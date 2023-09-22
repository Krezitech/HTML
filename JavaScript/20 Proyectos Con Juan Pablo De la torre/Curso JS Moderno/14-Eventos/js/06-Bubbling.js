

//? "Event Bubbling" es cuando se hace trigger a un evento pero se propaga por muchos otros lugares


//* Se seleccionan las clases de todo un "div"


const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const tituloDiv = document.querySelector('.titulo');


cardDiv.addEventListener('click', () => {
     console.log('click en card')
})

infoDiv.addEventListener('click', () => {
     console.log('click en info')
})

tituloDiv.addEventListener('click', () => {
     console.log('click en titulo')
})
//! En este caso si damos "click" en "titulo", se disparan los 3, eso es Bubbling



//* Pero es fácil corregirlo solo con un "stopPropagation"

cardDiv.addEventListener('click', (evento) => {
     evento.stopPropagation();
     console.log('click en card');
})

infoDiv.addEventListener('click', (evento) => {
     evento.stopPropagation();
     console.log('click en info');
})

tituloDiv.addEventListener('click', (evento) => {
     evento.stopPropagation();
     console.log('click en titulo');
})
