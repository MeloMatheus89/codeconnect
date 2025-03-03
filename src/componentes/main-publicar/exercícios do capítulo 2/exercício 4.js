// Implementando Preview de Arquivo de Texto com Promises e Async/Await

// Conteúdo:

// Você trabalha em um projeto onde é necessário manipular uploads
// de arquivos de texto utilizando JavaScript.
// Para isso, você precisa ler o arquivo selecionado pelo usuário e
// exibir seu conteúdo na página.
// A funcionalidade de leitura do arquivo já está implementada utilizando
// Promises. Agora, é necessário implementar a função que utiliza esta leitura assíncrona de forma adequada.

// Implemente o seguinte:

// Adicione um event listener ao input de upload de arquivo para disparar a leitura do arquivo quando houver uma mudança.
// Utilize async e await para lidar com a sincronia da função de leitura do arquivo.
// Realize a leitura do arquivo, atualize o conteúdo do arquivo na página.
// Capture e exiba qualquer erro que ocorra durante a leitura do arquivo.

const upload = document.querySelector("#upload");
const conteudoArquivo = document.querySelector("#conteudoArquivo");

upload.addEventListener("change", async (evento) => {
  const arquivo = evento.target.files[0];
  if (arquivo) {
    try {
      const algumConteudo = await lerConteudoDoArquivo(arquivo);
      conteudoArquivo.textContent = algumConteudo.text;
    } catch (error) {
      console.error("Erro na leitura do arquivo", error);
    }
  }
});
