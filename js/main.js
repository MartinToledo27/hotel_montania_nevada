const boton = document.getElementById("reserva");
const resumen = document.getElementById("resumen");
const milisegundosPorDia = 86400000;
const selectCabania = document.getElementById("selectCabania");

let valorCabania = 0;
let valorSpa = 0;
let valorTraslado = 0;

/* OBJETO PRECIOS */
const precios = {
    precioCabania1: 6000,
    precioCabania2: 7000,
    precioCabania3: 8000,
    precioTraslado: 5000,
    precioSpa: 5000
}
let {precioCabania1, precioCabania2, precioCabania3, precioTraslado, precioSpa} = precios;

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
    (selectCabania.value == "Cabaña suite") ? valorCabania = precioCabania1 :
    (selectCabania.value == "Cabaña del mirador") ? valorCabania = precioCabania2 :
    (selectCabania.value == "Cabaña familiar") ? valorCabania = precioCabania3 :
    valorCabania = 0;
    return(valorCabania);
}
/* FUNCION VALIDAR SPA */
const funcionSpa = () => {
    let validacionSpa;
    valorSpa == precioSpa ? validacionSpa = "Si" : validacionSpa = "No";
    return (validacionSpa);
}
/* FUNCION VALIDAR TRASLADO */
const funcionTraslado = () => {
    let validacionTraslado;
    valorTraslado == precioTraslado ? validacionTraslado = "Si" : validacionTraslado = "No";
    return (validacionTraslado);
}
////////////////////////
/* AGREGAR RESERVA NUEVA */
class Reservas {
    constructor (nombre, edad, dni, cabania, llegada, salida, spa, traslado){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.cabania = cabania;
        this.llegada = llegada;
        this.salida = salida;
        this.spa = spa;
        this.traslado = traslado;
    }
}
/* ARRAY DE INQUILINOS */
let listaReservas = JSON.parse(localStorage.getItem(`listaReservas`)) || [];
/* FUNCIÓN DE DATOS */
const agregarReserva = () => {
    let reservaNueva = new Reservas (ingresarNombre.value, ingresarEdad.value, ingresarDni.value, selectCabania.value, document.getElementById("fechaLlegada").value, document.getElementById("fechaSalida").value, funcionSpa(), funcionTraslado());
    listaReservas.push(reservaNueva);
}

/* CLICKS */
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
        let confirmarTraslado = () => {
            selectTraslado.value == "Si" ? valorTraslado = precioTraslado : valorTraslado = 0;
            return valorTraslado;
        }
        let confirmarSpa = () => {
            selectSpa.value == "Si" ? valorSpa = precioSpa : valorSpa = 0;
            return valorSpa;
        }
        boton2.addEventListener("click",() => {
            boton2.style.display = "none";
            let precioFinal = (precioResumen + confirmarSpa() + confirmarTraslado());
                confirmacion.innerHTML = 
                `<p class="elementoHospedaje__texto">El resumen de la reserva es de:  ${funcionFecha()} días, en la cabaña ${selectCabania.value} por un total de AR$${precioFinal}.</p>
                <div class="hospedaje__botones_cadauno">
                    <button class="hospedaje__botones" id="continuar">CONTINUAR</button>
                </div>`
                const boton3 = document.getElementById("continuar");
                let ingresarDatos = document.getElementById("contenedorIngresarDatos");
                let contenedorHospedaje = document.getElementById("contenedorHospedaje");
                boton3.addEventListener("click", ()=> {
                    contenedorHospedaje.style.display = "none";
                    boton3.style.display = "none";
                    resumen.style.display = "none";
                    confirmacion.style.display = "none";
                    ingresarDatos.innerHTML =
                    `<div class="hospedaje__botones_cadauno">
                        <p class="hospedaje__subtitulo">Ingrese los datos del responsable de la reserva</p>
                        <label class="elementoHospedaje__texto">Ingrese su nombre y apellido.</label>
                        <input class="hospedaje__imputs" type="text" id="ingresarNombre">
                        <label class="elementoHospedaje__texto">Ingrese su edad.</label>
                        <input class="hospedaje__imputs" type="text" id="ingresarEdad">
                        <label class="elementoHospedaje__texto">Ingrese su dni, sin puntos.</label>
                        <input class="hospedaje__imputs" type="text" id="ingresarDni">
                        <div class="hospedaje__botones_cadauno">
                            <button class="hospedaje__botones" id="confirmacionFinal">CONFIRMAR</button>
                        </div>
                    </div>`
                    let ingresarNombre = document.getElementById("ingresarNombre");
                    let ingresarEdad = document.getElementById("ingresarEdad");
                    let ingresarDni = document.getElementById("ingresarDni");
                    const boton4 = document.getElementById("confirmacionFinal");
                    boton4.addEventListener("click", ()=> {
                        let resumenFinal = document.getElementById("resumenFinal");
                        ingresarDatos.style.display = "none";
                        resumenFinal.innerHTML = 
                        `<div class="hospedaje__botones_cadauno">
                        <p class="hospedaje__subtitulo">Haga click en "confirmar" para confirmar los datos de la reserva.</p>
                        <p class="elementoHospedaje__texto">Los datos ingresados son:</p>
                        <p class="elementoHospedaje__texto">Fecha de llegada: ${document.getElementById("fechaLlegada").value}</p>
                        <p class="elementoHospedaje__texto">Fecha de salida: ${document.getElementById("fechaSalida").value}</p>
                        <p class="elementoHospedaje__texto">Cabaña elegida: ${selectCabania.value}</p>
                        <p class="elementoHospedaje__texto">Servicio de traslado: ${funcionTraslado()}
                        <P class="elementoHospedaje__texto">Servicio de Spa: ${funcionSpa()}</p>
                        <p class="elementoHospedaje__texto">Valor: AR$${precioFinal}</p>
                        <p class="elementoHospedaje__texto">Resposable de la reserva: ${ingresarNombre.value}</p>
                        <p class="elementoHospedaje__texto">Edad: ${ingresarEdad.value}</p>
                        <p class="elementoHospedaje__texto">Dni: ${ingresarDni.value}</p>
                            <button class="hospedaje__botones" id="terminar">CONFIRMAR</button>
                        </div>
                    </div>`
                        const boton5 = document.getElementById("terminar")
                        boton5.addEventListener("click", ()=> {
                            Swal.fire({
                                icon: 'success',
                                title: '¡Su reserva fue creada con exito!',
                                confirmButtonText: 'Cerrar'
                              })
                            boton5.style.display = "none";
                            agregarReserva();
                            ////////////////////
                            /* STORAGE JSON */
                            localStorage.setItem("ListaReservas", JSON.stringify(listaReservas));
                            console.log(listaReservas);
                        })
                    })
                })
        })
    }
})

