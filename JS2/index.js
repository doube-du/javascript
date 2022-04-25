import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

const cliente1  = new Cliente();
cliente1.nome   = 'Eduardo';
cliente1.cpf    = '00000000272';

const cliente2  = new Cliente();
cliente2.nome   = 'Igor';
cliente2.cpf    = '00000000272';

const cc1       = new ContaCorrente();
cc1.cliente     = cliente1;
cc1.agencia     = '001';
cc1.saldo       = 0.0;

const cc2       = new ContaCorrente();
cc2.cliente     = cliente2;
cc2.agencia     = '002';
cc2.saldo       = 100.58;

console.log(cc1);
cc1.sacar(50);
cc1.depositar(50);

console.log(cc2);
cc2.sacar(50);

cc2.transferir(10, cc1);
console.log(cc1);