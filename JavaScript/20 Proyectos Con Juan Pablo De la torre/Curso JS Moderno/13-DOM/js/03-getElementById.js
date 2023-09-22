

//? Solamente se DEBE ocupar un ID con un nombre específico por documento

const formulario = document.getElementById('formulario');
console.log(formulario);                                              //* Retorna el formulario, y si hubiera más, solamente envía el primero en encontrar


const noExiste = document.getElementById('noExiste');
console.log(noExiste);                                                //* Retorna "null" si no existe

