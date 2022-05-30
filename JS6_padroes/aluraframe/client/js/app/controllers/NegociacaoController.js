class NegociacaoController{
    constructor(){
        let $ = document.querySelector.bind(document); // Permite imitar o jQuery
        this._data              = $('#data');
        this._quantidade        = $('#quantidade');
        this._valor             = $('#valor');
        this._listaNegociacoes  = new ListaNegociacoes();
    }

    adiciona(event){
        event.preventDefault();   
        
        //Delegando responsabilidade. Criando o Helper, o metodo fica isolado
        let negociacao  = this._criaNegociacao();

        this._listaNegociacoes.adiciona(negociacao);
        console.log(this._listaNegociacoes.negociacoes);

        this._limpaFormulario();
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._data.value),
            this._quantidade.value,
            this._valor.value
        );
    }

    _limpaFormulario(){
        this._data.value        = '';
        this._quantidade.value  = 1;
        this._valor.value       = 0.0;

        this._data.focus();
    }

}