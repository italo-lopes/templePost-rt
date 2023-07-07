import React from 'react';
import { Routes, useParams, Route} from 'react-router-dom';
import posts from 'json/posts.json';
import PostModelo from 'componetes/PostModelo';
import ReactMarkdown from 'react-markdown'
import style from './Post.module.css'
import NaoEncontrada from 'componetes/NaoEncontrada';
import PaginaPadrao from 'componetes/PaginaPadrao';
import PostCard from 'componetes/PostCard';


const Post = () => {

    const parameto = useParams()

//console.table(lo)
    const post = posts.find((element)=> {
      return element.id === Number(parameto.postId)
    })


    if(!post){
        return <NaoEncontrada/>
    } 
    //posts.length 
    const elimina1= parseInt(Math.random() * posts.length)
    const elimina2= parseInt(Math.random() * posts.length)
    const postRecomendado = posts.filter((element,index)=>{
          if(element.id !== post.id && 
            elimina1 !== element.id && 
            elimina2 !== element.id 
            ){

            return element
          } 
          return false
    }).sort((a,b) => b.id - a.id).slice(0,4)

    // como selecionar o numero de elementos que eu quero pegar
    //slice()
    console.table(postRecomendado)

   // console.log(parameto);
   // nao encontrado bele mas se encontrar queero usar o banner e o metodo seguindo o outlet
   // buscando o componete post vou dizer se retorno o  return <NaoEncontrada/>
   // ou  a rota definida ao encontrar
   return (
        <Routes>
            <Route path="*" element ={<PaginaPadrao/>}>
                <Route index element={
                          <PostModelo
                          fotoCapa={`assets/posts/${post.id}/capa.png`}
                          titulo ={post.titulo}      
                          >
                            <div className={style.postmarkdowncontainer}>
                              <ReactMarkdown>
                              {post.texto}
                              </ReactMarkdown>
                            </div>
                            <h2 className={style.tituloOutrosPosts}>
                            Outros posts que você pode gostar:
                            </h2>
                            <ul className={style.postsRecomendados}>
                             {postRecomendado.map((elemento)=>{ return(
                              <li key = {elemento.id} >
                                <PostCard
                                elemento = {elemento}
                                />
                              </li>

                             )})}
                              </ul>
                       
                          </PostModelo>

                }/>
            </Route>
        </Routes>
       );  
}
 
export default Post;

// se acahr um post vai rederizar o banner que e de pagina padrao menos para erros
// e depois de renderizar o banner vaia achar o filho corresponde a url como é a msm do pai
// index pq n teeve alteração ao chegar nessa roda entao index 
// e entao rederiza o elemento de post

// mudança de route necessaria