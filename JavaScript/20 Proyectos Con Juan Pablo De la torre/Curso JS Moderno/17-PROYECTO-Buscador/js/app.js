//? Variables

const brand = document.querySelector('#brand');
const year = document.querySelector('#year');
const minp = document.querySelector('#minp');
const maxp = document.querySelector('#maxp');
const doors = document.querySelector('#doors');
const transmission = document.querySelector('#transmission');
const color = document.querySelector('#color');

//? Contenedor de resultados

const resultado = document.querySelector('#resultado');                                   //* Se crea la variable "resultado" que nos mostrará los resultados de los filtros

const max = new Date().getFullYear();
const min = max - 10;

//? Generar un objeto con la búsqueda

const searchData = {                                                                      //* Se crea el arreglo vacío a llenar
     brand: '',
     year: '',
     minp: '',
     maxp: '',
     doors: '',
     transmission: '',
     color: '',
}


//? Eventos

document.addEventListener('DOMContentLoaded', () => {                                     //* Tomar todo el documento para "revisar"
     showCars(cars);                                                                          //* Mostrar carros (con resultados de los filtros)


     // llena las opciones de años
     fillyear();
})

//? Event Listener para los "select" de búsqueda

brand.addEventListener('change', (selection) => {                                         //* Se asigna cada categoria en el objeto en cada categoría
     searchData.brand = selection.target.value;

     filterCar();                                                                         //* Se agrega el filtro despues de la selección de la categoría
})
year.addEventListener('change', (selection) => {
     searchData.year = selection.target.value;

     filterCar();
})
minp.addEventListener('change', (selection) => {
     searchData.minp = selection.target.value;

     filterCar();
})
maxp.addEventListener('change', (selection) => {
     searchData.maxp = selection.target.value;

     filterCar();
})
doors.addEventListener('change', (selection) => {
     searchData.doors = parseInt(selection.target.value);

     filterCar();
})
transmission.addEventListener('change', (selection) => {
     searchData.transmission = selection.target.value;

     filterCar();
})
color.addEventListener('change', (selection) => {
     searchData.color = selection.target.value;
     console.log(searchData);

     filterCar();
})


//? Funciones

function showCars(cars) {

     limpiarHTML();

     cars.forEach( car  => {                                                              //* Del arreglo "cars" se crea la variable individual

          const { brand, model, year, doors, transmission, price, color  } = car;         //* Y se destructura en todos sus campos

          const carHTML = document.createElement('p');                                    //* Se le agrega un elemento de "párrafo"

          carHTML.textContent = `
               ${brand} - ${model} - ${year} - ${doors} Doors - Transmission: ${transmission} - Price: ${price} - Color: ${color}
          `;                                                                              //* En ese elemento muestra lo que queremos mostrar (del filtro)
          // insertar resultado

          resultado.appendChild(carHTML);                                                 //* Muestra resultado
     });
}

function limpiarHTML(){
     while (resultado.firstChild) {
          resultado.removeChild(resultado.firstChild);
     }
};

function fillyear () {                                                                    //* Llenar los años

     for ( let i = max; i >= min; i--) {
          const years = document.createElement('option');                                 //* Usa "option" (linea 38 HTML), pq es donde está albergado la opción de años
          years.value = i;                                                                //* Se le agrega al "value" el valor, en este caso el año
          years.textContent = i;                                                          //* Se agrega el texto a visualizar, en este caso al año
          year.appendChild(years);                                                        //* Se agrega al año el valor
     }
}

function filterCar() {
     const resultFilter  = cars.filter( filterBrand ).filter ( filterYear ).filter (filtrarMin).filter(filtrarMax).filter(filterdoor).filter(filterTransmission).filter(filterColor)               //* Se pueden poner varios flitros

     showCars(resultFilter);

     if (resultFilter.length) {
          showCars(resultFilter);
     } else {
          noResultFound();
     }
};

function noResultFound () {

     limpiarHTML();
     const noResultFound = document.createElement('div');
     noResultFound.classList.add('alerta', 'error');
     noResultFound.textContent = 'There were NO results to show, try again with new parameters';
     resultado.appendChild(noResultFound);
}

function filterBrand (car) {                                                              //* Filtor de carros por marca
     const { brand } = searchData;
     if ( brand ) {
          return car.brand === brand;
     }
     return car;
}

function filterYear (car) {
     const { year }  = searchData;
     if ( year ) {
          return car.year === parseInt(year);                                             //* Hay que convertir a enteros
     }
     return car;
}

function filtrarMin (car) {
     const { minp }  = searchData;
     if ( minp ) {
          return car.price >= minp;                                                       //* Hay que convertir a enteros
     }
     return car;
}

function filtrarMax (car) {
     const { maxp }  = searchData;
     if ( maxp ) {
          return car.price <= maxp;                                                       //* Hay que convertir a enteros
     }
     return car;
}

function filterdoor (car) {                                                              //* Filtor de carros por marca
     const { doors } = searchData;
     if ( doors ) {
          return car.doors === doors;
     }
     return car;
}

function filterTransmission (car) {                                                              //* Filtor de carros por marca
     const { transmission } = searchData;
     if ( transmission ) {
          return car.transmission === transmission;
     }
     return car;
}

function filterColor (car) {                                                              //* Filtor de carros por marca
     const { color } = searchData;
     if ( color ) {
          return car.color === color;
     }
     return car;
}