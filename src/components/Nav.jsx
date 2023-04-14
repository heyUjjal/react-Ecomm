import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import {FiShoppingCart} from "react-icons/fi"
import {CgMenu, CgClose} from "react-icons/cg"

function Nav() {
  const Nav = styled.nav`
  .navbar-list{
    display:flex;
    gap:4.8rem;
    align-items:center;
    
       
    .navbar-link{
      &:link,
      &:visited{
        display:inline-block;
        font-size:1.5rem;
        font-weight:600;
        text-transform:uppercase;
        color: ${({theme}) => theme.colors.black};
        transition:color 0.3s linear;
      }
      
      &:hover,
      &.active{
        color: ${({theme}) => theme.colors.helper}
      }
     
    }

    

     

  
  }
  .cart-trolley--link{
    position:relative;
   
    
    .cart-trolley{
      
      height:2.4rem;
      width:2.4rem;
      font-size:2rem;
    }

    .cart-total-item{
         width:2rem;
         height:2rem;
         position:absolute;
         top: -20%;
         left: 70%;
         display: grid;
         place-items:center;
         background-color: ${({theme}) => theme.colors.helper};
         border-radius: 50%;
         color: rgb(255, 255, 255);
      
    
    }
  }

  .navbar{
    position:relative;
    
    
    .mobile-navbar-btn{
      display:none;
      background-color:transparent;
      cursor:pointer;
      border:none;
      position:absolute;
      top:0%;
      right:10%;
      
  
         
  
      .mobile-navbar-icon[name="closed-outline"]{
        display:none;
        position:absolute;
        top:0;
        right:0;
        
       }
     
       .close-outline{
         display:none;
       }
     
       
    }

    @media (max-width: ${({theme}) => theme.media.mobile}) {
      
      .mobile-navbar-btn{
        display:inline-block;

       
        z-index:9999;
        
  
        .mobile-navbar-icon{
          font-size:4.2rem;
          color: ${({theme}) => theme.colors.btn};
          display:inline-block;
          
        }
        .mobile-navbar-icon[name="closed-outline"]{
          display:none;
         }
       
         .close-outline{
           display:none;
         }
        
      }
     
      

      .navbar-list{
        height:100vh;
        width:100vw;
        display:flex;
        background-color:#fff;
        justfy-content:center;
        align-items:center;
        flex-direction:column;
        position:absolute;
       
        visibility:hidden;
        
        z-index:999;



      }

      
      .active {
          visibility:visible;
          opacity:1;
          z-index:999;
          transform-origin:right;
          transform:translateX(0);
          transition:all 1s linear;
           
           .navbar-link{
            font-size:4.2rem;
           }
         
        }
    
      .active .mobile-navbar-icon{
          display:none;
          font-size:4.2rem;
          position:absolute;
          top:30%;
          right:10%;
          color:${({theme}) => theme.colors.btn};
          z-index:9999;
        }
      .active .close-outline{
          display:inline-block;
    
        }
      
      
    }
  }

  

  

  

  


    
  










  
  
  `
  return (
    <Nav>
      <div className=' navbar '>
       <ul className=' active navbar-list'>
        <li>
          <NavLink to="/" className="navbar-link">
            Home

          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="navbar-link">
            about

          </NavLink>
        </li><li>
          <NavLink to="/products" className="navbar-link">
            product

          </NavLink>
        </li><li>
          <NavLink to="/contact" className="navbar-link">
            contact

          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="navbar-link cart-trolley--link">
            <FiShoppingCart className= "cart-trolley"/>
            <span className="cart-total-item">10</span>
          </NavLink>
        </li>

       </ul>
       {/* mobile navbar special code */}
       <div className="mobile-navbar-btn">
          <CgMenu className=" mobile-navbar-icon"/>
          <CgClose name="close-outline"className=" mobile-navbar-icon close-outline"/>
       </div>

      </div>



    </Nav>
  )
}

export default Nav