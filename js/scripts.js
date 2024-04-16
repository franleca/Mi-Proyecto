


// CONDICIONALES



let resultado = prompt("Elija 1 gusto de helado extra para probar: Chocolate, Frutilla, Vainilla o Crema. Caso contrario escriba Agua, para obtener una botella.");


if (   (resultado === "Chocolate") || (resultado === "chocolate") || (resultado === "Frutilla") || (resultado === "frutilla") || (resultado === "Vainilla") || (resultado === 

"vainilla") || (resultado === "Crema") || (resultado === "crema")    ) {

    alert("Usted a seleccionado el gusto "+ resultado);
    
} else if (   (resultado === "Agua") || (resultado === "agua")   ) {

 alert("Usted a preferido optar por una bebida");

} else {
    
    alert("Su producto seleccionado no es valido, podra elegir uno nuevo mas tarde cuando finalice el menu de compras rapido");
    
};



// CICLOS



for (let indice = 0; indice <= 10; indice++) {


    let nums = Number(prompt("Ingrese el numero de potes de helado a comprar, tenga en cuenta que no puede ser un numero muy elevado:"));


    if ((nums <= 6) && (nums > 0 )) {

    document.write(`El numero de potes seleccionados anteriormente es ${nums}`);
    break; 

    } else if ((nums <= 0 ) || (nums > 6 )) {

        document.write(`El numero ${nums} no pudo ser registrado, bien porque excede nuestra capacidad o por ser menor a 1 <br>`);
        
    } else {

        document.write(`Usted no ingreso un numero en esta ocasion <br>`);
       
    }
  

    if (indice === 10) {

        alert("Se acabaron los intentos");
        
    }   

}




// El Switch en teoria es una mejor forma de practicar el if - else if - else

let letr = prompt("Seleccione su barrio; escriba en mayusculas A por Villa Luro, B por Velez Sarsfield, C por Floresta, D por Monte Castro y E por Parque Avellaneda");


switch (letr) {

    case "A":
        alert("Usted selecciono Villa Luro");
        break;

    case "B":
        alert("Usted selecciono Velez Sarsfield");
        break;  

    case "C":
        alert("Usted selecciono Floresta");
        break;

    case "D":
        alert("Usted selecciono Monte Castro");
        break;

    case "E":
        alert("Usted selecciono Parque Avellaneda");
        break;

    default:
    alert("No ingreso lo solicitado, podra hacerlo mas adelante cuando finalice el menu de compras rapido");
    break;

}



// FUNCIONES



let primerDatoSumar = prompt("Por favor para registrar su direccion anote el nombre de su calle");

let segundoDatoSumar = Number(prompt("Ahora para finalizar coloque el numero de su calle, tenga en cuenta que podra modificar estos datos en el futuro"));


if (segundoDatoSumar > 0) {

    sumar(primerDatoSumar, segundoDatoSumar);
    
} else {

    alert("El numero de calle que ingreso es incorrecto, no se pudo procesar su direccion");
    
}  


// Como podemos ver la funcion fue llamada mas arriba, esto es asi porque puede hacerse en cualquier lugar, inclusive se puede colocar dentro, como ser en el if

function sumar(primerDatoSumar, segundoDatoSumar) {

    alert("Su direccion ingresada es:"+" "+ primerDatoSumar +" "+ segundoDatoSumar);
}



// NOTA : No emplee console.log el cual enseña el resultado en la consola ya que personalmente le quitaba realismo al trabajo, normalmente las personas no lo ven







