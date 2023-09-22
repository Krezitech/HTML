const navegacion = document.querySelector('.navegacion');

console.log(navegacion);

console.log(navegacion.childNodes);               //* Los espacios en blanco se consideran elementos (salots de línea)

console.log(navegacion.children);                 //* Solo toma los elementos reales y no los espacios en blanco

console.log(navegacion.children[2]);              //* se pueden usar por número de elemento


const card = document.querySelector('.card');

console.log(card.children[1]);

console.log(card.children[1].children);                     //* Se puede navegar en el árbol

console.log(card.children[1].children[1].textContent);      //* Para ver el contentido de "música electrónica 2021"


//? Cambiar título con Traversing

card.children[1].children[1].textContent = 'Nuevo Título con Traversing'        //* Cambiando el título



//?  Cambiar imagen Traversing

card.children[0].src = 'img/hacer3.jpg';
console.log(card.children[0])


//? Traversin de Hijo al padre

console.log(card.parentNode);                               //* Mestra la clase "contenedor-cards" que es el padre a "card", pero con espacios en blanco

console.log(card.parentElement);                            //* Mestra la clase "contenedor-cards" que es el padre a "card", solo los elementos reales

console.log(card.parentElement.parentElement);              //* Y así a todos los que tengan "padre"


//? Recorrer al siguiente card (hermano)


console.log(card);
console.log(card.nextElementSibling);                       //* Muestra el hermano siguiente

//? Recorrer al  card previo (hermano)

const ultimocard = document.querySelector('.card:nth-child(4)');
console.log(ultimocard);

console.log(ultimocard.previousElementSibling);                   //* Muestra el elemento hermano previo


//? /////////////////////////////////////

console.log(navegacion);
console.log(navegacion.firstElementChild);                       //* Muestra el primer elemento
console.log(navegacion.lastElementChild);                        //* Muestra el último elemento



const card2 = document.querySelector('.card');