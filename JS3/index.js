import {Cliente}        from './Cliente.js';
import {ContaCorrente}  from './ContaCorrente.js';
import {ContaPoupanca}  from './ContaPoupanca.js';
import {ContaSalario}   from './ContaSalario.js';


const cliente1      = new Cliente('Eduardo', '00000000272');

const contaCorrente    = new ContaCorrente ('001', cliente1);

console.log(contaCorrente);

// console.log(`Número de contas: ${ContaCorrente.numeroContas}`);

contaCorrente.depositar(100);

contaCorrente.tirarExtrato();

contaCorrente.sacar(25);

const contaPoupanca = new ContaPoupanca ('001', cliente1, 100);

contaPoupanca.sacar(25);

const contaSalario = new ContaSalario ('001', cliente1);

console.log(contaSalario);

contaSalario.depositar(100);

contaSalario.sacar(25);