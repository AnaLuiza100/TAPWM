class Conta {
    constructor(nome, banco, numero, saldo) {
      this._nome = nome;
      this._banco = banco;
      this._numero = numero;
      this._saldo = saldo;
    }

    get nome() { return this._nome; }
    get banco() { return this._banco; }
    get numero() { return this._numero; }
    get saldo() { return this._saldo; }
  }

  class Corrente extends Conta {
    constructor(nome, banco, numero, saldo, saldoEspecial) {
      super(nome, banco, numero, saldo);
      this._saldoEspecial = saldoEspecial;
    }
    get saldoEspecial() { return this._saldoEspecial; }
  }

  class Poupanca extends Conta {
    constructor(nome, banco, numero, saldo, juros, vencimento) {
      super(nome, banco, numero, saldo);
      this._juros = juros;
      this._vencimento = vencimento;
    }
    get juros() { return this._juros; }
    get vencimento() { return this._vencimento; }
  }

  const form = document.getElementById("formConta");
  const resultado = document.getElementById("resultado");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const c = new Corrente(
      document.getElementById("nomeC").value.trim(),
      document.getElementById("bancoC").value.trim(),
      document.getElementById("numeroC").value.trim(),
      parseFloat(document.getElementById("saldoC").value),
      parseFloat(document.getElementById("especial").value)
    );

    const p = new Poupanca(
      document.getElementById("nomeP").value.trim(),
      document.getElementById("bancoP").value.trim(),
      document.getElementById("numeroP").value.trim(),
      parseFloat(document.getElementById("saldoP").value),
      parseFloat(document.getElementById("juros").value),
      document.getElementById("vencimento").value.trim()
    );

    const resultadoHTML = `
      <h4>Conta Corrente</h4>
      Nome: ${c.nome}<br>
      Banco: ${c.banco}<br>
      Conta: ${c.numero}<br>
      Saldo: R$${c.saldo.toFixed(2)}<br>
      Saldo Especial: R$${c.saldoEspecial.toFixed(2)}
      <h4>Conta Poupança</h4>
      Nome: ${p.nome}<br>
      Banco: ${p.banco}<br>
      Conta: ${p.numero}<br>
      Saldo: R$${p.saldo.toFixed(2)}<br>
      Juros: ${p.juros}%<br>
      Vencimento: ${p.vencimento}`;

    resultado.innerHTML = resultadoHTML;
  });