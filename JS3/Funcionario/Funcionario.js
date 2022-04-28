export class Funcionario{
    constructor(nome, salario, cpf, bonificacao = 1){
        this._nome          = nome;
        this._salario       = salario;
        this._cpf           = cpf;
        
        this._bonificacao   = bonificacao;
    }
}