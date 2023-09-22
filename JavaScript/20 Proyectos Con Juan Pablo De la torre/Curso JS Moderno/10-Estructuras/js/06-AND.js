const usuario = true;
const puedePagar = true;

if (usuario && puedePagar) {
     console.log('Gracias por su compra');
} else if (!usuario && !puedePagar) {
     console.log('NO es usuario NI puede pagar');
} else if (!usuario) {
     console.log('Crea una cuenta o Inicia sesión');
} else if (!puedePagar) {
     console.log('NO tienes fondos para pagar');
} else {
     console.log('NO puedes comprar');
}