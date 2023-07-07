import React from 'react';
// sv modo component
import style from './Rodape.module.css'
import {ReactComponent as MarcaRegistrada} from 'assets/imagens/marca_registrada.svg';


const  Rodape= () => {
    return ( 
        <footer className={style.rodape}>
         <MarcaRegistrada/>
         Desenvolvido por Italo Lopes
        </footer>
     );
}
 
export default Rodape;