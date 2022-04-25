import {Conta} from './Conta.js';

export class ContaCorrente extends Conta{
    sacar(valorSacado){
        if(this._saldo <= valorSacado){
            console.log(`Você não possui saldo o suficiente`);
            return; //Early return
        }

        this._saldo = this._saldo - valorSacado;
        console.log(`${this.cliente.nome} sacou R$ ${valorSacado}\nNovo saldo: R$ ${this.saldo}`);
    }   
    
}