function calcularNumeros() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let c = Number(document.getElementById("num3").value);
  
    let numeros = [a, b, c];
    let soma = a + b + c;
    let quadrado1 = a * a;
    let quadrado2 = b * b;
  
    document.getElementById("resultado1").innerText =
      "A soma dos três números é: " + soma +
      ", o quadrado do primeiro é: " + quadrado1 +
      " e o quadrado do segundo é: " + quadrado2;
  }
  
  function gerarPalavras() {
    let entrada = document.getElementById("letras").value;
    let letras = entrada.split(',').map(l => l.trim().toUpperCase());
  
    if (letras.length !== 5) {
      document.getElementById("resultado2").innerText = "Digite exatamente 5 letras válidas.";
      return;
    }
  
    let palavras = [];
  
    while (palavras.length < 10) {
      let palavra = "";
      for (let i = 0; i < 5; i++) {
        let pos = Math.floor(Math.random() * 5);
        palavra += letras[pos];
      }
      if (!palavras.includes(palavra)) {
        palavras.push(palavra);
      }
    }
  
    document.getElementById("resultado2").innerText = "Palavras geradas: " + palavras.join(", ");
  }
  