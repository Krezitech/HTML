

//? Loa eventos de "scroll" se llevan acabo en la ventana global

window.addEventListener('scroll', ( ) => {
     const scrollPx = window.scrollY;                  //* Podemos ver los movimientos en pixeles verticalmente

     console.log(scrollPx);                            //* Cantidad de pixeles varia, sube o baja dependiendo de la posición
})


window.addEventListener('scroll', ( ) => {



     const premium = document.querySelector('.premium');
     const ubicacion = premium.getBoundingClientRect();               //* Te dice donde esta un elemento en la página para hacer algún trigger

     if (ubicacion.top < 100) {
          console.log('Ya llegaste!!!!')
     } else {
          console.log('Sigue scroleando...')
     }
})