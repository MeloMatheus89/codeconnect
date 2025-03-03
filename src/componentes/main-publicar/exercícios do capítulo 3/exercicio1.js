// Exercício 1) Adicionando tags dinamicamente com JavaScript

// Conteúdo:

// Você trabalha em um projeto web onde precisa adicionar dinamicamente
// tags a partir do input do usuário.
// O objetivo é permitir que os usuários insiram novas tags pressionando a
// tecla Enter e que estas tags sejam exibidas em uma lista na tela.
// Vamos implementar essa funcionalidade.

const incluirTags = document.getElementById("input-tags");
const listaDeTags = document.getElementById("lista-de-tags");

incluirTags.addEventListener("keypress", (evento) => {
  //TO DO: ouvir o elemento ao apertar enter
  if (evento.key === "Enter") {
    evento.preventDefault();
    const textoDaTag = incluirTags.value.trim();
    // Adicionar o texto do campo "input-tags" em um elemento HTML padronizado e adicionar ele à lista.
    if (textoDaTag !== "") {
      const tagNova = document.createElement("li");
      tagNova.innerHTML = `<p>${textoDaTag}</p>`;
      listaDeTags.appendChild(tagNova);
      incluirTags.value = "";
    }
  }
});
