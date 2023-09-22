
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
}

reproductor.reproducir(80);
reproductor.reproducir(50);
reproductor.reproducir(230);
reproductor.reproducir(35);

reproductor.pausar();

reproductor.borrar(22);

reproductor.crearPlayList('Pa Programar');

reproductor.reproducirPlayList('Pa Programar');