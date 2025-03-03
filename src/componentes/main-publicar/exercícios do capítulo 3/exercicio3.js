// 3) Removendo tags ao clicar no "x"

// Conteúdo:

// Você trabalha em uma rede social para desenvolvedores e precisa implementar
// a funcionalidade de remoção de tags criadas pelos usuários.
// Para isso, você deve detectar o clique no ícone de "x" e remover a tag correspondente.
//  Utilize o código fornecido abaixo e construa a funcionalidade de remoção de tags.

// Código fornecido está colado no HTML com mesmo nome.
// Resolução

const removeTag = document.getElementById("tagList").addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-tag")) {
    const tagToRemove = event.target.parentElement;
    tagToRemove.remove();
  }
});
