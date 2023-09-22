

//? Con "delegation" se evita también el "bubbling"

const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', (evento) => {
     if (evento.target.classList.contains('titulo')) {           //* Se utiliza un target y un claslist para buscar una clase q coincida y asi evitar el bubbling
          console.log('ya diste click al titulo');
     }
     if (evento.target.classList.contains('precio')) {
          console.log('ya diste click al precio');
     }
     if (evento.target.classList.contains('card')) {
          console.log('ya diste click al card');
     }
})