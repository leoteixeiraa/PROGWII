function array() {

    const alunos = ['Roberto', 'Denilson', 'Carlos']

    alunos.sort();
    document.getElementById("Ordenado").innerHTML = "Array ordenado: " + alunos;

    alunos.push('Leo');
    document.getElementById("NovoElemento").innerHTML = "novo elemento: " + alunos;

    document.getElementById("Tamanho").innerHTML = "Tamanho do Array: " + alunos.length;

    document.getElementById("SegundoElemento").innerHTML = "Segundo elemento do Array: " + alunos[1];

}