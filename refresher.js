const delay = 300000;

function refreshPage(){
    console.log('entrou na function');
    	location.reload();
};

setInterval(refreshPage, delay);