import React from 'react';
import style from './MenuLink.module.css'
import { NavLink } from 'react-router-dom';

const MenuLink = ({children, path}) => {
    //const localizar = useLocation() ->isActive
    console.log(children)
    return (
        <NavLink 
        className={({ isActive }) => `
        ${style.link}
        ${isActive ? style.linkDecoracao : ""}
            `}


        to={path}
        end
        > 
            {children}
        </NavLink>
      );
}
 
export default MenuLink;