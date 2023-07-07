import React from 'react';
import { useParams } from 'react-router-dom';
import posts from 'json/posts.json';
import PostModelo from 'componetes/PostModelo';
import ReactMarkdown from 'react-markdown'
import style from './Post.module.css'


const Post = () => {

    const parameto = useParams()

    const post = posts.find((element)=> {
      return element.id === Number(parameto.postId)
    })

    if(!post){
        return <h1>Post nao eencontrado</h1>
    }
    console.log(parameto);
    return (

      <PostModelo
      fotoCapa={`assets/posts/${post.id}/capa.png`}
      titulo ={post.titulo}      
      >
        <div className={style.postmarkdowncontainer}>
          <ReactMarkdown>
          {post.texto}
          </ReactMarkdown>
        </div>
      </PostModelo>
      );  
}
 
export default Post;