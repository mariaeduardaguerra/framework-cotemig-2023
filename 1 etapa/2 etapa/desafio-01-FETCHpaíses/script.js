window.addEventListener('load',function(){

    const valores = fetch('https://restcountries.com/v2/all').then(res => {
       console.log(res)
       res.json().then(dados=>{
           console.log(dados);
           mostraDados(dados);
           });
   }).catch(erro => {
       console.log(erro + " erro na requisição")
   });
   
   function mostraDados(dados){

        paises = document.querySelector('#paises');
        dados.forEach(acesso => {

            paises.innerHTML += ` <tr> <td> ${acesso.name} </td> <td> ${acesso.capital} </td> <td> ${acesso.alpha2Code} </td> </tr> `
            
        });
       
   }
   
});