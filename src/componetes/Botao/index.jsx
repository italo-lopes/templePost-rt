import React from 'react';
import style from './Botao.module.css'

const Botao = (props) => {
    const indoParaPost =()=>{
        console.log(props)
    }
    return ( 
 
            <button  className={style.botaoLer}  onClick={indoParaPost} >Ir Para</button>
  
     );
}
export default Botao;