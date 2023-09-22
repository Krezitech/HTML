

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);


//? Para acceder al Texto

console.log(encabezado.innerText);                               //* Retorna el texto en h1 (por haberse definido en h1 previamente) NO ENCUENTRA TEXTOS OCULTOS
console.log(encabezado.textContent);                             //* De igual forma retorna el texto, incluye textos ocultos (visibility: hidden)
console.log(encabezado.innerHTML);                               //* Tambie trae el texto pero incluye el HTML

//? Se puede usar el encadenamiento "chaining"

const encabezado2 = document.querySelector('.contenido-hero h1').textContent;        //* Se puede usar el encadenamiento
console.log(encabezado2);



//? Se pueden reemblazar cosas de la siguiente manera:

document.querySelector('.contenido-hero h1').textContent = 'Nuevo heading cambiado asignandolo directamente en la variable de h1';

//? O también así:

const nuevoHeading = 'Este es el segundo nuevo heading'
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;


//? Para modificar una imagen:

const imagen = document.querySelector('.card img');
console.log(imagen);

imagen.src = 'img/hacer2.jpg';