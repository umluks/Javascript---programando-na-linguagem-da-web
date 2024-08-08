// Seleciona o botão de adicionar paciente
const btnAdicionar = document.querySelector(".adicionar-paciente");

btnAdicionar.addEventListener("click", function (event) {
  event.preventDefault(); // Previne o comportamento padrão do botão (submeter o formulário)

  const form = document.querySelector("#form-adiciona"); // Seleciona o formulário
  const paciente = obtemDadosPaciente(form); // Obtém os dados do formulário e os armazena em um objeto

  // Limpa mensagens de erro anteriores
  limpaMensagensErro();

  // Verifica se os dados do paciente são válidos
  const erro = validarPaciente(paciente);

  if (erro) {
    exibeMensagensErro(erro); // Exibe a mensagem de erro correspondente
    return; // Sai da função se os dados não forem válidos
  }

  const pacienteTr = montaTr(paciente); // Cria uma nova linha na tabela com os dados do paciente
  adicionaPacienteNaTabela(pacienteTr); // Adiciona a nova linha à tabela

  // document.querySelector(".new-paciente").textContent =
  //   "Paciente Adicionado com sucesso";

  form.reset(); // Reseta o formulário
});

function obtemDadosPaciente(form) {
  return {
    nome: form.nome.value,
    peso: parseFloat(form.peso.value),
    altura: parseFloat(form.altura.value),
  };
}

// Função que valida os dados do paciente
function validarPaciente(paciente) {
  let erros = {};

  if (paciente.nome === "") {
    erros.nome = "O nome não pode estar vazio.";
  }
  if (isNaN(paciente.peso) || paciente.peso <= 0) {
    erros.peso = "Peso inválido. Por favor, insira um valor maior que zero.";
  }
  if (isNaN(paciente.altura) || paciente.altura <= 0) {
    erros.altura =
      "Altura inválida. Por favor, insira um valor maior que zero.";
  }

  return Object.keys(erros).length > 0 ? erros : null;
}

// Função para limpar as mensagens de erro
function limpaMensagensErro() {
  document.querySelector(".erro-paciente-nome").textContent = "";
  document.querySelector(".erro-paciente-peso").textContent = "";
  document.querySelector(".erro-paciente-altura").textContent = "";
  document.querySelector(".new-paciente").textContent = "";
}

// Função para exibir as mensagens de erro
function exibeMensagensErro(erros) {
  if (erros.nome) {
    document.querySelector(".erro-paciente-nome").textContent = erros.nome;
  }
  if (erros.peso) {
    document.querySelector(".erro-paciente-peso").textContent = erros.peso;
  }
  if (erros.altura) {
    document.querySelector(".erro-paciente-altura").textContent = erros.altura;
  }
}

// Função que cria uma nova linha na tabela com os dados do paciente
function montaTr(paciente) {
  const pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  // Adiciona células à linha com os dados do paciente
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso.toFixed(2), "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura.toFixed(2), "info-altura"));
  pacienteTr.appendChild(
    montaTd(
      calculaValorImc(paciente.peso, paciente.altura).toFixed(2),
      "info-imc"
    )
  );

  return pacienteTr; // Retorna a linha criada
}

// Função que cria uma célula de tabela (td) com um dado e uma classe CSS
function montaTd(dado, classe) {
  const td = document.createElement("td");
  td.textContent = dado; // Define o conteúdo da célula
  td.classList.add(classe); // Adiciona a classe CSS à célula
  return td; // Retorna a célula criada
}

// Função que adiciona uma linha (tr) à tabela de pacientes
function adicionaPacienteNaTabela(pacienteTr) {
  const tabela = document.querySelector("#new-pacientes"); // Seleciona a tabela
  tabela.appendChild(pacienteTr); // Adiciona a linha à tabela
}

// Função que calcula o IMC (Índice de Massa Corporal)
function calculaValorImc(peso, altura) {
  return peso / (altura * altura); // Calcula o IMC
}
