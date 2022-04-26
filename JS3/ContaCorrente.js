import {Conta} from './Conta.js'

export class ContaCorrente extends Conta{
    static numeroContas = 0;

    constructor(agencia, cliente){
        //SUPER evoca o construtor da classe pai (ou mãe - viva o matriarcado)
        super(agencia, cliente, 0);
        ContaCorrente.numeroContas += 1 ;
    }

    sacar(valor){
        

        if(this._saldo <= (valorSacado + taxa)){
            console.log(`Você não possui saldo o suficiente`);
            return; //Early return
        }

        this._saldo = this._saldo - taxa - valorSacado;
        console.log(`${this.cliente.nome} sacou R$ ${valorSacado}\nNovo saldo: R$ ${this.saldo}`);
    }
}