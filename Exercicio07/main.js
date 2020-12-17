function formataData() {
    var dataInfo = document.getElementById("data").value;

    if (data == "") {
        alert("Favor informar a data");
    } else {

        var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");



        var dia_info = dataInfo.split('/')[0];
        var mes_informado = dataInfo.split('/')[1];
        var ano_informado = dataInfo.split('/')[2];
        var data = ano_informado + '-' + mes_informado + '-' + dia_info;
        var dataInfo = new Date(data);

        var dia = dataInfo.getDate();
        var dias = dataInfo.getDay();
        var mes = dataInfo.getMonth();
        var ano = dataInfo.getFullYear();
        var diaext = + dia + " de " + meses[mes] + " de " + ano;

        document.getElementById("dataFormatada").innerHTML = diaext;
    }
}