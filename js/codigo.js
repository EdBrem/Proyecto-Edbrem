// TEMA OSCURO

let icon = document.getElementById("icon")
let inicio = document.getElementById("inicio")
let footer = document.getElementById("logoFooter")

icon.addEventListener('click', ()=>{
    document.body.classList.toggle("tema-oscuro")
    if(document.body.classList.contains("tema-oscuro")){
        icon.src ="assets/darkmode.svg";
        inicio.src = "img/logoBlanco.png"
    } else {
        icon.src = "assets/lightmode.svg";
        inicio.src = "img/Logo.png"
    }
})

//  -------- Formulas para cálculos de clases ------

class Finiquito {

    constructor(){
        this.sueldo = document.getElementById('sueldo')
        this.dias = document.getElementById('dias')
        this.diasVacaciones= document.getElementById('diasVacas')
        this.diasQuincena = document.getElementById('diasQuincena')
        this.diasMes = 30;
        this.diasAnual = 365;
        this.diasAguinaldo = 15;
        this.aguinaldoProporcionalAnual = 15/365;
        this.vacacionesProporcional = this.diasVacaciones.value /365;
        this.pagoDia = this.sueldoDiario();
        this.aguinaldoPorPagar = this.calculoAguinaldo();
        this.vacacionesPorPagar = this.totalPagoVacaciones();
        this.diasQuincenaPendiente = this.diasQuincena.value * this.pagoDia;

        this.finiquitoTotal = this.sumaTotal();
    }

    sueldoDiario (){
        return this.sueldo.value / this.diasMes;
    }

    calculoAguinaldo(){
    this.calculo = this.dias.value * this.aguinaldoProporcionalAnual;
    this.aguinaldo = this.calculo * this.pagoDia;

    return this.aguinaldo
    }

    totalPagoVacaciones(){
    this.pagoVacacionesPendientes = this.diasVacaciones.value * this.pagoDia;
    this.pagoVacacionesProporcional = this.vacacionesProporcional * this.dias.value * this.pagoDia;
    this.primaVacacional = this.pagoVacacionesProporcional * .25;
    this.totalVacaciones = this.pagoVacacionesPendientes + this.primaVacacional + this.pagoVacacionesProporcional;

    return this.totalVacaciones;
    }

    sumaTotal(){
        if (this.sueldo.value <= 3200){
            return swal({ title: "Error",
            text: "El monto ingresado no está dentro del parametro legal",
            icon: "error", 
            button: "regresar"})
        } else if (this.dias.value <= 0){
            return swal({ title: "Error",
            text: "Es requerido un monto válido de días laborales para el cálculo",
            icon: "error", 
            button: "regresar"})
        } else {
            this.total = this.aguinaldoPorPagar + this.vacacionesPorPagar + this.diasQuincenaPendiente;

            return this.total.toFixed(2) + swal({ title: "Finalizado",
            text: "El monto de tu finiquito ha sido calculado",
            icon: "success", 
            button: "Ver"});
        };
    }
}

class Sueldo {

    constructor(){
        this.sueldoBruto = document.getElementById('sueldoNeto');

        this.sueldoNeto = this.CalculoNeto();
    }
    
