import { backgroundColorNames } from 'chalk';
import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import { FaCheck } from "react-icons/fa"
import { useDispatch } from 'react-redux';
import { setCartItemCount } from '../redux/features/CartItemSlice';

function AddToCart({ data }) {
    const { id, colors, stock } = data;
    const [selectedColor, setselectedColor] = useState(colors[0]);
    const [itemCount, setitemCount] = useState(1);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <div className="colors">
                <p className='color-container'>
                    Colors:
                    {
                        colors.map((currColor, index) => {
                            return <button key={index}
                                style={{ backgroundColor: currColor }}
                                className={currColor === selectedColor ? "btnstyle active" : "btnstyle"}

                                onClick={() => {
                                    setselectedColor(currColor)
                                }}>{currColor === selectedColor ? <FaCheck /> : ""}</button>
                        })
                    }
                </p>
            </div>
            {/* add to cart function */}
            <div className="add-to-cart">
             <div className="increament-decreament-feature">
                <button className='decreament-btn'
                    onClick={() => {
                        if (itemCount > 1) {
                            setitemCount(itemCount - 1)
                        }
                    }}>-</button>

                <div className="item-count">{itemCount}</div>

                <button className='increament-btn'
                    onClick={() => {

                        setitemCount(itemCount + 1)

                    }}>+</button>
             </div>
             {/* addi-to-cart-btn */}
             <button className='add-to-cart-btn'
             onClick={() => {
                 dispatch(setCartItemCount(itemCount))
             }}>Add to cart</button>
            </div>

            



        </Wrapper>
    )
};

const Wrapper = styled.section`
  
   .colors {
   
    width: 15rem;
      
     .color-container {
        display: flex;
        justify-content: space-between;
        align-items:center;
        width: 100%;

     }



     .btnstyle {
        height: 2rem;
        width: 2rem;
        border-radius:50%;
        opacity: 0.5;

     }

     .active {
        opacity: 1;
     }


   }

.add-to-cart {
  width:14rem;
  display: flex;
  flex-direction: column;

    .increament-decreament-feature {
        display: flex;
        width:100%;
        justify-content: space-between;
         .decreament-btn{
            font=size:6rem;
            font-weight: bold;
         }
         
         button {
            width:5rem;
            height:5rem;
            background-color:#fff;
            border: none;
            font-size: 3rem;
         }
    
         .item-count {
            display: flex;
            align-items: center;
            font-size: 2.4rem;
            font-weight: bold;
         }
         
    
    }

    .add-to-cart-btn {
        background-color: ${({theme}) => theme.colors.btn};
        color: #fff;
        height:4rem;
        border: none;
    }
}
 
`


export default AddToCart