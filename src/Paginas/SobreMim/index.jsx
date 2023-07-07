import React from 'react';
import PostModelo from 'componetes/PostModelo';
import fotoCapa from "assets/imagens/sobre_mim_capa.png";
import styles from "./Sobremim.module.css"
import  fotoSobreMim from "assets/imagens/minha_foto_roboto.png"

const SobreMim = () => {
    // ja que é igual ao templete do post de info eu uso ele
    // a props passa a parte generica e a contrução da pagina eu passo por children na configuração
    // uso esse post modelo pra cada situação chamo ele como componete de texto 
    // props levar a capa de fundo e titulo 

    

    return ( 

        <PostModelo
        fotoCapa={fotoCapa}
        titulo = "Ola, voce pode me chamar de scorpion"
        >
           <h3 className={styles.subtitulo}>
                Oi, Vida Longa e Prospera 
           </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Italo lopes"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Eu sou vulcano, Nasci na Terra, um planeta regido pela lógica e emoções.
            </p>
            <p className={styles.paragrafo}>
                Desde cedo, senti uma dualidade dentro de mim, uma batalha constante entre minha natureza logica e minhas emoções.
            </p>
            <p className={styles.paragrafo}>
                Quando cheguei à idade adulta, decidi me juntar à area de TI. 
                Lá, minha capacidade de raciocínio lógico me destacou como um dos alunos mais brilhantes. 
            </p>
            <p className={styles.paragrafo}>
                 No entanto, também enfrentei desafios ao tentar lidar com minhas emoções humanas.
            </p>
            <p className={styles.paragrafo}>
                Após me formar, fui designado para O MERCADO  de trabalho , Minha posição a bordo era a de desenvolverdor. 
            </p>
            <p className={styles.paragrafo}>
                As empressas tornou-se meu lar e minha equipe se tornou minha família.
                A bordo dessa aventura, enfrentamos inúmeras missões desafiadoras.
            </p>
            <p className={styles.paragrafo}>
                 Minha abordagem sempre foi fundamentada na lógica,buscando soluções racionais para os problemas que encontrávamos. 
            </p>
            <p className={styles.paragrafo}>
                Minha habilidade de controlar minhas emoções provou ser uma vantagem em situações de alta pressão.
            </p>
            
        </PostModelo>
     );
}
 
export default SobreMim;