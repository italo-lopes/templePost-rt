import React from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
   
    const { pathname } = useLocation();


    useEffect(() => {
        window.scrollTo(0, 0);
        console.log("usando ScrollToTop")
    }, [pathname]);
    // quando tem mudança na costante  a função e chamda [pathname]
    return (<></>);
} 
    
    
export default ScrollToTop;