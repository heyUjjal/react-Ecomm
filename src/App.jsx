import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Home from "./Home";
import Contact from "./Contact";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import About from "./About";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header"

const App = () => {
  const theme = {
   colors:{
    heading:"rgb(24 24 29)",
    text:"rgb(29, 29, 29, ,0.8)",
    white:"#fff",
    black:"#212529",
    helper:"#8490ff",
    bg: "#F6F8FA",
    footer_bg:"#0a1435",
    btn:"rgb(98, 84, 243)",
    border:"rgb(98 84 243 0.5)",
    hr:"#ffffff",
    gradient:"linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
    shadow:"rgb(0,0,0, 0.02) 0px 1px 3px 0px, rgba(27 31 35 0.15) 0px 0px 0px 1px",
    shadowSupport:"rgba(0, 0, 0, 0.16) 0px 0px 1px",

   },
   media:{
    mobile:"768px",
    tab:"998px",

   },
  }

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product" element={<Products/>}/>
        <Route path="/SingleProduct" element={<SingleProduct/>}/>
        {/* <Route path="*" element={<ErrorPage/>}/> */}
      </Routes>
    </Router>
    </ThemeProvider>
  )
};

export default App;