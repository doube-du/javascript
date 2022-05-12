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
        pacientes[i].classList.add('paciente-invalido');
        continue;
    }

    if(altura <= 0 || altura >= 3){
        pacientes[i].querySelector('.info-imc').textContent = 'Altura Inválida';
        pacientes[i].classList.add('paciente-invalido');
        continue;
    }

    let imc         = peso / (altura * altura);
    imc = imc.toFixed(2); //Considera, apenas, as duas primeiras casas decimais

    pacientes[i].querySelector('.info-imc').textContent = imc;
}

const botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', function(event){ //Função Anonima
    event.preventDefault(); // Prevê o update da tela (comportamento padrão do submit) e o captura.
    const form  = document.querySelector('#form-adiciona'); // O form no QuerySelector carrega todos os inputs como um objeto [e isso é beem legal]

    let nome    = form.nome.value;
    let peso    = form.peso.value;
    let altura  = form.altura.value;
    let gordura = form.gordura.value;

    let pacienteLinha = document.createElement('tr');
    pacienteLinha.classList.add('paciente');

    let nomeCell    = document.createElement('td');
    nomeCell.classList.add('info-nome');
    nomeCell.textContent = nome;
    
    let pesoCell    = document.createElement('td');
    pesoCell.classList.add('info-peso');
    pesoCell.textContent = peso;

    let alturaCell  = document.createElement('td');
    alturaCell.classList.add('info-altura');
    alturaCell.textContent = altura;

    let gorduraCell = document.createElement('td');
    gorduraCell.classList.add('info-gordura');
    gorduraCell.textContent = gordura;


    pacienteLinha.appendChild(nomeCell);
    pacienteLinha.appendChild(pesoCell);
    pacienteLinha.appendChild(alturaCell);
    pacienteLinha.appendChild(gorduraCell);

    let tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteLinha);

    console.log(nomeCell);
});

/* 
// Usando o ForEach eu consegui da seguinte forma...
pacientes.forEach(paciente => {
    const nome      = paciente.querySelector('.info-nome').textContent;
    const peso      = paciente.querySelector('.info-peso').textContent;
    const altura    = paciente.querySelector('.info-altura').textContent;

    if(peso <= 0 || peso >= 1000){
        pacientes[i].querySelector('.info-imc').textContent = 'Peso Inválido';
        pacientes[i].classList.add('paciente-invalido');
        return;
    }

    if(altura <= 0 || altura >= 3){
        pacientes[i].querySelector('.info-imc').textContent = 'Altura Inválida';
        pacientes[i].classList.add('paciente-invalido');
        return;
    }

    let imc         = peso / (altura * altura);
    imc = imc.toFixed(2); //Considera, apenas, as duas primeiras casas decimais

    paciente.querySelector('.info-imc').textContent = imc;

    console.log(`O IMC de ${nome} é: ${imc} o peso: ${peso} * ${altura}²`)
});
 */
