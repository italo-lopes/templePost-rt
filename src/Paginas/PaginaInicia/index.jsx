import React from 'react';
import style from'./PaginaInicial.module.css'
import posts from 'json/posts.json'
import PostCard from 'componetes/PostCard';


const PaginaInicial = () => {
    console.table(posts)
    //const v = "assets/posts/1/capa.png"
    return ( 
        <main>
            <ul className={style.posts}>    
                {posts.map((elemento)=> {
                    return(
                    <li className={style.post} key={elemento.id}>

                        <PostCard
                            elemento={elemento}
                        />
                      
                    </li>
                    )
                 })}
            </ul>
        </main>
     );
}
 
export default PaginaInicial;

// <Banner/> é pai de dois url