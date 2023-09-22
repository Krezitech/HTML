const actividades = ['Tarea', 'Comer', 'Proyect', 'Estudiar JavaScript'];

for (let pendientes in actividades) {
     console.log(pendientes);
}

// "in" itera sobre objetos
// "of" itera sobre arreglos

console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');

const auto = {
     modelo: 'Kia',
     año: 2022,
     motor: '3.5',
}

for (let categorias in auto) {
     console.log(categorias);
}

console.log(' ');
console.log(' ');

for (let valores in auto) {
     console.log(`${auto[valores]}`);
}

console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');

for (let [llave, valor] of Object.entries(auto)) {
     console.log(llave);
     console.log(valor);
}