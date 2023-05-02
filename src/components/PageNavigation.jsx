import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function PageNavigation({title}) {
    console.log(title);
  return (
    <Wrapper>
        <Link to="/">
            Home
        </Link>
        <span>/ {title}</span>

    </Wrapper>
    
  )
}
const Wrapper = styled.section`
 height: 10rem;
 background-color: ${({theme}) => theme.colors.bg};
 display: flex;
 justify-content: flex-start;
 align-items: center;
 font-size: 3.1rem;
 padding-left: 1.2rem;
 font-weight:bold;

 a {
    font-size:3.2rem;
 }
 `

export default PageNavigation;