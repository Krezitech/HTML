const aprendiendo = function (tec, tec2) {
     console.log(`Aprendiendo ${tec} y ${tec2}`);
}
aprendiendo('JavaScript','HTML');




const aprendiendo2 = tec => `Aprendiendo arrow functions en ${tec}`;                                     // Cuando es una sola línea se puede omitir el paréntesis si es UNA sola variable a llamar

console.log(aprendiendo2("python"));




const aprendiendo3 = (tec,tec2) => `Aprendiendo arrow functions en ${tec} junto con ${tec2}`;            // Si son 2 o mas variables, requierre paréntesis

console.log(aprendiendo3('PHP','CSS'));