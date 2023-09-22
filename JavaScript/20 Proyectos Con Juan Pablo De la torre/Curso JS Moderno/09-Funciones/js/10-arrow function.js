const aprendiendo = function () {
     console.log('Aprendiendo JavaScript');
}

const aprendiendo2 =  () =>  {                         // En este caso " function () es igual a () =>"
     console.log('Aprendiendo arrow functions en JavaScript');
}

aprendiendo2();

// Pero si es una sola línea la función, se puede reescribir de la siguiente forma:

const aprendiendo3 =  () => 'Aprendiendo funciones de una sola línea en JavaScript';

console.log(aprendiendo3());