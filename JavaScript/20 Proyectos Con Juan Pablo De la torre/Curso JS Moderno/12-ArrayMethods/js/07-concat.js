const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto','Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];


//? Para concatenar arreglos con "concat" sería:

//! Nota: el orden en que se pongan, así los concatenará

const mesestodos = meses.concat(meses2);
console.log(mesestodos);


const mesestodos2 = meses.concat(meses2,meses3);                      //* La "," hace q puedan concaternarse más a la lista al mismo tiempo
console.log(mesestodos2);


const mesestodos3 = meses.concat(meses2,meses3,'Nuevo Mes');          //* Se puede agregar otro "item", poniéndolo al final
console.log(mesestodos3);




//? Para usar el "Spread Operator":

const mesespread = [...meses, ...meses2, ...meses3];                  //* con "spread", se usan "..." y de igual forma se pueden usar varios con una ","
console.log(mesespread);

const mesespread2 = [...meses, ...meses2, ...meses3, 'OtroMes'];      //* También se pueden agregar al final otro "item"
console.log(mesespread2);


const mesespread3 = [...meses, ...meses2, ...meses3,...'OtroMes'];    //* Pero NO poner "..." pq agregaria un nuevo subespacio por cada letraconsole.log(mesespread);
console.log(mesespread3);