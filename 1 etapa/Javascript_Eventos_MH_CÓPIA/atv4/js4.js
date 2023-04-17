document.getElementById("cores").addEventListener('click',mudar);


function mudar (){
    var corSelecionada = document.getElementById("cores").value;
    document.body.style.backgroundColor = corSelecionada;
}