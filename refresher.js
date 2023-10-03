const delay = 300000;
urlOg = window.location.href;
var dataAtual = new Date();
var horaLocal = dataAtual.getHours();
var minutosLocal = dataAtual.getMinutes();
var segundosLocal = dataAtual.getSeconds();
window.location.replace(splitUrl(urlOg)+'#'+horaLocal+':'+minutosLocal);

function refreshPage(){
    	location.reload();
};

function splitUrl(url){
    var partes = url.split('#');
    return partes[0]
};

setInterval(refreshPage, delay);