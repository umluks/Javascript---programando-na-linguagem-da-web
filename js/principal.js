// Botão adicionar paciente
const btnAdicionar = document.querySelector(".adicionar-paciente");

btnAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  let form = document.querySelector("#form-adiciona"); // selecionar o formulário

  // Obter valores dos campos
  let varNome = form.nome.value;
  let varPeso = form.peso.value;
  let varAltura = form.altura.value;
  let varGordura = form.gordura.value;

  // Verificar se os valores são válidos
  if (varNome === "" || isNaN(varPeso) || isNaN(varAltura)) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  // Calcular IMC
  let varImc = (varPeso / (varAltura * varAltura)).toFixed(2);

  // Criar nova linha na tabela
  const varPacienteTr = document.createElement("tr");

  const varTdNome = document.createElement("td");
  const varTdPeso = document.createElement("td");
  const varTdAltura = document.createElement("td");
  const varTdGordura = document.createElement("td");
  const varTdImc = document.createElement("td");

  varTdNome.textContent = varNome;
  varTdPeso.textContent = varPeso;
  varTdAltura.textContent = varAltura;
  varTdGordura.textContent = varGordura;
  varTdImc.textContent = varImc;

  varPacienteTr.appendChild(varTdNome);
  varPacienteTr.appendChild(varTdPeso);
  varPacienteTr.appendChild(varTdAltura);
  varPacienteTr.appendChild(varTdGordura);
  varPacienteTr.appendChild(varTdImc);

  // Adicionar nova linha à tabela
  const table = document.querySelector("#tabela-pacientes");
  table.appendChild(varPacienteTr);

  // Limpar o formulário após adicionar
  form.reset();
});
