class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document); // Permite imitar o jQuery
        this._data       = $('#data');
        this._quantidade = $('#quantidade');
        this._valor      = $('#valor');
    }

    adiciona(event){
        event.preventDefault();   
        
        //Complicando um pouco...
        var dataFracionada = this._data.value.split('-');
        dataFracionada[1] = dataFracionada[1] - 1;

        let data            = new Date(dataFracionada[0], dataFracionada[1], dataFracionada[2]); // É possivel fazer com RegEx (Regular Expressions) ~> (/-/g',')
        let dataFormatada   = data.getDate() + '/' + data.getMonth() + '/' + data.getFullYear();

        let negociacao = new Negociacao(
            dataFormatada,
            this._quantidade.value,
            this._valor.value
        );

        console.log(negociacao);
    }

}