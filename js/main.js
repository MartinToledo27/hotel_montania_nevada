let temporada = 0;
let valor__cabania = 0;
let valor__total = 0;
/* DIAS */
let dias = parseFloat(prompt("Ingrese la cantidad de días que quiere hospedarse."));
while (dias <! 0) {
    dias = parseFloat(prompt("No es un valor posible. Ingrese la cantidad de días que quiere hospedarse."));
}
/* MES */
let mes = parseFloat(prompt("Ingrese el mes que quiere hospedarse. Valores del mes 1 al 12."));
while ((mes <! 0) || (mes > 12)){
    mes = parseFloat(prompt("No es un valor posible. Ingrese el mes que quiere hospedarse. Valores del mes 1 al 12."));
}
if ((mes < 6) || (mes > 8)) {
    temporada = 1
} else {
    temporada = 2
}

/* PERSONAS */
let personas = parseFloat(prompt("Ingrese cuantas personas van a hospedarse. Valores de 2, 3 o 4 personas."));
while ((personas < 2) || (personas > 4)) {
    personas = parseFloat(prompt("No es un valor posible. Ingrese cuantas personas van a hospedarse. Opciones: 2, 3 o 4 personas."));
}
if (personas == 2) {
    valor__cabania = 6000;
} else if (personas == 3) {
    valor__cabania = 7000;
} else if (personas == 4){
    valor__cabania = 8000;
} 


function hospedaje (){
    valor__total = valor__cabania * temporada * dias;
    alert(`Su hospedaje es de ${dias} dias, en el mes ${mes}, para ${personas} personas. El valor es de de $${valor__total}.`)
}

hospedaje ();