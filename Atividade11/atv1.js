function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;
    this.calcularArea = function () {
      return this.base * this.altura;
    };
  }

  const form = document.getElementById("formRetangulo");
  const resultado = document.getElementById("resultado");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (base <= 0 || altura <= 0) {
      resultado.textContent = "Por favor, insira valores positivos.";
      resultado.style.color = "#D32F2F"; // vermelho para erro
      return;
    }

    const retangulo = new Retangulo(base, altura);
    const area = retangulo.calcularArea();

    resultado.style.color = "#6A5ACD";
    resultado.textContent = `Área: ${area.toFixed(2)}`;
  });