

function sumar(a,b){
     return a+b;
}
const resultado = sumar(5,6);
console.log(resultado);




function sumar2(a,b){
     resultado2 = a+b;
}
sumar2(5,77)
console.log(resultado2);

// Ejemplo más avanzado

let total = 0;

function agregarCarrito(precio) {
     return total += precio;
}

function calcularImpuesto (total) {
     return total * 1.16;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

const totalPagar = calcularImpuesto(total);

console.log(total);

console.log(`El total a pagar con impuestos es: ${totalPagar}`);