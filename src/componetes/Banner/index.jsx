import React from 'react';
import styles from './Banner.module.css'
import circuloColorido from 'assets/imagens/circulo_colorido.png';
import minhaFoto from 'assets/imagens/minha_foto_roboto.png';

const Banner = () => {
    return (  
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo} >
                    Olá, Mundo !
                </h1>
                <p className={styles.paragrafo}>
                Boas vindas ao meu espaço pessoal!
                 Eu sou Italo Lopes,  
                 Aqui compartilho vários conhecimentos, 
                espero que aprenda algo novo.     
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    alt='imagem de perfil'
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={false}
                />

                <img 
                className={styles.minhaFoto}
                src={minhaFoto}
                alt="Foro de italo roboto"
                
                />
            </div>
        </div>
    );
}
 
export default Banner;