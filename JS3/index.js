import {Cliente} from './Cliente.js';
import {Conta} from './Conta.js';
import {ContaCorrente} from './ContaCorrente.js';
import {ContaPoupanca} from './ContaPoupanca.js';

const cliente1  = new Cliente('Eduardo', '00000000272');

const ccorrente1= new ContaCorrente ('001', cliente1);

console.log(ccorrente1);

console.log(`Número de contas: ${ContaCorrente.numeroContas}`);

const cpoupanca = new ContaPoupanca ('001', 100, cliente1);

console.log(cpoupanca);