//DOM - Document Object Model [Conteúdo HTML do Documento]
let h1 = document.querySelector('.titulo');
// h1.textContent = 'Treinando Javascript';
h1.textContent = 'Aparecida Nutricionista';

/* Lendo Conteúdo */
let pacientes = document.querySelectorAll('.paciente');
pacientes.forEach(paciente => {
    const nome      = paciente.querySelector('.info-nome').textContent;
    const peso      = paciente.querySelector('.info-peso').textContent;
    const altura    = paciente.querySelector('.info-altura').textContent;

    console.log(`O IMC de ${nome} é o peso: ${peso} * ${altura}`)
});
