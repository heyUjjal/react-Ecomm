import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import Product from './Product';

function FeatureProduct() {
    const {products,featuredProducts} = useSelector((state) => state.products);

    
  return (
   <Wrapper>
     <div className="container">
         <div className="intro-data">
           Check Now!

         </div>
         <div className="common-heading">
           Our Feature Service
         </div>
         <div className="grid-three-column  grid">
           {
            featuredProducts?.map((ele) =>{
              return <Product key={ele.id}
               {...ele}/>
            })
           }
         </div>
    </div>   


     

   </Wrapper>
  )
}

  const Wrapper = styled.section`
   padding: 9rem 0;
   background-color: ${({theme}) => theme.colors.bg};
    
    .container {
      max-width: 120rem;
    } 
    
      
  
   .card{
     background-color: #fff;
     border-radius: 1rem;
     width:35rem;
     height: 30rem;
     display:flex;
     flex-direction: column;

     .card-data{
       padding: 0 2rem;
       margin-top: 0;
     }

     .card-data-flex{
        margin: 2rem 0;
        margin-top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

     h3 {
        color: ${({theme}) => theme.colors.text};
        text-transform: capitalize;
      }

     .card-data--price {
       color: ${({theme}) => theme.colors.helper};
      
      }

      figure {
        width: auto;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow:hidden;
        margin:2rem;
        transition: all 0.5s linear;
          &::after {
            content:"";
            position:absolute;
            top: 0:
            left: 0;
            width: 0%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            transition: all 0.2s linear;
            cursor: pointer;
          }
          &:hover::after{
            width:100%;
          }
    
          .img {
            max-width:90%;
            margin-top:1.5rem;
            height: 10rem;
            transition: all 0.2s linear;
          }
    
          .caption {
            position: absolute;
            top: 15%;
            right: 10%;
            background-color: ${({theme}) => theme.colors.bg};
            color: ${({theme}) => theme.colors.helper};
            padding: 0.8rem 2rem;
            font-size: 1.2rem;
            border-radius: 2rem;
    
          }
      }

     

    }
     

      
      


    

    


    
  


`

export default FeatureProduct