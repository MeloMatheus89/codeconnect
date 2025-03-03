const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload");

uploadBtn.addEventListener("click", () => {
  inputUpload.click();
});

function lerConteudoDoArquivo(arquivo) {
  // Retorna uma Promise que resolve com o conteúdo do arquivo
  return new Promise((resolve, reject) => {
    // Cria um objeto FileReader (que já está incluso no navegador)
    const leitor = new FileReader();

    // Quando o leitor terminar de ler o arquivo, chama a função resolve
    // com o conteúdo do arquivo. Se houver um erro, chama a função reject.
    leitor.onload = () => {
      resolve({ url: leitor.result, nome: arquivo.name });
    };
    leitor.onerror = () => {
      reject(`Erro na leitura do arquivo ${arquivo.name}`);
    };

    leitor.readAsDataURL(arquivo);
  });
}
// Adiciona variáveis para a imagem principal e o nome da imagem. Elas serão usadas para validar o upload de arquivo.
const imagemPrincipal = document.querySelector(".main-imagem");
const nomeDaImagem = document.querySelector(".container-imagem-nome p");

//Ao mudar o arquivo, a função lerConteudoDoArquivo é chamada para ler o conteúdo do arquivo e exibir a imagem na página.
inputUpload.addEventListener("change", async (evento) => {
  //cria-se uma constante arquivo para armazenar o arquivo selecionado pelo usuário
  const arquivo = evento.target.files[0];
  //Se o arquivo existir, a função lerConteudoDoArquivo é chamada para ler o conteúdo do arquivo e exibir a imagem na página.
  if (arquivo) {
    try {
      const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
      //Atualiza a imagem na página e exibe o nome do arquivo. Variáveis que foram chamadas anteriormente, agora foram usadas.
      imagemPrincipal.src = conteudoDoArquivo.url;
      nomeDaImagem.textContent = conteudoDoArquivo.nome;
    } catch (erro) {
      console.error("Erro na leitura do arquivo", erro);
    }
  }
});

const inputTags = document.getElementById("input-tags");
const listaTags = document.getElementById("lista-tags");

inputTags.addEventListener("keypress", (evento) => {
  if (evento.key === "Enter") {
    evento.preventDefault();
    const tagTexto = inputTags.value.trim();
    if (tagTexto !== "") {
      const novaTag = document.createElement("li");
      novaTag.innerHTML = `<p>${tagTexto}</p><img src="./assets/close-black.svg" class="remove-tag" />`;
      listaTags.appendChild(novaTag);
      inputTags.value = "";
    }
  }
});

listaTags.addEventListener("click", (evento) => {
  if (evento.target.classList.contains("remove-tag")) {
    const tagQueQueremosRemover = evento.target.parentElement;
    listaTags.removeChild(tagQueQueremosRemover);
  }
});

const tagsDisponiveis = ["Front-end", "Programação", "Data Science", "Full-stack", "HTML", "CSS", "JavaScript"];

async function verificaTagsDisponiveis(tagTexto) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tagsDisponiveis.includes(tagTexto));
    }, 1000);
  });
}
