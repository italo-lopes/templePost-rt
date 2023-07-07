import React from 'react';
import style from './Menu.module.css'
import { useState } from 'react';
import MenuLink from '../MenuLink'
import { Link, useLocation } from 'react-router-dom';



const Menu = () => {

    const [mostrar, setMostrar] = useState(false)
    const localizar = useLocation()
    console.log(localizar)
    const abrirMenu = () =>{
    
        mostrar?  setMostrar(false): setMostrar(true)
 
    }

    return ( 
        <header>
            <nav className={style.navegacao}>
                 
                   <MenuLink
                        style={style}
                        path = '/'
                   >
                    Inicio
                    </MenuLink>
                                  
                   <MenuLink
                        style={style}
                        path = '/sobremim'
                   >
                    Sobre mim
                    </MenuLink>


                <a className={style.link} href='/'>inicio</a>
                <div className={style.colecao} >
                <button  className={style.link}   onClick={abrirMenu}>Menu</button>
                {mostrar?
                                <ul className={style.lista} >
                                    <li><Link to={'/sobremim'} >Sobre mim</Link></li>
                                    <li><Link to={'/sobremim'}  >Sobre mim</Link></li>
                                </ul>
                        :
                            ''
                }
                </div>
            </nav>
        </header>
     );
}
 
export default Menu;

// é um componete que aparece em todos