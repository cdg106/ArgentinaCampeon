/* CREO EL OBJETO QUE VA A CONTENER LOS VALORES QUE INGRESE POR INPUT */
const datos = {
    cantidad: '',
    modelo: ''
};

/* LE ASIGNO EL VALOR DE 'titular' A CATEGORIA QUE ES LA PRIMERA OPCION DEL SELECT */
var modelo;
datos.modelo = 'titular';

/* OBTENGO ELEMENTOS HTML */
const cantidad = document.querySelector('#cantidad');
modelo = document.querySelector('#modelo');
const precioTotal = document.querySelector('#precioTotal');
const btnCalcular = document.querySelector('.btnCalcular');
const btnBorrar = document.querySelector('.btnBorrar');
const formulario = document.querySelector('.formulario');

/* GUARDO VALORES QUE INGRESO POR INPUT Y SELECT EN EL OBJETO CREADO ANTERIORMENTE */
cantidad.addEventListener('input', function(event){
    datos.cantidad = event.target.value;
    console.log("Cantidad: " + event.target.value + " guardada");
});

modelo.addEventListener('change', function(event){
    datos.modelo = event.target.value;
    console.log("Modelo: " + event.target.value + " guardada");
});

/* BOTON RESUMEN */
btnCalcular.addEventListener('click' , function(event){
    event.preventDefault();
    const {cantidad, modelo} = datos;
    var resultado = 0;    
    var indice = 0;
    indice = precioTotal.textContent.indexOf('$');
    precioTotal.textContent = precioTotal.textContent.substring(0, indice+1);
    if(modelo == 'titular'){
        resultado = 24999*cantidad;
        console.log("El modelo seleccionado es (T): " + modelo);
    } 
    else if(modelo == 'titularNiños'){
        resultado = (24999*cantidad)*0.8;
        console.log("El modelo seleccionado es (TN): " + modelo);
    }
    else if(modelo == 'suplente'){
        resultado = 23999*cantidad;
        console.log("El modelo seleccionado es (S): " + modelo);
    }
    else if(modelo == 'suplenteNiños'){
        resultado = (23999*cantidad)*0.8;
        console.log("El modelo seleccionado es (SN): " + modelo);
    }
    else if(modelo == 'alternativa'){
        resultado = 22999*cantidad;
        console.log("El modelo seleccionado es (A): " + modelo);
    }
    else if(modelo == 'alternativaNiños'){
        resultado = (22999*cantidad)*0.8;
        console.log("El modelo seleccionado es (AN): " + modelo);
    }
    precioTotal.textContent += resultado;
    return;
});

/* BOTON BORRAR */
btnBorrar.addEventListener('click' , function(event){
    event.preventDefault();
    var indice = 0;
    indice = precioTotal.textContent.indexOf('$');
    precioTotal.textContent = precioTotal.textContent.substring(0, indice+1);
    formulario.reset();
    return;
});