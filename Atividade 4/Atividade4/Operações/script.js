function Operacoes() {
    let num1 = parseFloat(prompt("Me diga o primeiro número:"));
    let num2 = parseFloat(prompt("Agora o segundo número:"));

    let soma = num1 + num2;
    let subtracao = num1 - num2;
    let produto = num1 * num2;
    let divisao = num1 / num2;
    let resto = num1 % num2;

    alert(`Aqui estão os resultados das operações entre ${num1} e ${num2}:
    
➕ Soma: ${soma}
➖ Subtração: ${subtracao}
✖️ Multiplicação: ${produto}
➗ Divisão: ${divisao.toFixed(2)}
? Resto da divisão: ${resto}`);
}
