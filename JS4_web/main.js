const teclas = document.querySelectorAll('.tecla');
let contador = 0;

function tocaSom(idAudio){
    idAudio = `#som_${idAudio}`;
    document.querySelector(idAudio).play();    
}

teclas.forEach(tecla => function(){
    tecla.onclick = function (){
        tocaSom(tecla.classList[1]);
    }
});

/* while(teclas.length > contador){
    teclas[contador].onclick = function (){
        tocaSom(this.classList[1]);
    };
    contador++;
} */

/* 

Ou, com um for convencional 

teclas.forEach(tecla => {
    tecla.onclick = tocaSomPom;
});

*/