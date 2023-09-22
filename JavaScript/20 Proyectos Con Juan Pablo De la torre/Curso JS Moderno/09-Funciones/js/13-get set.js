
/*             Aquí como funciones normales


const reproductor = {
     reproducir: function(id){
          console.log(`Reproduciendo la canción número ${id}`);
     },
     pausar : function() {
          console.log('pausando...');
     },
     borrar : function (id) {
          console.log(`Borrando canción ${id}`);
     },
     crearPlayList : function (id) {
          console.log(`Creando la playlist ${id}`)
     },
     reproducirPlayList : function (id) {
          console.log(`Reproduciendo la playlist ${id}`);
     }
}*/


//             Aquí como arrow functions

const reproductor = {
     reproducir: id => console.log(`Reproduciendo la canción número ${id}`),
     pausar : () => console.log('pausando...'),
     borrar :  id => console.log(`Borrando canción ${id}`),
     crearPlayList :  id => console.log(`Creando la playlist ${id}`),
     reproducirPlayList :  id => console.log(`Reproduciendo la playlist ${id}`),

     set nuevacancion(cancion) {
          this.cancion = cancion;
          console.log(`Añadiendo ${cancion}`);
     },

     get obtenercancion () {
          console.log(`${this.cancion}`);
     }
}


reproductor.nuevacancion = 'Enter Sandman';
reproductor.obtenercancion;






reproductor.reproducir(80);
reproductor.reproducir(50);
reproductor.reproducir(230);
reproductor.reproducir(35);

reproductor.pausar();

reproductor.borrar(22);

reproductor.crearPlayList('Pa Programar');

reproductor.reproducirPlayList('Pa Programar');