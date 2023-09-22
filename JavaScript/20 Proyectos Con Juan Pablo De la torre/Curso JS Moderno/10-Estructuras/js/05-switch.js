

// Switch

const metodoPago = 'tarjeta';

switch(metodoPago) {
     case 'efectivo':
          console.log(`Pagaste con ${metodoPago}`);
          pagar();
          break;
     case 'cheque':
          console.log(`Pagaste con ${metodoPago}`);
          pagar();
          break;
     case 'tarjeta':
          console.log(`Pagaste con ${metodoPago}`);
          pagar();
          break;
          default:
          console.log('Aún no has seleccionado un método de pago o el método de pago no es soportado');
}

function pagar() {
     console.log('Pagando...');
}