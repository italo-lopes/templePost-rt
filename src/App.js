import './style/estiloGlobal.css';
import ProjetoIncial from './Paginas/PaginaInicia'
import SobreMim from './Paginas/SobreMim';

console.log(window.location)

const pagina = window.location.pathname === "/" ? <ProjetoIncial /> : <SobreMim/>

// SOBRE ROTAS 
function App() {
  return (

 pagina
 
  );
}

export default App;
