import React from "react";
import style from "./Botao.module.css";

const Botao = (props) => {
  const indoParaPost = () => {
    console.log(props);
  };
  return (
    <button className={`${style.botaoLer}
    ${style[props.tamanho]}`} 
    onClick={indoParaPost}>
      {props.children}
    </button>   
  );
};
export default Botao;
