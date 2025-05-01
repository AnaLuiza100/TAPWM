function mostrarFormulario(valor) {
      document.querySelectorAll('.form-section').forEach(form => {
        form.style.display = 'none';
        // Limpar campos e resultados
        form.querySelectorAll('input').forEach(input => input.value = '');
        form.querySelectorAll('.result').forEach(div => div.innerText = '');
      });

      if (valor) {
        document.getElementById('form-' + valor).style.display = 'block';
      }
    }

    function calcularMaior() {
      const a = parseFloat(document.getElementById('m1').value);
      const b = parseFloat(document.getElementById('m2').value);
      const c = parseFloat(document.getElementById('m3').value);
      const maior = Math.max(a, b, c);
      document.getElementById('res-maior').innerText = `Maior número: ${maior}`;
    }

    function ordenarNumerosJS() {
      const a = parseFloat(document.getElementById('o1').value);
      const b = parseFloat(document.getElementById('o2').value);
      const c = parseFloat(document.getElementById('o3').value);
      const ordenado = [a, b, c].sort((x, y) => x - y);
      document.getElementById('res-ordenar').innerText = `Ordem crescente: ${ordenado.join(', ')}`;
    }

    function verificarPalindromo() {
      const texto = document.getElementById('texto-palindromo').value;
      const formatada = texto.toLowerCase().replace(/\s+/g, '');
      const reversa = formatada.split('').reverse().join('');
      const resultado = formatada === reversa ? 'É palíndromo' : 'Não é palíndromo';
      document.getElementById('res-palindromo').innerText = resultado;
    }

    function verificarSubconjuntoJS() {
      const palavra1 = document.getElementById('p1').value.toLowerCase();
      const palavra2 = document.getElementById('p2').value.toLowerCase();

      let resultado = 'erro';
      if (palavra1 && palavra2 && palavra1.trim() !== '' && palavra2.trim() !== '') {
        resultado = palavra1.includes(palavra2) ? 'é um subconjunto' : 'não é um subconjunto';
      }
      document.getElementById('res-subconjunto').innerText = resultado;
    }