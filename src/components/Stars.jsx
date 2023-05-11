import React from 'react'
import styled from 'styled-components'
import {FaStar, FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";

function Stars({star,reviews}) {

  const ratingStar = Array.from({length:5}, (elem,index) => {
       let number = index + 0.5;

       return(
        <span key={index}>
          {star >= index + 1 ? (<FaStar className='icon'/>):star >= number? (<FaStarHalfAlt className='icon'/>): (<AiOutlineStar className='icon empty-icon'/>)}
        </span>
       )
  })
  return (
    <Wrapper>
      <div className="rating-icons">
        {ratingStar}
        <p>({reviews} customer reviews)</p>
      </div>


    </Wrapper>
  )
};

const Wrapper = styled.section`
 .rating-icons {
  display: flex;
  justify-content: start;
  flex-direction:row;
  align-items: center;
    
    .icon {
      font-size: 2rem;
      color: orange;
    }
    .empty-icon {
      font-size: 2.6rem;
    }

    p {
      padding-left: 1rem;
    }

   
 }

`

export default Stars