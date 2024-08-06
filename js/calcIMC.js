const varPacientes = document.querySelectorAll(".paciente"); // Seleciona todos os elementos com a classe "paciente"

for (let i = 0; i < varPacientes.length; i++) {
  // Itera sobre cada paciente
  const paciente = varPacientes[i]; // Seleciona o paciente atual

  let varPeso = paciente.querySelector(".info-peso"); // Seleciona o elemento que contém o peso do paciente
  let peso = varPeso.textContent; // Obtém o conteúdo de texto do elemento peso

  let varAltura = paciente.querySelector(".info-altura"); // Seleciona o elemento que contém a altura do paciente
  let altura = varAltura.textContent; // Obtém o conteúdo de texto do elemento altura

  let pesoValido = true; // Inicializa a variável pesoValido como true
  if (peso <= 0 || peso >= 1000) {
    // Verifica se o peso é inválido
    varPeso.textContent = "Peso Inválido!"; // Define o texto do elemento peso como "Peso Inválido!"
    pesoValido = false; // Define pesoValido como false
    varPeso.classList.add("paciente-error"); // Adiciona a classe "paciente-error" ao elemento peso
  }

  let alturaValida = true; // Inicializa a variável alturaValida como true
  if (altura <= 0 || altura >= 4.0) {
    // Verifica se a altura é inválida
    varAltura.textContent = "Altura Inválida!"; // Define o texto do elemento altura como "Altura Inválida!"
    alturaValida = false; // Define alturaValida como false
    varAltura.classList.add("paciente-error"); // Adiciona a classe "paciente-error" ao elemento altura
  }

  let varImc = paciente.querySelector(".info-imc"); // Seleciona o elemento que contém o IMC do paciente

  if (pesoValido && alturaValida) {
    // Verifica se peso e altura são válidos
    const calcImc = peso / (altura * altura); // Calcula o IMC
    varImc.textContent = calcImc.toFixed(0); // Define o texto do elemento IMC com o valor calculado
  } else {
    // Caso peso ou altura sejam inválidos
    varImc.textContent = "Impossível calcular o IMC!"; // Define o texto do elemento IMC como "Impossível calcular o IMC!"
    varImc.classList.add("paciente-error"); // Adiciona a classe "paciente-error" ao elemento IMC
  }
}
