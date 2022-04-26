import {Conta} from './Conta.js';

export class ContaPoupanca extends Conta{
    constructor(agencia, cliente, saldo){
        //SUPER evoca o construtor da classe pai (ou mãe - viva o matriarcado)
        super(agencia, cliente, saldo);
    }
    sacar(valorSacado){
        if(this._saldo <= valorSacado){
            console.log(`Você não possui saldo o suficiente`);
            return; //Early return
        }

        this._saldo = this._saldo - valorSacado;
        console.log(`${this.cliente.nome} sacou R$ ${valorSacado}\nNovo saldo: R$ ${this.saldo}`);
    }   
    
}