function calculaImcPaciente() {
  const pacientes = document.querySelectorAll(".paciente"); // Seleciona todos os elementos com a classe "paciente"

  pacientes.forEach((paciente) => {
    // Itera sobre cada paciente
    const pesoElemento = paciente.querySelector(".info-peso"); // Seleciona o elemento que contém o peso do paciente
    const peso = parseFloat(pesoElemento.textContent); // Obtém o conteúdo de texto do elemento peso e converte para número

    const alturaElemento = paciente.querySelector(".info-altura"); // Seleciona o elemento que contém a altura do paciente
    const altura = parseFloat(alturaElemento.textContent); // Obtém o conteúdo de texto do elemento altura e converte para número

    const pesoValido = validaPeso(peso, pesoElemento);
    const alturaValida = validaAltura(altura, alturaElemento);

    const imcElemento = paciente.querySelector(".info-imc"); // Seleciona o elemento que contém o IMC do paciente

    if (pesoValido && alturaValida) {
      // Verifica se peso e altura são válidos
      const imc = calculaValorImc(peso, altura); // Calcula o IMC
      imcElemento.textContent = imc.toFixed(2); // Define o texto do elemento IMC com o valor calculado
    } else {
      // Caso peso ou altura sejam inválidos
      imcElemento.textContent = "Impossível calcular o IMC!"; // Define o texto do elemento IMC como "Impossível calcular o IMC!"
      imcElemento.classList.add("paciente-error"); // Adiciona a classe "paciente-error" ao elemento IMC
    }
  });
}

function validaPeso(peso, pesoElemento) {
  if (peso <= 0 || peso >= 1000) {
    // Verifica se o peso é inválido
    pesoElemento.textContent = "Peso Inválido!"; // Define o texto do elemento peso como "Peso Inválido!"
    pesoElemento.classList.add("paciente-error"); // Adiciona a classe "paciente-error" ao elemento peso
    return false;
  }
  return true;
}

function validaAltura(altura, alturaElemento) {
  if (altura <= 0 || altura >= 4.0) {
    // Verifica se a altura é inválida
    alturaElemento.textContent = "Altura Inválida!"; // Define o texto do elemento altura como "Altura Inválida!"
    alturaElemento.classList.add("paciente-error"); // Adiciona a classe "paciente-error" ao elemento altura
    return false;
  }
  return true;
}

function calculaValorImc(peso, altura) {
  return peso / (altura * altura); // Calcula o IMC
}

// Chame a função calculaImc para executar o código
calculaImcPaciente();
