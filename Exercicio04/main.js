function calcularMedia() {
    var nome = document.getElementById("nome").value;
    var disciplina = document.getElementById("disciplina").value;
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;

    if (nome == "" || nota1 == "" || nota2 == "" || nota3 == "") {
        alert("Preencha os campos");
    } else if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota1 > 10 || nota2 > 10 || nota3 > 10) {
        alert("As notas devem ser de 1 a 10");
    } else {
        var media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;
        document.getElementById("resultado").innerHTML = "A média final exata do aluno: " + nome + " na disciplina: " + disciplina + " foi: " +
            + media + " essa nota arrendoda é de: " + (Math.trunc(media)) + ". O aluno está: " + result(media);
    }
}

function result(media, resultado) {

    if (media <= 4) {
        return resultado = "Reprovado";
    } else if (media > 4 && media < 7) {
        return resultado = "em Exame";
    } else if (media >= 7) {
        return resultado = "Aprovado";
    }
}