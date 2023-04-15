import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from './Button'


function Hero({ name }) {
  return (
    <Wrapper>
      <div className='container'>
        <div className='grid grid-two-column'>
          <div className='hero-section-data'>
            <p className='intro-data'>welcome to online-world</p>
            <h1>{name}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur fuga porro provident ipsam quo at non eos consequuntur? Soluta totam tenetur esse cupiditate cum dolore iste impedit tempora at omnis?

            </p>
            <Link>
              <Button>
                shop now
              </Button>
            </Link>
          </div>
          {/* image part */}
          <div className='hero-section-image'>
            <figure>
              <img
                src="../../public/images/hero.jpg"
                className='img-style' />
            </figure>

          </div>

        </div>
        


      </div>


    </Wrapper>
  )
};
const Wrapper = styled.section`
 padding: 12rem 0;

 img {
  min-width: 10rem;
  height: 10rem;
 }
 .hero-section-data {
  p {
    margin: 2rem 0;

  }

  h1 {
    text-transform: capitalize;
    font-weight: bold;

  }

 }

  
 .hero-section-image {
  width: 100%;
  height: auto;
  display; flex;
  justify-content:center;
  align-items: center;

 }

 figure {
   position: relative;
    
   &::after {
    content:"";
    width:60%;
    height:80%;
    background-color: rgba(81, 56, 238, 0.4);
    position: absolute;
    left: 50%;
    top: -5rem;
    z-index: -1;
   }
 }

 .img-style{
  width:100%;
  height:auto;
 }

 @media (max-width: ${({theme})  =>  theme.media.mobile}) {
  .grid {
    gap: 10rem;

  }

  figure::after{
    content:"";
    width:50%;
    height:100%;
    left:0;
    right:10%;
    background-color: rgba(81, 56, 238, 0.4);
  }


 }
`

export default Hero;