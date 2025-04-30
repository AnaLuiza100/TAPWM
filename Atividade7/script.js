function verificarTriangulo() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const resultado = document.getElementById('resultado');
    const imagem = document.getElementById('imagemTriangulo');

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultado.textContent = "Por favor, digite apenas números.";
        resultado.style.color = "red";
        imagem.hidden = true;
        return;
    }

    if (
        Math.abs(b - c) < a && a < b + c &&
        Math.abs(a - c) < b && b < a + c &&
        Math.abs(a - b) < c && c < a + b
    ) {
        let tipo = '';
        let nomeImagem = '';

        if (a === b && b === c) {
            tipo = 'Equilátero';
            nomeImagem = 'equilatero.png';
        } else if (a === b || b === c || a === c) {
            tipo = 'Isósceles';
            nomeImagem = 'isosceles.png';
        } else {
            tipo = 'Escaleno';
            nomeImagem = 'escaleno.png';
        }

        resultado.textContent = `É um triângulo ${tipo}.`;
        resultado.style.color = "green";
        imagem.src = `img/${nomeImagem}`;
        imagem.alt = `Triângulo ${tipo}`;
        imagem.hidden = false;
    } else {
        resultado.textContent = "Os valores NÃO formam um triângulo.";
        resultado.style.color = "red";
        imagem.hidden = true;
    }
}
