function contagemRegressiva() {
    var tempo = document.getElementById("contagem").value;

    if (tempo == "") {
        alert("O campo deve conter de 5 a 15");
    } else if (tempo < 5 || tempo > 15) {
        alert("Os números para contagem deve ser entre 5 e 15");
    } else {

        var inicioContador = setInterval(function () {
            console.log(tempo);
            document.getElementById("resultado").innerHTML = tempo;

            if (tempo === 0) {
                clearInterval(inicioContador);
                alert("BOMBA DETONADA");
                document.getElementById('contagem').value = '';

            }
            tempo--
        }, 1000);
    }
}
