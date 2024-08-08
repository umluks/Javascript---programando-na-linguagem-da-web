const excluirPaciente = document.querySelectorAll(".info-nome");

excluirPaciente.forEach((paciente) => {
  paciente.addEventListener("dblclick", () => {
    // Exibe um alerta de confirmação antes de excluir o paciente
    const msgConfirmacao = confirm(
      "Deseja realmente excluir o paciente " + paciente.textContent + "?"
    );

    if (msgConfirmacao) {
      paciente.parentElement.remove(); // Remove a linha do paciente na tabela
    }
  });
});
