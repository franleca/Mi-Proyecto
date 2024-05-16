


// AVISO: VOY A DEJAR LOS PROMPTS PREVIOS PARA QUE VEAN EL PROCESO

// CONDICIONALES



let resultado = prompt("Elija 1 gusto de helado extra para probar: Chocolate, Frutilla, Vainilla o Crema. Caso contrario escriba Agua, para obtener una botella.");


if (   (resultado === "Chocolate") || (resultado === "chocolate") || (resultado === "Frutilla") || (resultado === "frutilla") || (resultado === "Vainilla") || (resultado === 

"vainilla") || (resultado === "Crema") || (resultado === "crema")   ) {

    alert("Usted a seleccionado el gusto "+ resultado);
    
} else if (   (resultado === "Agua") || (resultado === "agua")   ) {

 alert("Usted a preferido optar por una bebida");

} else {
    
    alert("Su producto seleccionado no es valido, debera modificarlo mas adelante cuando continue con la compra");
    
};



// CICLOS



for (let indice = 0; indice <= 10; indice++) {


    let nums = Number(prompt("Ingrese el numero de potes de helado a comprar, tenga en cuenta que no puede ser un numero muy elevado:"));


    if ((nums <= 6) && (nums > 0 )) {

    console.log(`El numero de potes seleccionados anteriormente es ${nums}`);
    break; 

    } else if ((nums <= 0 ) || (nums > 6 )) {

        console.log(`El numero ${nums} no pudo ser registrado, bien porque excede nuestra capacidad o por ser menor a 1 <br>`);
        
    } else {

        console.log(`Usted no ingreso un numero en esta ocasion <br>`);
       
    }
  

    if (indice === 10) {

        alert("Se acabaron los intentos");
        
    }   

}




// El Switch en teoria es una mejor forma de practicar el if - else if - else

let letr = prompt("Seleccione su barrio; escriba en mayusculas A por Villa Luro, B por Velez Sarsfield, C por Floresta, D por Monte Castro y E por Parque Avellaneda");


switch (letr) {

    case "A":
        alert("Usted selecciono Almagro");
        break;

    case "B":
        alert("Usted selecciono Boedo");
        break;  

    case "C":
        alert("Usted selecciono Caballito");
        break;

    default:
    alert("No ingreso lo solicitado, podra hacerlo mas adelante despues de finalizar este menu de compras");
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




// CLASES Y OBJETOS


// En este caso voy a usar clases y objetos para poder calcular el gasto mensual de la heladeria en proveedores

class Proveedor {

    constructor(nombre, mercancia, precioSemanal, dni, empresa) {

      this.nombre = nombre;
      this.mercancia = mercancia;
      this.precioSemanal = precioSemanal;
      this.dni = dni;
      this.empresa = empresa;
    }
  
    actualizarMercancia(nuevaMercancia) {

        this.mercancia = nuevaMercancia;
        console.log(`La mercancia ${this.mercancia} se cambio por ${nuevaMercancia}`);
    }

    actualizarPrecioSemanal(nuevoPrecio) {

        this.precioSemanal = nuevoPrecio;
        console.log(`El precio de ${this.nombre} se elevo a ${nuevoPrecio}`);
    }

    calcularPrecioMensual() {

      return this.precioSemanal * 4;
    }
  
}
  

let proveedor1 = new Proveedor("Pedro", "Frutas", 12000, 43603173, "Verduleria Popular");
let proveedor2 = new Proveedor("Anna", "Chocolates", 15000, 42081456, "Chocolateria Recoleta");
let proveedor3 = new Proveedor("Santiago", "Cremas", 14500, 41292776, "Cremin");


proveedor1.actualizarMercancia("Frutas y Frutos Secos");
proveedor1.actualizarPrecioSemanal(13500);

console.log(proveedor1.calcularPrecioMensual());  
console.log(proveedor2.calcularPrecioMensual());
console.log(proveedor3.calcularPrecioMensual());




// ARRAYS Y METODOS SOBRE ELLOS


// Ahora vamos a hacer un array para poder ir sumando los diferentes envases con sus precios en donde se colocara el helado para su venta

class Envase {

    constructor(nombre, tamaño, precio, material) {

      this.nombre = nombre;
      this.tamaño = tamaño;
      this.precio = precio;
      this.material = material;
    }
  
}

  
const envases = [];

envases.push(new Envase("Pote Pequeño", "2 Bochas", 1500, "Telgopor"));
envases.push(new Envase("Cuchurucho", "2 Bochas", 1750, "Comestible"));
envases.push(new Envase("Pote Chico", "1/4 Kg", 4000, "Telgopor"));
envases.push(new Envase("Pote Mediano", "1/2 Kg", 7000, "Telgopor"));
envases.push(new Envase("Pote Grande", "1 Kg", 12000, "Telgopor"));


// A partir de aqui encontramos los metodos de busqueda y transformacion

const precioEnOferta = envases.filter((es) => es.precio > 6000);
console.log(precioEnOferta);


envases.forEach((prod) => {

    console.log(prod);
});




// DOM Y EVENTOS


function enviarEncuesta() {

    const nombrePersona = document.getElementById("nombre").value;

    const metodoPago = document.getElementById("metodo-pago").value;

    const cuotas = document.getElementById("cuotas").value;
  
    // Con los datos se podria llegar a hacer algo, como enviarlos a un servidor
    console.log(
      `Nombre: ${nombrePersona}, Metodo de Pago: ${metodoPago}, N° de Cuotas: ${cuotas}`
    );
  }
  document
    .getElementById("formulario-compra")
    .addEventListener("submit", function (event) {
      event.preventDefault(); 
      enviarEncuesta();
      
});
  








