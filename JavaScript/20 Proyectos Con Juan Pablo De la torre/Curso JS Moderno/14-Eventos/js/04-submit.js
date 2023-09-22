

const formulario = document.querySelector('#formulario');

//? Se puede hacer como función anónima

formulario.addEventListener('submit', (evento) => {
     evento.preventDefault();                               //* Evita las acciones programadas en el código (mandar a otra página, etc)
     console.log(evento);                                   //* se veb todas las opcines y propiedades del evento
     console.log(evento.target.method);                     //* Tipo de método (post en este caso)
     console.log(evento.target.action);                     //* Manda la acción por default del código (http://127.0.0.1:5500/buscador)
});



//? Se puede hacer como función normal

formulario.addEventListener('submit', validarFormulario2)

function validarFormulario2 (evento) {
     evento.preventDefault();
     console.log(evento);
     console.log(evento.target.method);
     console.log(evento.target.action);
}

