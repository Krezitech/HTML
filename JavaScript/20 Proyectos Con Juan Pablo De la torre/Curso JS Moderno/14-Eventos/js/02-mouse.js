

const nav = document.querySelector('.navegacion');

//? Registrar un evento

nav.addEventListener('click', () =>{                        //* Lee cuando se hace click
     console.log('click en nav');
})


nav.addEventListener('mouseenter', () =>{                   //* Lee cuando se "entra", en este caso a la navegación
     console.log('Entrando en la navegación');
     nav.style.backgroundColor = 'white';
})


nav.addEventListener('mouseout', () =>{                     //* Lee cuanmdo se "sale", en este caso de la navegación
     console.log('saliendo de la navegación');
     nav.style.backgroundColor = 'transparent';
})


nav.addEventListener('mousedown', () =>{                    //* Es como "click"
     console.log('mouse down');
})

nav.addEventListener('mouseup', () =>{                      //* Se activa cuando se "suelta" el "click"
     console.log('mouse UP');
})


nav.addEventListener('dblclick', () =>{                      //* Lee cuando se da doble "click"
     console.log('DOBLE click');
})