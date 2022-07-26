const boton = document.getElementById("reserva");
const resumen = document.getElementById("resumen");
const milisegundosPorDia = 86400000;
const selectCabania = document.getElementById("selectCabania");
let valorCabania = 0;
let valorSpa = 0;
let valorTraslado = 0;



/* FUNCION FECHA */
let funcionFecha = () => {
    let fechaLlegada = document.getElementById("fechaLlegada").value;
    let fechaSalida = document.getElementById("fechaSalida").value;
    let fecha1 = new Date(fechaLlegada);
    let fecha2 = new Date(fechaSalida);
    let milisegundosTranscurridos = Math.abs(fecha1.getTime() - fecha2.getTime())
    let diasTranscurridos = Math.round(milisegundosTranscurridos/milisegundosPorDia);
    return (diasTranscurridos);
}

/* FUNCION CABANIA */   
let funcionCabania = () => {
    if (selectCabania.value == "Cabaña suite") {
        valorCabania = 6000;
    } else if (selectCabania.value == "Cabaña del mirador") {
        valorCabania = 7000;
    } else if (selectCabania.value == "Cabaña familiar") {
        valorCabania = 8000;
    }
    return(valorCabania);
}

boton.addEventListener("click",() => {
    boton.style.display = "none";
    let precioResumen = (funcionCabania() * funcionFecha());
    if (funcionCabania() <= 0) {
        alert `No es un día posible`;
    } else {
        resumen.innerHTML = `<p class="elementoHospedaje__texto">El resumen de la reserva es de: ${funcionFecha()} días, en la cabaña "${selectCabania.value}" por un total de AR$${precioResumen}.</p>
        <div class="hospedaje__botones_cadauno">
            <p class="elementoHospedaje__texto">¿Quiere añardir el traslado hacia el complejo de cabañas? Costo: AR$5000.</p>
            <select class="hospedaje__botones" id="selectTraslado">
                <option>Si</option>
                <option>No</option>
            </select>
        </div>
        <div class="hospedaje__botones_cadauno">
            <p class="elementoHospedaje__texto">¿Quiere añardir el servicio de SPA? Costo: AR$5000.</p>
            <select class="hospedaje__botones" id="selectSpa">
                <option>Si</option>
                <option>No</option>
            </select>
        </div>
        <div class="hospedaje__botones_cadauno">
            <button class="hospedaje__botones" id="confirmar">CONFIRMAR</button>
        </div>`;
        const selectTraslado = document.getElementById("selectTraslado");
        const selectSpa = document.getElementById("selectSpa");
        const boton2 = document.getElementById("confirmar");
        let confirmacion = document.getElementById("contenedorConfirmacion");
        let precioTraslado = () => {
            if (selectTraslado.value == "Si") {
                valorTraslado = 5000;
            } else if (selectTraslado.value == "No") {
                valorTraslado = 0;
            }
            return valorTraslado;
        }
        let precioSpa = () => {
            if (selectSpa.value == "Si") {
                valorSpa = 5000;

            } else if (selectSpa.value == "No") {
                valorSpa = 0;
            }
            return valorSpa;
        }
        boton2.addEventListener("click",() => {
            boton2.style.display = "none";
            let precioFinal = (precioResumen + precioSpa() + precioTraslado());
                confirmacion.innerHTML = 
                `<p class="elementoHospedaje__texto">El resumen de la reserva es de: ${funcionFecha()}, en la cabaña ${selectCabania.value} por un total de AR$${precioFinal}.</p>
                <div class="hospedaje__botones_cadauno">
                    <button class="hospedaje__botones" id="continuar">CONTINUAR</button>
                </div>`
        })
    }
})