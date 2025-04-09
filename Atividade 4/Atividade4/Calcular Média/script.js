function calcularMedia() {
    let nome = prompt("Qual é o nome do aluno?");
    let nota1 = parseFloat(prompt("Informe a primeira nota:"));
    let nota2 = parseFloat(prompt("Informe a primeira nota:"));
    let nota3 = parseFloat(prompt("Informe a primeira nota:"));

    let media = (nota1 + nota2 + nota3) / 3;

    alert("Aluno: " + nome + "\nMédia: " + media.toFixed(2));
}
