import "./styles.css";
import Close from "./assets/close.png";
import CloseBlack from "./assets/close-black.svg";
import ImagemTeste from "./assets/imagem1.png";

//TO DO: Implementar o upload da imagem.

export default function MainPublicar() {
  // const uploadBtn = document.getElementById("upload-btn");
  // const inputUpload = document.getElementById("image-upload");

  // uploadBtn.addEventListener("click", () => {
  //   inputUpload.click();
  // });

  return (
    <main>
      <div className="container-upload-imagem">
        <div className="container-imagem">
          <img src={ImagemTeste} alt="" className="main-imagem" />
        </div>
        <button id="upload-btn">Carregar Imagem</button>
        <input type="file" id="image-upload" accept="image/" style={{ display: "none" }} />
        <div className="container-imagem-nome">
          <p>Image_projeto.png</p>
          <img src={Close} />
        </div>
      </div>
      <div className="container-descricao">
        <h2>Novo Projeto</h2>
        <form>
          <div>
            <label htmlFor="nome">Nome do projeto</label>
            <input type="text" id="nome" name="nome" />
          </div>
          <div>
            <label htmlFor="descricao">Descrição</label>
            <textarea id="descricao" name="descricao"></textarea>
          </div>
          <div>
            <label htmlFor="categoria">Tags</label>
            <input type="text" id="categoria" name="categoria" />
          </div>
          <ul className="lista-tags">
            <li>
              <p>Front-End</p>
              <img src={CloseBlack} />
            </li>
          </ul>
          <div className="container-botoes">
            <button className="botao-descartar">Descartar</button>
            <button className="botao-publicar">Publicar</button>
          </div>
        </form>
      </div>
    </main>
  );
}
