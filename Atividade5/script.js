function jogar(jogador) {
    var opcoes = ['pedra', 'papel', 'tesoura'];
    var num = Math.floor(Math.random() * 3); // 0, 1 ou 2
    var computador = opcoes[num];

    var resultado = '';

    if (jogador === computador) {
        resultado = 'Empate!';
    } else if (
            (jogador === 'pedra' && computador === 'tesoura') ||
            (jogador === 'papel' && computador === 'pedra') ||
            (jogador === 'tesoura' && computador === 'papel')
    ) {
        resultado = 'Você venceu! ' + jogador + ' ganha de ' + computador + '.';
    } else {
        resultado = 'Você perdeu! ' + computador + ' ganha de ' + jogador + '.';
    }

    document.getElementById('resultado').innerText =
    'Você escolheu: ' + jogador + '\nComputador escolheu: ' + computador + '\n' + resultado;
}
