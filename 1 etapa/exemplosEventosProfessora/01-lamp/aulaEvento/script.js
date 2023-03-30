window.addEventListener('load',start);

function start(){
    console.log("Página carregada")
    var nameInput= document.querySelector('#input1')
    input1.value="Sandra Alves"
    nameInput.addEventListener('keyup',countName);

    var form=document.querySelector('form');
    form.addEventListener('submit',preventSubmit);
    
}

function countName(event)
{   console.log(event)
    var count = event.target.value
    var span = document.querySelector('#contador');
    span.textContent='contador de caracteres : ' +count.length
    var span1 = document.querySelector('#replicar');
    span1.textContent=event.target.value
    

}

function preventSubmit(event){
    event.preventDefault();

    var nameInput= document.querySelector('#input1')
    alert(nameInput.value + '  Casdastrado com sucesso');

}


