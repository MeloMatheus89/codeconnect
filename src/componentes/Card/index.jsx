import Capa from './assets/capa.png'
import Code from './assets/code.svg'
import Chat from './assets/chat.svg'
import Share from './assets/share.svg'
import Icone from './assets/icone.png'

export default function Card(){
    return (
        <article className="card">
            <div className="card__imagem">
                <img src={Capa}></img>
                <div className="card__conteudo">
                    <div className="conteudo__texto">
                        <h3>Título do Post</h3>
                        <p>Resumo do Post</p>
                    </div>
                    <div className="conteudo__rodape">
                        <ul>
                            <li>
                                <img src={Code} alt="Códigos"/>100
                            </li>
                            <li>
                                <img src={Share} alt="Compartilhamentos"/>12
                            </li>
                            <li>
                                <img src={Chat} alt="Comentários"/>30
                            </li>
                        </ul>
                        <div className="rodape__usuario">
                        <img src={Icone} alt='imagem do usuário' />
                        @Matheus
                        </div>
                    </div>
                </div>
            </div>

        </article>
    )
}