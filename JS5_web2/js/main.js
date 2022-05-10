//DOM - Document Object Model [Conteúdo HTML do Documento]
let h1 = document.querySelector('.titulo');
// h1.textContent = 'Treinando Javascript';
h1.textContent = 'Aparecida Nutricionista';

/* Lendo Conteúdo */
let pacientes = document.querySelectorAll('.paciente');

// Usando for (simples) eu consegui da seguinte forma...

let validador   = true;

for(let i = 0; i < pacientes.length; i++){
    const peso      = pacientes[i].querySelector('.info-peso').textContent;
    const altura    = pacientes[i].querySelector('.info-altura').textContent;

    if(peso <= 0 || peso >= 1000){
        pacientes[i].querySelector('.info-imc').textContent = 'Peso Inválido';
        continue;
    }

    if(altura <= 0 || altura >= 3){
        pacientes[i].querySelector('.info-imc').textContent = 'Altura Inválida';
        continue;
    }

    let imc         = peso / (altura * altura);
    imc = imc.toFixed(2); //Considera, apenas, as duas primeiras casas decimais

    pacientes[i].querySelector('.info-imc').textContent = imc;
}

/* 
// Usando o ForEach eu consegui da seguinte forma...
pacientes.forEach(paciente => {
    const nome      = paciente.querySelector('.info-nome').textContent;
    const peso      = paciente.querySelector('.info-peso').textContent;
    const altura    = paciente.querySelector('.info-altura').textContent;

    if(peso <= 0 || peso >= 1000){
        pacientes[i].querySelector('.info-imc').textContent = 'Peso Inválido';
        return;
    }

    if(altura <= 0 || altura >= 3){
        pacientes[i].querySelector('.info-imc').textContent = 'Altura Inválida';
        return;
    }

    let imc         = peso / (altura * altura);
    imc = imc.toFixed(2); //Considera, apenas, as duas primeiras casas decimais

    paciente.querySelector('.info-imc').textContent = imc;

    console.log(`O IMC de ${nome} é: ${imc} o peso: ${peso} * ${altura}²`)
});
 */
