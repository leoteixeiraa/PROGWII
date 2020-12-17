const tag = document.querySelector('input[name="temperatura"]')
const resultados = document.querySelector('div.resultados')

tag.addEventListener('blur', function (evento) {
    var tempCelsius = document.getElementById("temperatura").value;
    var temp_fahrenheit = (parseFloat(tempCelsius) * 9 / 5) + 32;

    document.getElementById("resultado").innerHTML = "A temperatura em Fahrenheit é: " + temp_fahrenheit + "º" +
        " E em celsius é " + tempCelsius + "º.";
})