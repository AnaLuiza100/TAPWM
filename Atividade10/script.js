// Forma 1: Notação Literal
const funcionarioLiteral = {
    matricula: "001",
    nome: "Ana Silva",
    funcao: "Analista de Sistemas"
  };
  
  // Forma 2: new Object()
  const funcionarioObjeto = new Object();
  funcionarioObjeto.matricula = "002";
  funcionarioObjeto.nome = "João Souza";
  funcionarioObjeto.funcao = "Designer";
  
  // Forma 3: Função Construtora
  function Funcionario(matricula, nome, funcao) {
    this.matricula = matricula;
    this.nome = nome;
    this.funcao = funcao;
  }
  const funcionarioConstrutor = new Funcionario("003", "Rita Costa", "Gerente de Projetos");
  
  // Função para exibir os dados
  function mostrarFuncionario(funcionario, elementoId, titulo) {
    const container = document.getElementById(elementoId);
    container.innerHTML = `
      <h2>${titulo}</h2>
      <p><strong>Matrícula:</strong> ${funcionario.matricula}</p>
      <p><strong>Nome:</strong> ${funcionario.nome}</p>
      <p><strong>Função:</strong> ${funcionario.funcao}</p>
    `;
  }
  
  mostrarFuncionario(funcionarioLiteral, "forma1", "Forma 1: Objeto Literal");
  mostrarFuncionario(funcionarioObjeto, "forma2", "Forma 2: new Object()");
  mostrarFuncionario(funcionarioConstrutor, "forma3", "Forma 3: Função Construtora");
  