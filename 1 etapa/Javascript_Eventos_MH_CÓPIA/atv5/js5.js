let paragrafo = document.getElementById('paragrafo_principal');
let paragraMostrar = document.getElementById('paragrafo_principal').textContent;
document.getElementById("btn_mostrar").addEventListener('click',mostrar);
document.getElementById("btn_ocultar").addEventListener('click',ocultar);

function mostrar () {
    if(paragrafo === paragrafo){
        paragrafo.textContent = paragraMostrar;
    }else{
        
    }
}

function ocultar () {
    if(paragrafo === paragrafo){
        paragrafo.textContent = " ";
    }else{
        
    }
}

