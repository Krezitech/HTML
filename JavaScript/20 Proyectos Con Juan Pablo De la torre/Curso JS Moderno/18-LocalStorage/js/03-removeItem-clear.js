


//? Para eliminar

localStorage.removeItem('meses2')                                     //* Se eliminan elementos con "removeItem"


//? Para actualizar un registro

const mesesArreglo = JSON.parse(localStorage.getItem('meses'));       //* Primero se obtiene el valor del arreglo
console.log(mesesArreglo);                                            //* Se tiene el valor original
mesesArreglo.push('Abril');                                           //* Se agrega como si fuera un arreglo (push)
console.log(mesesArreglo);                                            //* Se tiene el nuevo valor actualizado
localStorage.setItem('meses', JSON.stringify(mesesArreglo));          //* Finalmente se sobreescribe el valor original para actualizar el regristro

//! NOTA: en este caso para actualizar registros, cada vez se agrega en este caso "abril" al registro cada vez q se corra (save) pues como se guarda en localstorage, se mantienen los datos


localStorage.clear();                                                 //* Borra todos los registros