    CalculoNeto(){
        if (this.sueldoBruto.value <= 318){

            return swal({ title: "Error",
            text: "El monto ingresado no está dentro del parametro legal",
            icon: "error", 
            button: "regresar"})

        } else if(this.sueldoBruto.value == 318.01) {
            this.tasa = .0192;
            this.baseImpuesto = this.sueldoBruto.value - .01;
            this.sueldoTasa = this.baseImpuesto * this.tasa;
            this.cuotaImss = 40;
            this.resultado = this.sueldoBruto.value - this.cuotaImss;

            return this.resultado + swal({ title: "Gracias por usar nuestro servicio",
            text: "Tu sueldo neto se ha calculado",
            icon: "success", 
            button: "Ver sueldo"})

        } else if(this.sueldoBruto.value >= 318.01 && this.sueldoBruto.value <= 2669.40){
            this.tasa = .0640;
            this.baseImpuesto = this.sueldoBruto.value - 318.01;
            this.sueldoTasa = this.baseImpuesto * this.tasa;
            this.masCuota = this.sueldoTasa + 6.15;
            this.cuotaImss = 100;
            this.resultado = this.sueldoBruto.value - this.masCuota - this.cuotaImss;

            return this.resultado + swal({ title: "Gracias por usar nuestro servicio",
            text: "Tu sueldo neto se ha calculado",
            icon: "success", 
            button: "Ver sueldo"})
        
        
        }else if (this.sueldoBruto.value >= 2699.41 && this.sueldoBruto.value <= 4774.05){
            this.tasa = .1088;
            this.baseImpuesto = this.sueldoBruto.value - 2699.41;
            this.sueldoTasa = this.baseImpuesto * this.tasa;
            this.masCuota = this.sueldoTasa + 158.55;
            this.cuotaImss = 220;
            this.resultado = this.sueldoBruto.value - this.masCuota - this.cuotaImss;

            return this.resultado + swal({ title: "Gracias por usar nuestro servicio",
            text: "Tu sueldo neto se ha calculado",
            icon: "success", 
            button: "Ver sueldo"})

        } else if (this.sueldoBruto.value >= 4774.06 & this.sueldoBruto.value <= 5514.75){
            this.tasa = .16;
            this.baseImpuesto = this.sueldoBruto.value - 4774.06;
            this.sueldoTasa = this.baseImpuesto * this.tasa;
            this.masCuota = this.sueldoTasa + 381.00;
            this.cuotaImss = 240;
            this.resultado = this.sueldoBruto.value - this.masCuota - this.cuotaImss;

            return this.resultado + swal({ title: "Gracias por usar nuestro servicio",
            text: "Tu sueldo neto se ha calculado",
            icon: "success", 
            button: "Ver sueldo"})

        } else if (this.sueldoBruto.value >= 5514.76 & this.sueldoBruto.value <= 6602.70){
            this.tasa = .1792;
            this.baseImpuesto = this.sueldoBruto.value - 5514.76;
            this.sueldoTasa = this.baseImpuesto * this.tasa;
            this.masCuota = this.sueldoTasa + 504.30;
            this.cuotaImss = 250;
            this.resultado = this.sueldoBruto.value - this.masCuota - this.cuotaImss;

            return this.resultado + swal({ title: "Gracias por usar nuestro servicio",
            text: "Tu sueldo neto se ha calculado",
            icon: "success", 
            button: "Ver sueldo"})

        } else if (this.sueldoBruto.value >= 6602.71 & this.sueldoBruto.value <= 13316.70){
            this.tasa = .2136;
            this.baseImpuesto = this.sueldoBruto.value - 6602.71;
            this.sueldoTasa = this.baseImpuesto * this.tasa;
            this.masCuota = this.sueldoTasa + 699.30;
            this.cuotaImss = 295;
            this.resultado = this.sueldoBruto.value - this.masCuota - this.cuotaImss;

            return this.resultado + swal({ title: "Gracias por usar nuestro servicio",
            text: "Tu sueldo neto se ha calculado",
            icon: "success", 
            button: "Ver sueldo"})

        }   else {
            this.tasa = .03;
            this.baseImpuesto = this.sueldoBruto.value - 13316.70;
            this.sueldoTasa = this.baseImpuesto * this.tasa;
            this.masCuota = this.sueldoTasa + 2133.30;
            this.cuotaImss = 450;
            this.resultado = this.sueldoBruto.value - this.masCuota - this.cuotaImss;

            return this.resultado + swal({ title: "Gracias por usar nuestro servicio",
            text: "Tu sueldo neto se ha calculado",
            icon: "success", 
            button: "Ver sueldo"})
        }
    }
}

$(function(){
    $('#modal_abrir').mouseenter(function(){
        $('#modal_abrir2').fadeOut(500);
    })

    $('#modal_abrir').mouseleave(function(){
        $('#modal_abrir2').delay(100)
                          .fadeIn(400)
    })
    
    $('#modal_abrir2').mouseenter(function(){
        $('#modal_abrir').fadeOut(500);
    })

    $('#modal_abrir2').mouseleave(function(){
        $('#modal_abrir').delay(100)
                         .fadeIn(400)
    })

})

//---------- Bloqueo de formularios ---------------

$(document).ready(function(){
    $('.formulario').on('submit', function(e){
    e.preventDefault()
    })
})

// --------- MODAL DE FINIQUITOS ----------------

const abrirModal = document.getElementById('modal_abrir')
const modalCerrar = document.getElementById('modal_cerrar')
const modalContainer = document.getElementById('modal_container')

let finiquitos = []

abrirModal.addEventListener('click', () => {
    modalContainer.classList.toggle('modal__active')
})

modalCerrar.addEventListener('click', () => {
    modalContainer.classList.toggle('modal__active')
})

const boton1 = document.getElementById('boton1')

boton1.addEventListener('click', () => {
    const finiquito = new Finiquito
    const resultados = document.createElement('div')
    resultados.innerHTML= `<h2>Finiquito generado</h2>
                           <p>Tu finiquito total es de: ${finiquito.total.toFixed(2)}<br>
                           gracias por usar nuestro servicio</p>`
    const nuevoEspacio = document.getElementById('resultados')
    nuevoEspacio.appendChild(resultados)
    
    finiquitos.push(finiquito.total.toFixed(2))
    localStorage.setItem("finiquitos", finiquitos)
})

// --------- MODAL DE SUELDOS ----------------

const abrirModal2 = document.getElementById('modal_abrir2')
const modalCerrar2 = document.getElementById('modal_cerrar2')
const modalContainer2 = document.getElementById('modal_container2')

let sueldos = []

abrirModal2.addEventListener('click', () => {
    modalContainer2.classList.toggle('modal__active')
})

modalCerrar2.addEventListener('click', () => {
    modalContainer2.classList.toggle('modal__active')
})

const boton2 = document.getElementById('boton2')

boton2.addEventListener('click', ()=>{
    const sueldo = new Sueldo
    const resultadosDos = document.createElement('div')
    resultadosDos.innerHTML=`<h2>Sueldo Neto</h2>
                            <p>Tu sueldo neto es de: ${sueldo.resultado.toFixed(2)}<br>
                            gracias por usar nuestro servicio</p>`
    const nuevoEspacio = document.getElementById('resultadosDos')
    nuevoEspacio.appendChild(resultadosDos)
    sueldos.push(sueldo.resultado.toFixed(2))
    localStorage.setItem("Sueldos", sueldos)
    }
)
