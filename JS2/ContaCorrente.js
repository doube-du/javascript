export class ContaCorrente{
    agencia;
    saldo;
    cliente;
    
    sacar(valorSacado){
        if(this.saldo <= valorSacado){
            console.log(`Você não possui saldo o suficiente`);
            return; //Early return
        }

        this.saldo = this.saldo - valorSacado;
        console.log(`${this.cliente.nome} sacou R$ ${valorSacado}\nNovo saldo: R$ ${this.saldo}`);
    }

    depositar(valorDepositado){
        if(valorDepositado <=  0){
            console.log(`O valor depositado deve ser maior que 0`);
            return;
        }

        this.saldo += valorDepositado;
        console.log(`${this.cliente.nome} depositou ${valorDepositado}\nNovo saldo: ${this.saldo}`);
    }

    transferir(valor, conta){
        if(valor <= 0){
            console.log(`O valor precisa ser superior a zero`);
            return;
        }

        if(valor > this.saldo){
            console.log(`Você não possui saldo o suficiente`);
            return;
        }

        this.saldo -= valor;
        conta.depositar(valor);
        console.log(`Você transfeiriu R$ ${valor} para ${conta.cliente.nome}`);
    }
}