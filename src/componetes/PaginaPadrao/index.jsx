import React from 'react';

import Banner from 'componetes/Banner'
import { Outlet } from 'react-router-dom';

const PaginaPadrao = () => {
    return ( 
          <main>
            <Banner/>
            <Outlet/>
          </main>  
     );
}
 
export default PaginaPadrao;
// <Banner/> é pai de dois url "/"" e  "/sobremim"
//  <Outlet/> vai buscar o filhos da renderização pelas url