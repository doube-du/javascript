import {Conta} from './Conta.js'

export class ContaCorrente extends Conta{
    sacar(valorSacado){
        taxa = valorSacado * 1.1; //10%
        if(this._saldo <= (valorSacado + (valorSacado - taxa))){
            console.log(`Você não possui saldo o suficiente`);
            return; //Early return
        }

        this._saldo = this._saldo - taxa - valorSacado;
        console.log(`${this.cliente.nome} sacou R$ ${valorSacado}\nNovo saldo: R$ ${this.saldo}`);
    }
}