function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}

var tecla_pom   = document.querySelector('.tecla_pom');
var tecla_clap  = document.querySelector('.tecla_clap');

/*
Função muito grande
tecla_pom.addEventListener('click',function(){
    tocaSomPom();
});
*/

tecla_pom.onclick = tocaSomPom;
tecla_clap.onclick = tocaSomClap;

/* 
var tecla_tim =     document.querySelector('.tecla_tim');
var tecla_puff =    document.querySelector('.tecla_puff');
var tecla_splash =  document.querySelector('.tecla_splash');
var tecla_toim =    document.querySelector('.tecla_toim');
var tecla_psh =     document.querySelector('.tecla_psh');
var tecla_tic =     document.querySelector('.tecla_tic');
var tecla_tom =     document.querySelector('.tecla_tom'); */