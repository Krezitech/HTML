

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarFooter)

function mostrarOcultarFooter ()  {
     if (footer.classList.contains('activo') ) {
          footer.classList.remove('activo');
          this.classList.remove('activo');                  //* Se puede usar "this"
          this.textContent = 'Idoma & Moneda';
     } else {
          footer.classList.add('activo');
          btnFlotante.classList.add('activo');              //* O bien "btn-flotante"
          this.textContent = 'X Cerrar';
     }
}

