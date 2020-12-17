function opcao() {
    if (document.getElementById("operacao").value == "") {
        alert("Por favor selecione uma opeção");
    }
    if (document.getElementById("operacao").value == "1") {
        if (valida()) {
            soma();
        }
    }
    if (document.getElementById("operacao").value == "2") {
        if (valida()) {
            subtrair();
        }
    }
    if (document.getElementById("operacao").value == "3") {
        if (valida()) {
            dividir();
        }
    }
    if (document.getElementById("operacao").value == "4") {
        if (valida()) {
            multiplicar();
        }
    }
}

function valida() {
    if (document.getElementById("valorX").value == "" || document.getElementById("valorY").value == "") {
        alert("Valor não informador");
        return false;
    } else {
        if (validanumero()) {
            return true;
        } else {
            return false;
        }
    }

}
function validanumero() {
    var valorX = document.getElementById("valorX").value;
    var valorY = document.getElementById("valorY").value;
    if (isNaN(valorX)) {
        alert("Valor primeiro campo não numerico");
        return false;
    }
    if (isNaN(valorY)) {
        alert("Valor do segundo campo não numerico");
        return false;
    } else {
        return true;
    }

}

function soma() {
    var valorX = document.getElementById("valorX").value;
    var valorY = document.getElementById("valorY").value;
    var resultado = parseInt(valorX) + parseInt(valorY);
    document.getElementById("resultado").value = resultado;

}
function subtrair() {
    var valorX = document.getElementById("valorX").value;
    var valorY = document.getElementById("valorY").value;
    var resultado = parseInt(valorX) - parseInt(valorY);
    document.getElementById("resultado").value = resultado;

}
function dividir() {
    var valorX = document.getElementById("valorX").value;
    var valorY = document.getElementById("valorY").value;
    var resultado = parseInt(valorX) / parseInt(valorY);
    document.getElementById("resultado").value = resultado;

}
function multiplicar() {
    var valorX = document.getElementById("valorX").value;
    var valorY = document.getElementById("valorY").value;
    var resultado = parseInt(valorX) * parseInt(valorY);
    document.getElementById("resultado").value = resultado;

}