// Função para salvar o paciente no LocalStorage
function salvaPacienteLocal(paciente) {
  let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
  pacientes.push(paciente);
  localStorage.setItem("pacientes", JSON.stringify(pacientes));

  // Mensagens de log para verificação
  console.log("Paciente salvo:", paciente);
  console.log(
    "Todos os pacientes:",
    JSON.parse(localStorage.getItem("pacientes"))
  );
}

const btnAdicionar = document.querySelector(".adicionar-paciente");

btnAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Botão de adicionar paciente clicado");

  const form = document.querySelector("#form-adiciona");
  const paciente = obtemDadosPaciente(form);
  console.log("Dados do paciente obtidos:", paciente);

  limpaMensagensErro();

  const erro = validarPaciente(paciente);
  if (erro) {
    console.log("Erro de validação encontrado:", erro);
    exibeMensagensErro(erro);
    return;
  }

  const pacienteTr = montaTr(paciente);
  console.log("Linha do paciente montada:", pacienteTr);

  adicionaPacienteNaTabela(pacienteTr);
  console.log("Paciente adicionado à tabela");

  form.reset();
  console.log("Formulário resetado");
});

// Função que adiciona uma linha (tr) à tabela de pacientes
function adicionaPacienteNaTabela(pacienteTr) {
  const tabela = document.querySelector("#new-pacientes"); // Seleciona a tabela
  tabela.appendChild(pacienteTr); // Adiciona a linha à tabela
}

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
    nome.classList.add("paciente-error");
    erros.nome = "O nome não pode estar vazio.";
  }
  if (isNaN(paciente.peso) || paciente.peso <= 0) {
    peso.classList.add("paciente-error");
    erros.peso = "Peso inválido. Por favor, insira um valor maior que zero.";
  }
  if (isNaN(paciente.altura) || paciente.altura <= 0) {
    altura.classList.add("paciente-error");
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
