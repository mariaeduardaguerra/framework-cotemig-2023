document.getElementById("cores").addEventListener('click', mudarCor);

function mudarCor (){
    let corSelecionada = document.getElementById("cores").value;
    document.body.style.backgroundColor = corSelecionada;
}

document.getElementById("preto").addEventListener('click', corPreta);

function corPreta (){
    let btnPreto = document.getElementById("preto").value;
    document.body.style.backgroundColor = "black";
}