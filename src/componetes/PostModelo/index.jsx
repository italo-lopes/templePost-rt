import React from 'react';
import style from './PostModelo.module.css';



const PostModelo = ({children, fotoCapa ,titulo}) => {
    // recebe o back groud de onde ta o componente
    return (    
        <article className={style.postModeloContainer}>
            <div 
            className={style.fotoCapa} 
            style={{backgroundImage:`url(${fotoCapa})` }}>
            </div>
            <h2 className={style.titulo}>
                {titulo}
            </h2> 
            <div className={style.postConteudoContainer}>
                {children}
            </div>
        </article> 
     );
}
 
export default PostModelo;