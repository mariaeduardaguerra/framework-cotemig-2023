function calculate() {

    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value / 100;
    var imc = weight / (height * height);
    var result = document.getElementById("result");

    if (isNaN(imc)) {
      result.innerHTML = "por favor, insira peso e altura válidos!";
    } else {
      result.innerHTML = "seu IMC é: " + "<br>" + imc.toFixed(2) + " Kg/m2";
    }

}
