var importaPacientes = document.querySelector(".importa-pacientes");

importaPacientes.addEventListener("click", function () {
  console.log("Botão de importação de pacientes clicado");

  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json"
  );

  console.log(
    "Requisição aberta para o URL: http://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json"
  );

  xhr.addEventListener("load", function () {
    if (xhr.status == 200) {
      console.log("Dados carregados com sucesso!");
      const respostaJson = xhr.responseText;
      console.log("Resposta recebida:", respostaJson);

      const pacientes = JSON.parse(respostaJson);
      console.log("Pacientes convertidos de JSON:", pacientes);

      pacientes.forEach(function (paciente) {
        console.log("Adicionando paciente:", paciente);
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      console.error("Erro ao carregar os dados:", xhr.status, xhr.statusText);
    }
  });

  xhr.send();
  console.log("Requisição enviada");
});
