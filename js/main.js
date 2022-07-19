let temporada = 0;
let valorCabania = 0;
let valorTotal = 0;
/* DIAS */
let diasHospedaje = parseInt(prompt("Ingrese la cantidad de días que quiere hospedarse."));
while (diasHospedaje <= 0) {
    diasHospedaje = parseInt(prompt("No es un valor posible. Ingrese la cantidad de días que quiere hospedarse."));
}
/* MES */
let mesHospedaje = parseInt(prompt("Ingrese el mes que quiere hospedarse. Valores del mes 1 al 12."));
while ((mesHospedaje <= 0) || (mesHospedaje > 12)){
    mesHospedaje = parseInt(prompt("No es un valor posible. Ingrese el mes que quiere hospedarse. Valores del mes 1 al 12."));
}
if ((mesHospedaje < 6) || (mesHospedaje > 8)) {
    temporada = 1
} else {
    temporada = 2
}

/* PERSONAS */
let personasHospedaje = parseInt(prompt("Ingrese cuantas personas van a hospedarse. Valores de 2, 3 o 4 personas."));
while ((personasHospedaje < 2) || (personasHospedaje > 4)) {
    personasHospedaje = parseInt(prompt("No es un valor posible. Ingrese cuantas personas van a hospedarse. Opciones: 2, 3 o 4 personas."));
}
if (personasHospedaje == 2) {
    valorCabania = 6000;
} else if (personasHospedaje == 3) {
    valorCabania = 7000;
} else if (personasHospedaje == 4){
    valorCabania = 8000;
} 
/* CLASE PARA HOSPEDAJES */
class Hospedaje {
    constructor(dias, mes, personas){
        this.dias = dias;
        this.mes = mes;
        this.personas = personas;
    }
}
/* ARRAY HOSPEDAJE NUEVO */
let listaHospedajes = [];
/* FUNCION HOSPEDAJE NUEVO */
const nuevoHospedaje = new Hospedaje (diasHospedaje, mesHospedaje, personasHospedaje);
reserva__resumen = () =>{
    valorHospedaje = valorCabania * temporada * diasHospedaje;
    listaHospedajes.push(nuevoHospedaje);
    alert (`Su hospedaje es de ${diasHospedaje} dias, en el mes ${mesHospedaje}, para ${personasHospedaje} personas.\nEl valor parcial es de de $${valorHospedaje}.`);
    return valorTotal;
}
reserva__resumen();
///////////////////////////////
/* CLASE PARA PRECIOS */
class PrecioSumado {
    constructor(precio){
        this.precio = precio;
    }
}
/* ARRAY PRECIO TOTAL */
let sumaPrecios = [];
/* SUMA PRECIO DEL HOSPEDAJE */
let valorParcial = new PrecioSumado (valorHospedaje);
sumaPrecios.push(valorParcial);
/* SERVICIOS ADICIONALES */
/* TRANSLADO */
let valorTranslado = 5000;
let servicioTranslado = (prompt(`¿Quiere agregar a su reserva el servicio de translado del aeropuerto al complejo de cabañas? \nCosto ${valorTranslado}. \n(Respuesta SI/NO)`)).toLowerCase();
if (servicioTranslado == "si"){
    alert (`Se ha añadido el servicio de translado.`)
    valorParcial = new PrecioSumado (valorTranslado);
    sumaPrecios.push(valorParcial);
} else {
    alert (`No ha añadido el servicio de translado.`)
}
/* SPA */
let valorSpa = 5000;
let servicioSpa = (prompt(`¿Quiere agregar a su reserva el servicio de spa?\nCosto ${valorSpa}. \n(Respuesta SI/NO)`)).toLowerCase();
if (servicioSpa == "si"){
    alert (`Se ha añadido el servicio de spa.`)
    valorParcial = new PrecioSumado (valorSpa);
    sumaPrecios.push(valorParcial);
} else {
    alert (`No ha añadido el servicio de spa.`)
}

const totalFinal = sumaPrecios.reduce ((acu, prod) => acu + prod.precio, 0 );
alert (`Su precio final es de ${totalFinal}.`);

////////////////////////
/* AGREGAR DATOS DE INQUILINOS */
class Personas {
    constructor (nombre, edad, dni){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
    }
}
/* ARRAY DE INQUILINOS */
let listaPersonas = []
/* FUNCIÓN DE DATOS */
const agregar__persona = () => {
    let nombre = prompt("¿Cuál es el nombre de la persona a hospedarse?");
    let edad = parseInt(prompt("¿Cuál es la edad de esta persona?"));
    let dni = parseInt(prompt("Escriba el dni, sin puntos."))
    let personaNueva = new Personas (nombre, edad, dni);
    listaPersonas.push(personaNueva);
}
for ( let i = 1 ; i <= personasHospedaje ; i++){
    agregar__persona()
}

listaPersonas.forEach(producto => {
    alert (`El nombre ingresado es ${producto.nombre}, su edad es ${producto.edad} años, con el dni: ${producto.dni}.`)
})