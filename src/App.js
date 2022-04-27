import React, { useEffect, useState } from 'react';
import './App.css';
import {css} from "@emotion/core";
import PropagateLoader from "react-spinners/PropagateLoader";
import NavBar from './components/NavBar';
import Header from './components/Header';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';


function App() {

const [loading,setLoading] = useState(false);
const override = css`
display:block;
border-color:red;
margin:20%;
`;

useEffect(() => {
  setLoading(true)
  setTimeout(() =>{
    setLoading(false)
  }, 2000);
},[])

  return (
    <div className='App'>
    {
        loading ? <PropagateLoader color={'#3d2514'} loading={loading} css={override} size={30}/>
        :
      <>
    <NavBar />
    <Header />
    <Products />
    <About />
    <Contact />
    </>
}
    </div>
  );
}

export default App;
