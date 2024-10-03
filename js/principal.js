var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdImc = paciente.querySelector(".info-imc");

var alturaEhValida = true;
var pesoEhValido = true;

if (peso <= 0 || peso >= 1000){
    console.log("Peso inválido!");
    tdPeso.textContent = "Peso inválido!";
    pesoEhValido = false;

}

if (altura <= 0 || altura >= 3.00){
    console.log("Altura inválida!");
    tdAltura.textContent = "Altura inválida!";
    alturaEhValida = false;
}

if (alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;    
} else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
}
