let temporada = 0;
let valor__cabania = 0;
let valor__total = 0;
/* DIAS */
let dias__hospedaje = parseInt(prompt("Ingrese la cantidad de días que quiere hospedarse."));
while (dias__hospedaje <= 0) {
    dias__hospedaje = parseInt(prompt("No es un valor posible. Ingrese la cantidad de días que quiere hospedarse."));
}
/* MES */
let mes__hospedaje = parseInt(prompt("Ingrese el mes que quiere hospedarse. Valores del mes 1 al 12."));
while ((mes__hospedaje <= 0) || (mes__hospedaje > 12)){
    mes__hospedaje = parseInt(prompt("No es un valor posible. Ingrese el mes que quiere hospedarse. Valores del mes 1 al 12."));
}
if ((mes__hospedaje < 6) || (mes__hospedaje > 8)) {
    temporada = 1
} else {
    temporada = 2
}

/* PERSONAS */
let personas__hospedaje = parseInt(prompt("Ingrese cuantas personas van a hospedarse. Valores de 2, 3 o 4 personas."));
while ((personas__hospedaje < 2) || (personas__hospedaje > 4)) {
    personas__hospedaje = parseInt(prompt("No es un valor posible. Ingrese cuantas personas van a hospedarse. Opciones: 2, 3 o 4 personas."));
}
if (personas__hospedaje == 2) {
    valor__cabania = 6000;
} else if (personas__hospedaje == 3) {
    valor__cabania = 7000;
} else if (personas__hospedaje == 4){
    valor__cabania = 8000;
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
let lista__hospedajes = []
/* FUNCION HOSPEDAJE NUEVO */
const nuevo__hospedaje = new Hospedaje (dias__hospedaje, mes__hospedaje, personas__hospedaje);
reserva__resumen = () =>{
    valor__total = valor__cabania * temporada * dias__hospedaje;
    lista__hospedajes.push(nuevo__hospedaje);
    alert (`Su hospedaje es de ${dias__hospedaje} dias, en el mes ${mes__hospedaje}, para ${personas__hospedaje} personas. El valor es de de $${valor__total}.`);
}
reserva__resumen();
////////////////////////
/* AGREGAR DATOS DE INQUILINOS */
class Personas {
    constructor (nombre, edad, dni){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
    }
}
let lista__personas = []
const agregar__persona = () => {
    let nombre = prompt("¿Cuál es el nombre de la persona a hospedarse?");
    let edad = parseInt(prompt("¿Cuál es la edad de esta persona?"));
    let dni = parseInt(prompt("Escriba el dni, sin puntos."))
    let persona__nueva = new Personas (nombre, edad, dni);
    lista__personas.push(persona__nueva);
}
for ( let i = 1 ; i <= personas__hospedaje ; i++){
    agregar__persona()
}

for (let personas of lista__personas){
    alert (`El nombre ingresado es ${personas.nombre}, su edad es ${personas.edad} años, con el dni: ${personas.dni}.`)
}