import React from 'react';
import Botao from 'componetes/Botao';
import style from './Post.module.css';
import { Link } from 'react-router-dom';

const PostCard = ({elemento}) => {
    console.log(elemento.id)
    return (  
     <Link to ={`/posts/${elemento.id}`}>
        <div className={style.post}>    
            <img className={style.capa}
            src={`../assets/posts/${elemento.id}/capa.png`}
            alt ={`foto do ${elemento.titulo}`}
            />
            <h2 className={style.titulo} >{elemento.titulo}</h2>
            <Botao
            id={elemento.id}
            titulo ={elemento.titulo}
            >
                Ir para
            </Botao>
        </div>
     </Link>
    )
}
 
export default PostCard;