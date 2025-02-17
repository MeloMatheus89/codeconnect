import { useState } from 'react'
import './styles.css'

export default function BarraDePesquisa() {
    const [termoPesquisa, setTermoPesquisa] = useState('');
    console.log(termoPesquisa) // aqui você consegue ler exatamente o que está sendo digitado no input à medida que vai digitando
    return (
        <input 
        type='search' 
        placeholder='Digite o que você procura' 
        className="barra-pesquisa" 
        value={termoPesquisa}
        onChange={(evento) => setTermoPesquisa(evento.target.value)}
        />
    )
}