
const dinero = 300;
const totalAPagar = 500;
const tarjeta = false;
const cheque = false;

if( dinero >= totalAPagar) {
     console.log('Si me alcanza para pagar');
}else if (cheque){
     console.log('Si puedo pagar con cheque')
}else if (tarjeta){
     console.log('Si puedo pagar con la tarjeta')
}else {
     console.log('No me alcanza para pagar');
}

