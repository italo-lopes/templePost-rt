import './style/estiloGlobal.css';
import PaginaInicial from './Paginas/PaginaInicia'
import SobreMim from './Paginas/SobreMim';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Menu from './componetes/menu';
import Rodape from 'componetes/Rodape';
import PaginaPadrao from 'componetes/PaginaPadrao';
import Post from 'componetes/Post';
import NaoEncontrada from 'componetes/NaoEncontrada';


console.log(window.location)

//const pagina = window.location.pathname === "/" ? <ProjetoIncial /> : <SobreMim/>

// SOBRE ROTAS 

// 1 passo usando apenas o widow.lacation  window.location.pathname === "/" ? <ProjetoIncial /> : <SobreMim/>
// 2 Colocando uma biblioteca de rotas 
// 3 como intalar npm install react-router-dom@6
// 4 React importa BrowserRouter - router 
// 5 React  <BrowserRouter> <BrowserRouter/> implementa rotas  
// 6 Rotas de funcionamento depende de routes
// 7 Rotas - Algumas funcionalidades nao precisa ta dentro de Routes
// 8 Rotas - Mudamos o nome do APP pra AppRoutes from ./routes AppRoutes; e o 
// 9 svg   - Svg Ai a gente trabalhar com svg a gente trata como componente
//            import {ReactComponent as NomeComponete} from '/url/nome'
//A sintaxe import { ReactComponent as NomeDoComponente } from 'caminho_do_componente';

// 10 rotas aninhadas - usando outlet e a arvore de rota pai renderiza um dos rotas filhos 
// 11 rotas Pagina padrao e so pra colocar os componetes da rota pai

//12 rotas Utilizando rotas index e caminhos relativos,

// 13  style={ {backGround :`url(${fotoCapa})`} } >

// 14 rotas dinamica com useParams

// 15 volta pagina import {useNavigate} from 'react-router-dom'
//        const navagação = useNavigate()

//onClick={()=>navega("/")} ou //onClick={()=>navega(-1)}

//ao da cero post -  menu+ (post) banner +outlet (paginaPadrao path="*"  + posModelo index) +rodade

//e ao erro - post =  menu+(post) erro + rodape
// <Route path="posts/:postId/*" element={<Post/>}/>
//quando tite um route chamando no comp outro route pai usar o *
function AppRoutes() {
  return (
  <BrowserRouter>
     <Menu/>
    <Routes>

      <Route path='/' element={<PaginaPadrao/>} > 
        {/* <Route path="/" element={<PaginaInicial />} />  */}
        <Route index element={<PaginaInicial />} />
        <Route path="sobremim" element={<SobreMim />} />
      </Route>
      <Route path="posts/:postId/*" element={<Post/>}/>
      <Route path = "*" element={<NaoEncontrada/>} />
    </Routes>
    <Rodape/>
  </BrowserRouter>
 
  );
} 

export default AppRoutes;

/*
Na rota "/", a estrutura a sser renderizada é:
<PaginaPadrao/>
  <Inicio/>
</PaginaPadrao>

Na rota "/sobremim", a estrrutura a ser renderizada é:

<PaginaPadrao>
  <SobreMim/>
</PaginaPadrao>


*/

// path="/"  - index



//pai renderiza tudo de / e depois renderiza o filho q escolhe