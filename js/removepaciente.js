// querySelector seleciona o primeiro elemento que corresponde ao seletor CSS especificado.
// Neste caso, seleciona a primeira tabela <table> encontrada no documento.
var excluirPaciente = document.querySelector("table");

// addEventListener adiciona um ouvinte de evento ao elemento selecionado.
// Aqui, está ouvindo o evento de duplo clique ("dblclick") em qualquer lugar da tabela.
excluirPaciente.addEventListener("dblclick", function (event) {
  // Quando ocorre um duplo clique, esta função é executada.
  // event.target refere-se ao elemento específico dentro da tabela que foi clicado.

  // confirm exibe uma caixa de diálogo com uma mensagem de confirmação e botões OK e Cancelar.
  // O texto da mensagem inclui o conteúdo de texto do elemento clicado.
  // Se o usuário clicar em "OK", confirm retorna true; se clicar em "Cancelar", retorna false.
  const msgConfirmacao = confirm(
    "Deseja realmente excluir o paciente " + event.target.textContent + "?"
  );

  // Se o usuário confirmar a exclusão (msgConfirmacao for true):
  if (msgConfirmacao) {
    // remove é um método que remove o elemento do DOM.
    // event.target.parentNode acessa o elemento pai (geralmente uma linha da tabela <tr>)
    // do elemento que foi clicado, e remove essa linha inteira da tabela.
    event.target.parentNode.remove();
  }
});
