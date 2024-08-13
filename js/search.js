// Seleciona o campo de busca pelo seletor de classe.
// O método `querySelector` retorna o primeiro elemento que corresponde ao seletor CSS fornecido.
// Neste caso, seleciona o elemento de entrada de texto com a classe 'input-search'.
const varInputNome = document.querySelector(".input-search");

// Adiciona um ouvinte de evento ao campo de busca para o evento 'input'.
// O evento 'input' é disparado toda vez que o valor do campo de busca muda, incluindo enquanto o usuário digita.
varInputNome.addEventListener("input", function () {
  // Obtém o valor atual do campo de busca, remove espaços extras no início e no final do texto,
  // e converte o texto para minúsculas para garantir uma comparação insensível a maiúsculas/minúsculas.
  const searchNome = this.value.trim().toLowerCase();

  // Seleciona todos os elementos que representam pacientes dentro do <tbody> com id 'new-pacientes'.
  // O método `querySelectorAll` retorna uma NodeList de todos os elementos que correspondem ao seletor CSS fornecido.
  const nomePaciente = document.querySelectorAll("#new-pacientes .paciente");

  // Verifica se o termo de busca não está vazio.
  if (searchNome.length > 0) {
    // Itera sobre cada elemento da NodeList usando o método `forEach`.
    // O método `forEach` executa a função fornecida para cada elemento na NodeList.
    nomePaciente.forEach((paciente) => {
      // Seleciona a célula que contém o nome do paciente dentro do elemento de paciente.
      // O método `querySelector` retorna o primeiro elemento que corresponde ao seletor CSS fornecido dentro do paciente.
      const tdNome = paciente.querySelector(".info-nome");
      // Obtém o texto do nome do paciente, remove espaços extras e converte para minúsculas.
      // `textContent` retorna o texto contido no elemento.
      const nome = tdNome.textContent.trim().toLowerCase();

      // Verifica se o nome do paciente inclui o termo de busca.
      // O método `includes` verifica se uma string contém o valor especificado.
      if (nome.includes(searchNome)) {
        // Se o nome inclui o termo de busca, remove a classe 'paciente-invisible' para mostrar o paciente.
        // O método `classList.remove` remove a classe CSS fornecida do elemento.
        paciente.classList.remove("paciente-invisible");
      } else {
        // Se o nome não inclui o termo de busca, adiciona a classe 'paciente-invisible' para ocultar o paciente.
        // O método `classList.add` adiciona a classe CSS fornecida ao elemento.
        paciente.classList.add("paciente-invisible");
      }
    });
  } else {
    // Se o campo de busca estiver vazio, mostra todos os pacientes removendo a classe 'paciente-invisible'.
    nomePaciente.forEach((paciente) => {
      paciente.classList.remove("paciente-invisible");
    });
  }
});
