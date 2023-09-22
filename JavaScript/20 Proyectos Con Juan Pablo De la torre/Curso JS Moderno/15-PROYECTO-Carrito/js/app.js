//? Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

//? Crear "listeners"

cargarEventListeners();

function cargarEventListeners(){
     listaCursos.addEventListener('click', agregarCurso);                                       //* Click para agregar un item al carrito
}


//? Funciones


//+ Función de encontrar el botón del para agregar al carrito

function agregarCurso (eventoAddCurso) {

     eventoAddCurso.preventDefault();

     if ( eventoAddCurso.target.classList.contains ('agregar-carrito')){                           //* Busca si se da click en lka clase q contenga "agregar-carrito"
          const cursoSeleccionado = eventoAddCurso.target.parentElement.parentElement;             //* Con esto se seleccionan los padres (el card completo), para poder escoger de alli la info deseada
          leerDatosCurso(cursoSeleccionado);
     }
}

//+ Leer contenido HTML al que dimos click y extraer su información

function leerDatosCurso (cursel) {
     console.log(cursel);

     const infoCurso = {
          imagen: cursel.querySelector('img').src,                                             //* Se obtiene la imagen del curso
          titulo: cursel.querySelector('h4').textContent,                                      //* Se obtiene el titulo del curso
          precio: cursel.querySelector('.precio span').textContent,                            //* Se obtiene el precio
          idCurso: cursel.querySelector('a').getAttribute('data-id'),                          //* Se obtiene el id del curso
          cant:1,                                                                              //* La cantidad de cursos
     }

     articulosCarrito = [...articulosCarrito, infoCurso];                                      //* Agrega elementos al arreglo del carrito con lo anterior

     console.log(articulosCarrito);

     carritoHTML();

}

//? Mostrar carrito de compras en el HTML

function carritoHTML () {

     limpiarHTML()                                                                             //* Limpiamos el buffer para que no se dupliquen

     articulosCarrito.forEach( (cursel) => {                                                   //* Revisa para todos los cursos seleccionados

     const row = document.createElement('tr');                                                 //* Crea una tabla nueva

     row.innerHTML = `
     <td>
          ${cursel.titulo}
     </td>
     `;                                                                                        //* En cada tabla se le agrega lo que está en la tabla

     contenedorCarrito.appendChild(row);                                                       //* Agrega el HTML del cartito en el tbody
});
}


//? Elimina los cursos del tbody

function limpiarHTML () {

     // contenedorCarrito.innerHTML = '';                                                      //* Forma lenta

     while(contenedorCarrito.firstChild) {                                                     //* Revisa si hay "hijos" y en caso de q si, los borra
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
     }
}
