// Variables
const formulary = document.querySelector('#formu');                             //* se selecciona el formulario del id "form"
const taskList = document.querySelector('#do-list');                            //* se selecciona de la lista "do-list"
let toDoList = [];                                                              //* Comienza el objeto vacío pero se usa "let" para poder editarla



// Event Listeners
eventListeners();                                                               //* Escucha si se agregó algo


function eventListeners () {
     formulary.addEventListener('submit', addToList);                           //* Se agrega con el boton de "submit" a la lista "todolist" y agrega un nuevo "item"
     taskList.addEventListener('click', deleteTask);                            //* con esot borra la tarea
     document.addEventListener('DOMContentLoaded', () => {
          toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];        //* si esta sin nada, en vez de null se vacia con []
          createHTML();                                                         //* Crea nuevamente la siguiente tarea para la lista
     });
}



// Funciones
function addToList (event) {
     event.preventDefault();                                                    //* Evita se abra al iniciar

     const task = document.querySelector('#task').value;

     if (task === '') {                                                         //* validación de que no este vacío
          showEmpty('You did not add anything to the list')
          return;                                                               //* Si está "vacío", el return, evita se sigan haciendo más líneas de código
     }

     const taskObjt = {                                                         //* se crea un arreglo
          id: Date.now(),                                                       //* con la fecha en milisegundos y con el texto del mensaje o sea la tarea (task)
          task                                                                  //* cuando estos son iguales (task: task ), s epuede dejar con uno solo
     }

     toDoList = [...toDoList, taskObjt];                                        //* Añadir al arreglo de lista

     createHTML()                                                               //* Crea las listas en HMTL que agregas de los items

     formulary.reset();                                                         //* Borra lo que exté en la caja de texto para agregar otra cosa nueva
}

function showEmpty (error) {
     const errorMessage = document.createElement('p');                          //* Si hay un error (esta vacío), se crea un párrafo para escribir un mensaje de error
     errorMessage.textContent = error;                                          //* crea la variable "errorMessage" y se le asigna "el error"
     errorMessage.classList.add('error');                                       //* tmb se le agrega la clase "error"

     const contenent = document.querySelector('#contenido');                    //* se toma el id "contenido" como referencia
     contenent.appendChild(errorMessage);                                       //* se le agrega el mensaje de error al final del contenedor

     setTimeout(() => {
          errorMessage.remove();                                                //* Elimina la alerta después de 3 segundos
     }, 3000);
}

function createHTML() {                                                         //* Muestra el listado de las tasks

     cleanHTML();                                                               //* Se limpia primero la lista anterior

     if (toDoList.length > 0) {                                                 //* Revisa que NO esté vacío

          toDoList.forEach( task => {                                           //* para cada tarea le crea:

               const btnDelete = document.createElement('a');                   //* Agregar boton de eliminar
               btnDelete.classList.add('delete-task');                          //* agrega clase "delete-task"
               btnDelete.innerText = 'X';                                       //* le agrega la x a la orilla


               btnDelete.onclick = () => {                                      //* lo hace "boton" al hacer "click"
                    deleteTask(task.id);                                        //* llama a la función con el parametro especifico de borrado usando el id (segundo)
               }


               const li = document.createElement('li');                         //* una lista
               li.innerText = task.task;                                        //* con el valor del "texto de la caja"

               li.appendChild(btnDelete);

               taskList.appendChild(li);                                        //* y se agrega a la lista
          })
     }

     syncStorage ();                                                            //* Agrega tasks a local storage
}

function syncStorage () {
     localStorage.setItem('toDoList', JSON.stringify(toDoList));                //* lo agrega a localstorage y lo convierte en arreglo la lista "todolist"
}

function deleteTask(id){
     toDoList = toDoList.filter( task => task.id !== id);                       //* filtra los demas q no se seleccionen (con la X)
     createHTML();
}

function cleanHTML() {
     while( taskList.firstChild) {                                              //* Toma el primer "item" y mientras este exista
          taskList.removeChild(taskList.firstChild);                            //* Lo borrará
     }
}