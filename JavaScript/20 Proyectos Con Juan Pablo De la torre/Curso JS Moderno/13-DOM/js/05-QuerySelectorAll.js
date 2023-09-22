



//? Usando "QuerySelectorall"

const card = document.querySelectorAll('.card');                      //* Retorna todos los elementos
console.log(card);


const formulario = document.querySelectorAll('#formulario');          //* Mostrará los dos elementos
console.log(formulario);


//! Todos los "queryselector" funcionan con "all"


const noExiste = document.querySelectorAll('No-existe');
console.log(noExiste);                                                //* Envía un nodelist vacío []