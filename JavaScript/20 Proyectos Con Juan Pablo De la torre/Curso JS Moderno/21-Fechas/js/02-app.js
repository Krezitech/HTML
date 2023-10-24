const diaHoy = new Date();

moment.locale('es');                                             //* se asigna el tipo de formato (en español)

console.log(moment().format('MMMM Do YYYY h:mm:ss a'));          //* puede uno modificar como se muestran

console.log(moment().format('LLLL', diaHoy));                    //* te la da como "martes, 24 de octubre de 2023 12:30"

console.log(moment().add(3,'days').calendar());                  //* se pueden agregar "dias" al calendario o auna fecha, como para un cupón de tiempo limitado