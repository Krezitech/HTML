document.addEventListener('DOMContentLoaded', function() {                                  //* Esto es para ejecutarse despues de "descargar" el código así sabe q puede tomar

     const email = {
          email: '',
          asunto: '',
          mensaje: '',
     }

     //? Seleccionar los elementos de la interfaz

     const inputEmail = document.querySelector('#email');
     const inputAsunto = document.querySelector('#asunto');
     const inputMensaje = document.querySelector('#mensaje');
     const formulario = document.querySelector('#formulario');
     const btnSubmit = document.querySelector('#formulario button[type="submit"]');
     const btnReset = document.querySelector('#formulario button[type="reset"]');
     const spinner = document.querySelector('#spinner');

     //? Asignar eventos

     inputEmail.addEventListener('input', validar);           //* Se asigna el "listener" para cada variable en cada eventom "blur" hasta q cambies de campo, input para que sea en "tiempo real"
     inputAsunto.addEventListener('input', validar);
     inputMensaje.addEventListener('input', validar);

     formulario.addEventListener('submit', enviarEmail);                   //* Se agrega el evento de que se "envió" un email

     btnReset.addEventListener('click', function(eventfillbox) {
          eventfillbox.preventDefault();                                   //* Evita que se ejecute de manera automática el botón de "reset" y hay que hacerlo manualmente

          resetFormulario();
     });

     function enviarEmail(eventfillbox) {                                  //* Una vez que está llena las cajas se procede a:
          eventfillbox.preventDefault();                                   //* Evita que haga por "default" algo

          spinner.classList.add('flex');                                   //* Agrega la clase "flex"
          spinner.classList.remove('hidden');                              //* Quita la clase "hidden" para que aparezca el "spinner"

          setTimeout(() => {                                               //* Ponemos un temporizador de 3 segundos para simular el envío del email
               spinner.classList.remove('flex');                           //* Se quita la clase "flex"
               spinner.classList.add('hidden');                            //* Se agrega la clase "hidden" para ocultar el "spinner"

               resetFormulario();

               const alertaExito = document.createElement('P');            //* Una alerta
               alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
               alertaExito.textContent = 'Mensaje enviado correctamente';

               formulario.appendChild(alertaExito);

               setTimeout(() => {
                    alertaExito.remove();
               }, 3000);

          },3000)

     }

     function validar (eventfillbox) {

          if (eventfillbox.target.value.trim() === '') {                                                                     //* Genera la función que va a revisar el valor insertado en "las cajas"
               mostrarAlerta(`El campo ${eventfillbox.target.id}, es obligatorio`, eventfillbox.target.parentElement);       //* Con el filtro de target.id se puede personalizar el "texto", y se usa como referencia para ponerlo en el html, con el "appendChild"
               email[eventfillbox.target.name] = '';
               comprobarEmail();
               return;
          }

          if ( eventfillbox.target.id === 'email' && !validarEmail(eventfillbox.target.value)) {         //* Evalua si el id a revisar corresponde a "email" y si este es un email valido o no correcto, NOTA: se niega para q sea cuando NO pase la validación
               mostrarAlerta('El Email NO es correcto', eventfillbox.target.parentElement);              //* Lo acomoda despues del campo
               email[eventfillbox.target.name] = '';
               comprobarEmail();
               return;
          }

          limpiarAlerta(eventfillbox.target.parentElement);                                              //* Usa la misma referencia para saber si esta en el "lugar" correcto del html

          email[eventfillbox.target.name] = eventfillbox.target.value.trim().toLowerCase();              //* Rellena el formulario con los valores que se escriban, quita espacios y convierte en minúsculas

          comprobarEmail();                                                                              //* Comprobar el objeto de "email"
     }

     function mostrarAlerta(mensaje, referencia){

          const alerta = referencia.querySelector('.bg-red-600');                         //* Comprueba si hay una alerta existente con la clase "bg-red-600", en la referencia donde está

          if (alerta) {
               alerta.remove();
          }

          const error = document.createElement('P');                                      //* Genera la alerta en HTML, con un elemento "P"
          error.textContent = mensaje;                                                    //* Se le asigna un valor al elemento creado
          error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

          referencia.appendChild(error)                                                   //* Agrega a "formulario" el error
     }

     function limpiarAlerta (referencia) {                                                //* Usa misma "referencia" para ubicar "donde" actuar
          const alerta = referencia.querySelector('.bg-red-600');                         //* Por la clase lo busca si esta activa

          if (alerta) {
               alerta.remove();                                                           //* De estar activa, la quita
          }
     }

     function validarEmail (email) {                                                      //* Función para validar que el correo sea un correo electrónico
          const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/                 //* es una función de javaScript para validar el formato de email
          const resultado = regex.test(email);                                            //* se hace el test de la función en "email" para sabre si es "true" o "false"
          return resultado;                                                               //* Se obtiene el resultado
     }

     function comprobarEmail () {
          if (Object.values(email).includes('')) {                                        //* comprueba si hay algún campo en blanco con "true" si lo hay hasta que no haya y sea "false"
               btnSubmit.classList.add('opacity-50');
               btnSubmit.disabled = true;
               return;
          }
          btnSubmit.classList.remove('opacity-50');
          btnSubmit.disabled = false;

     }

     function resetFormulario () {
          email.email = '';                                                //* Se ponen en blanco los campos despues de ejecutar el reset
          email.asunto = '';
          email.mensaje = '';

          formulario.reset();                                              //* Borra todo el formulario
          comprobarEmail();                                                //* Manda la comprobación de las "cajas" llenas para quitar el color de "envío"
     }

});
