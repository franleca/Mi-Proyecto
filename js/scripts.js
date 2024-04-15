

let homero = {

    nombre:"Homero",
    edad:40,
}

console.log(homero.nombre);
console.log(homero.edad);


homero.edad = 50;
console.log(homero.edad);

homero.direccion = "Av. SiempreViva 743";
console.log(homero.direccion);




function FamSimpson(nombre, edad) {

    this.nombre = nombre;
    this.edad = edad;
}

const homer = new FamSimpson("homero", 39);
const marge = new FamSimpson("Marge", 36);

console.log(homer.nombre);
console.log(marge.nombre);


/*
https://codeium.com/live/general
*/








/*
function sumar(primerNumSumar, segundoNumSumar) {

    console.log(primerNumSumar + segundoNumSumar);
}

let ejemploSinReturn = sumar(1, 2);

console.log(ejemploSinReturn);


function sumar2(primerNumSumar, segundoNumSumar) {

    return primerNumSumar + segundoNumSumar;
}

let ejemploSinReturn2 = sumar2(1, 2);

console.log(ejemploSinReturn2);
*/


















