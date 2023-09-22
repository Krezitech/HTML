

const auth = false;
const puedePagar = true;

// El "?" equivale al "if"
// El ":" equivale al "else"
// En caso de que no mande nada en el "else", se pone "null"
// Se puede usar el && como "and"
// También funciona el || como "or"

console.log(auth && puedePagar ? 'Si está autenticado y puede pagar' : 'No está autenticado o No puede pagar');
console.log(auth || puedePagar ? 'Si está autenticado o puede pagar' : 'No está autenticado Ni puede pagar');

// También se pueden anidar los "ifs"

console.log(auth ? puedePagar ? 'Si está autenticado y puede pagar' : 'Si está autenticado, no puede pagar' : 'No está autenticado o No puede pagar');



