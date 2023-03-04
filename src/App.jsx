import React from "react";
import {Routes, Route} from "react-router-dom";



import Header from "./components/moleculas/header/header";
import Main from "./components/moleculas/main/main";
import Contacto from "./components/organismos/contacto/contacto";
import Nav from "./components/organismos/nav/nav";
import Footer from "./components/organismos/footer/footer";
import BotonWsp from "./components/atomos/botonWsp/botonWsp";
function App() {
  return (
    <>  
      <Nav/>
      <BotonWsp/>
        <Header/>
        <Main/>

        <Contacto/>
          <Routes>

          </Routes>
        <Footer/>

    </>
  );
}

export default App;
