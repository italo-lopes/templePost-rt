import React from 'react';
import style from './NaoEncontrado.module.css';
import erro404 from 'assets/imagens/erro_404.png';
import {useNavigate} from 'react-router-dom'
import Botao from 'componetes/Botao'

const NaoEncontrada = () => {

    const navega = useNavigate();
    console.log("================")
    console.log(navega)
    console.log("================")
    return ( 
        <>
        <div className={style.conteudoContainer}>
            <span className={style.texto404}>404</span>

            <h1 className={style.titulo}>
                Ops! Pagina não encontrada
            </h1>

            <p className={style.paragrafo}>
                Tem certeza de que era isso qie voce estava procurando?
            </p>

            <p className={style.paragrafo}>
                Aguarde uns instantes e recaregue a pagina, ou
                volte paa a pagina Inicial
            </p>

            <div 
            className={style.botaoContainer}
            onClick={()=>navega("/")}
            >
                {/* <Link to={"/"}> */}
                <Botao
                tamanho={'lg'}
                >
                                Voltar
                </Botao>
                {/* </Link> */}
            </div>

            <img
                className={style.imagemCachorro}
                src={erro404}
                alt= "Cachorro de oculos e vestido"
            />
        </div>
        <div className={style.espacoEmBranco}>

        </div>
        </>
     );
}
 
export default NaoEncontrada;