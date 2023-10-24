const diaHoy = new Date();

let valor;
let valor1;
let valor2;
let valor3;


valor = diaHoy;

console.log(valor);
console.log(typeof valor);                        //* Las fechas son objetos


const diaHoy1 = new Date('09-06-1984');           //* puedes ver una fecha especifica
valor1 = diaHoy1;

console.log(valor1);

valor2 = diaHoy;
valor2 = diaHoy.getFullYear();                    //* Da el año
valor2 = diaHoy.getMonth();                       //* Da el mes -1 o sea, Diciembre es mes 11 y enero mes 0
valor2 = diaHoy.getMinutes();                     //* da el minuto actual
valor2 = diaHoy.getHours();                       //* da la hora
valor2 = diaHoy.getTime();                        //* da los milisegundos desde 1 de enero de 1970


console.log(valor2);

console.log(diaHoy);

valor3 = diaHoy;
valor3 = diaHoy.setFullYear(2010);
console.log(valor3);