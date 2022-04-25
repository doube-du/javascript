class Cliente{
    nome;
    cpf;
    // constructor(nome, cpf, agencia, saldo){
    //     this.nome       = nome;
    //     this.cpf        = cpf;
    //     this.agencia    = agencia;
    //     this.saldo      = saldo;
    // }
}

class ContaCorrente{
    agencia;
    saldo;
    sacar(valorSacado){
        if(this.saldo >= valorSacado){
            this.saldo = this.saldo - valorSacado;
            console.log(`Você sacou R$ ${valorSacado}\nNovo saldo: R$ ${this.saldo}`);
            return; //Early return
        }
        console.log(`Você não possui saldo o suficiente`);
    }

    depositar(valorDepositado){
        if(valorDepositado > 0){
            this.saldo += valorDepositado;
            console.log(`Você depositou ${valorDepositado}\nNovo saldo: ${this.saldo}`);
            return;
        }
        console.log(`O valor depositado deve ser maior que 0`);
    }
}

const cliente1  = new Cliente();
cliente1.nome   = 'Eduardo';
cliente1.cpf    = '00000000272';

const cliente2  = new Cliente();
cliente2.nome   = 'Igor';
cliente2.cpf    = '00000000272';

const cc1       = new ContaCorrente();
cc1.agencia     = '001';
cc1.saldo       = 0.0;

const cc2       = new ContaCorrente();
cc2.agencia     = '002';
cc2.saldo       = 100.58;

console.log(cliente1);
console.log(cliente2);
console.log(cc1);
cc1.sacar(50);
cc1.depositar(50);

console.log(cc2);
cc2.sacar(50);