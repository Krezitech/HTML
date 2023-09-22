

//? Usando "QuerySelector"

const card = document.querySelector('.card');                         //* Retorna el primero que encuentra (o sea solo 1)
console.log(card);

//? Podemos tener selectores específicos como en CSS

const info = document.querySelector('.premium .info');                //* Con un espacio indica que es "hijo", sin espacio, seria que están en la misma clase
console.log(info);                                                    //* Mostrará ambos selectores


//? Para seleccionar un segundo elemento como el card de hospedaje

const secondcard = document.querySelector('section.hospedaje .card:nth-child(2)');        //** Con "nth-child()", se puede especificar cual elemento se va a escoger
console.log(secondcard);


//? "Query selector" también permite identificar por "ID"

const formulario = document.querySelector('#formulario');                                 //* Solo mostrara uno, el primero que encuentre
console.log(formulario);


//? Soporta más especificas

const formulario2 = document.querySelector('.contenido-hero #formulario');                //* funciona porque es como CSS
console.log(formulario2);


//? Seleccionar html también se puede

const navegacion = document.querySelector('nav');
console.log(navegacion);