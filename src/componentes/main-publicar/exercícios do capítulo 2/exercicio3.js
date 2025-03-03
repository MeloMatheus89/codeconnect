// 3) Manipulando o upload de imagem com Promises e Async/Await

// Conteúdo:

// Você trabalha em um projeto onde é necessário manipular uploads de imagem
// utilizando JavaScript. Para isso, você precisa ler o arquivo selecionado pelo
// usuário e exibir uma prévia dessa imagem na página,
// além de exibir o nome do arquivo.
// A funcionalidade de leitura do arquivo já está implementada utilizando
// Promises.
// Agora, é necessário implementar a função que utiliza esta leitura assíncrona de forma adequada.

// Implemente o seguinte:

// Adicione um event listener ao input de upload de arquivo para disparar a leitura do arquivo quando houver uma mudança.
// Utilize async e await para lidar com a sincronia da função de leitura do arquivo.
// Realize a leitura do arquivo, atualize a imagem na página e exiba o nome do arquivo.
// Capture e exiba qualquer erro que ocorra durante a leitura do arquivo.

// Resolução do exercício:

const uploadBtn = document.getElementById("botaoDeUpload");
const inputUpload = document.getElementById("upload");

uploadBtn.addEventListener("click", () => {
  inputUpload.click();
});

function lerConteudoDoArquivo(arquivo) {
  return new Promise((resolve, reject) => {
    const leitorDeArquivo = new FileReader();

    leitorDeArquivo.onload = () => {
      resolve({ url: leitorDeArquivo.result, nome: arquivo.name });
    };

    leitorDeArquivo.onerror = () => {
      reject(`Erro na leitura do arquivo ${arquivo.name}`);
    };
    leitorDeArquivo.readAsDataURL(arquivo);
  });
}

// Adiciona variáveis para a imagem de exemplo e o nome da imagem para serem usadas no upload de arquivo.
const imagemDeExemplo = document.querySelector(".imagem");
const nomeDaImagem = document.querySelector(".nome");

inputUpload.addEventListener("change", async (bagulho) => {
  const arquivo = bagulho.target.files[0];
  if (arquivo) {
    try {
      // Cria a variável conteudoDoBagulho para armazenar o conteúdo resultado da função lerConteudoDoArquivo
      const conteudoDoBagulho = await lerConteudoDoArquivo(bagulho);
      // Altero a origem da imagem e exibo nome do arquivo novo.
      imagemDeExemplo.src = conteudoDoBagulho.url;
      nomeDaImagem.textContent = conteudoDoBagulho.nome;
    } catch (error) {
      console.error("Tem parada errada aí, mano", error);
    }
  }
});
