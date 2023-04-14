import React from 'react'
import styled from 'styled-components'
import Nav from './Nav';
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="../../public/images/logo.png" alt="logo" />

      </NavLink>
      <Nav/>

    </MainHeader>
    
  );
};

const MainHeader= styled.header`
padding: 0 4.8rem;
height: 10rem;
background-color: ${({theme}) => theme.colors.bg };
display:flex;
justify-content:space-between;
align-items:center;
position:relative;
.logo{
    height:12rem;
}

`

export default Header