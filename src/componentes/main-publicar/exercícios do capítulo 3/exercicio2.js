// Exercício 2) Validação de formulário de cadastro com JavaScript

// Conteúdo:

// Você está desenvolvendo um sistema de cadastro de usuários e precisa validar
// os campos de um formulário antes de enviar os dados ao servidor.
// Os campos que precisam ser validados são: nome, e-mail e senha.
// A validação deve garantir que todos os campos estejam preenchidos e
// que o e-mail esteja em um formato válido.

// Resolução:

const formulario = document.querySelector("form");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputSenha = document.getElementById("senha");

formulario.addEventListener("submit", (evento) => {
  //To Do: Implementar a validação do formulário.

  if (inputNome.value.trim() === "" || inputEmail.value.trim() === "" || inputSenha.value.trim() === "") {
    evento.preventDefault();
    alert("Você não preencheu todos os campos corretamente.");
  }
  // Validação do e-mail. Se o e-mail não contiver "@" e ".", ele não é válido.
  // Basicamente ele pergunta se o e-mail está em algum domínio de e-mail
  // da forma que a gente reconhece a escrita do e-mail.
  else if (!inputEmail.value.includes("@") || !inputEmail.value.includes(".")) {
    evento.preventDefault();
    alert("O e-mail informado não é válido.");
  }
});
