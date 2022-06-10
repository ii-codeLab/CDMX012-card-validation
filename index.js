
//traer la info. introducida
// -Restringir el tecleo a sólo números y que sean series entre 13 y 16-
//Multiplicar los números en posiciones impares x2
//Separar los números resultantes y sumarles los números en posiciones pares
//Dividir el resultado entre 10
//Si el número es divisible entre 10 la tarjeta es válida

import validator from './validator.js';
let numeroTarjeta=document.getElementById("nTarjeta");
const btn=document.getElementById("validar");

btn.addEventListener("click", function(){
    let numerosIngresados = numeroTarjeta.value;
    if(validator.isValid(numerosIngresados)==true){
        document.getElementById("validText").innerText= "Tarjeta válida";
        document.getElementById("validar").value= "Siguiente",this.style.backgroundColor="green";
    }else{
        document.getElementById("validText").innerText="Tarjeta inválida";
        document.getElementById("validar").value= "Reintentar",this.style.backgroundColor="red";
    }
    numeroTarjeta.value=validator.maskify(numerosIngresados);
});






