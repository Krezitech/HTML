

//? Como cuando se llenan formularios, como en Tw que te dice el número de caracteres

//! "addEventListener" SIEMPRE será una función


const busqueda = document.querySelector('.busqueda');                 //* Buscámos dónde vamos a poner el "trigger"

busqueda.addEventListener('keydown', () => {                          //* Cuando comenzamos a escribir
     console.log('Escribiendo...');
})

busqueda.addEventListener('keyup', () => {                            //* Cuando dejamos de escribir
     console.log('Escribiendo UP...');
})

busqueda.addEventListener('blur', () => {                             //* Cuando salimos de la sección donde estábamos
     console.log('blur');
})

busqueda.addEventListener('copy', () => {                             //* Se activa cuando copiamos algo
     console.log('copy');
})

busqueda.addEventListener('paste', () => {                            //* Se activa cuando pegamos algo
     console.log('paste');
})

busqueda.addEventListener('cut', () => {                              //* Se activa cuando cortamos algo
     console.log('cut');
})

busqueda.addEventListener('input', () => {                            //* Se activa cuando hacemos algo
     console.log('Con cualquier evento excepto el blur');
})

busqueda.addEventListener('input', (evento) => {
     console.log(evento);                                             //* Se ve el evento (que pasó)
     console.log(evento.type);                                        //* Muestra el TIPO de evento
     console.log(evento.target);                                      //* Muestra DONDE escribió
     console.log(evento.target.value);                                //* Muestra lo QUE+ se escribió
     if(evento.target.value === ''){                                  //* Condicional para ver si NO se hizo nada
          console.log('No se llenó nada');
     }
})