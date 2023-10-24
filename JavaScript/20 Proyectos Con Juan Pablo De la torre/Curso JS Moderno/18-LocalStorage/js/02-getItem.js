


const nombre = localStorage.getItem('nombre');                                  //* con "getItem" se obtiene el valor del "storage"
console.log(nombre);

//? Si se manda llamar un valor que no existe, este aparecerá como "null"

const productoJSON = localStorage.getItem('producto');                          //* Se manda llamar algo (en este caso un objeto)
console.log(JSON.parse(productoJSON));                                          //* Con "JSON.parse()" se regresa a "objeto"

const mesesJSON = localStorage.getItem('meses2');
const mesesArray = JSON.parse(mesesJSON);                                       //* De igual forma regresa a forma de "arreglo"
console.log(mesesArray);

