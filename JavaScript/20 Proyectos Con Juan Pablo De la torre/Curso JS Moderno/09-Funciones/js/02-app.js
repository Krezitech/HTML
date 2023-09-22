
sumar();                                // Si lo lee (hoisting)
function sumar() {
     console.log (2+2);
}


sumar2();                               // No lo lee
const sumar2 = function() {
     console.log(3+3);
}

