const form = document.getElementById('imcForm');
    const resultado = document.getElementById('resultado');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const altura = parseFloat(document.getElementById('altura').value);
      const peso = parseFloat(document.getElementById('peso').value);
      const imc = peso / (altura * altura);
      let classificacao = '';
      let grau = '';

      if (imc < 18.5) {
        classificacao = 'Magreza';
        grau = '0';
      } else if (imc < 25) {
        classificacao = 'Normal';
        grau = '0';
      } else if (imc < 30) {
        classificacao = 'Sobrepeso';
        grau = 'I';
      } else if (imc < 40) {
        classificacao = 'Obesidade';
        grau = 'II';
      } else {
        classificacao = 'Obesidade Grave';
        grau = 'III';
      }

      resultado.innerHTML = `
        <p>Seu IMC é: <strong>${imc.toFixed(2)}</strong></p>
        <p>Classificação: <strong>${classificacao}</strong></p>
        <p>Obesidade (Grau): <strong>${grau}</strong></p>
      `;
    });