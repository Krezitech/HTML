

//? Se pueden cambiar, agregar o quitar "clases" y el CSS de un elemento




//? Cambiar color de encabezado

const encabezado = document.querySelector('h1');
console.log(encabezado.style);

encabezado.style.backgroundColor = 'red';              //* Cambia el color de bg del h1 a rojo

encabezado.style.fontFamily = 'Arial';                 //* Cambia a tipografía "Arial"

encabezado.style.textTransform = 'uppercase';          //* Cambia a mayúsculas



//! NOTA: Los objetos en Js, quitan el "-" al de CSS y mayúscula a la siguiente palabra:

//* justify-content => justifyContent

//* background-color => backgroundColor



//? ¨Para cambiar el primer card

const card = document.querySelector('.card');
console.log(card.classList);                                     //* Se ven las clases

card.classList.add('Nueva-Clase', 'Segunda-clase');              //* le agregan una o varias clases!!!
console.log(card.classList);

card.classList.remove('card');                                   //* Solo quedan las dos creadas previamente
console.log(card.classList);