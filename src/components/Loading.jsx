import React from 'react'
import styled from 'styled-components'

function Loading() {
  return (
   <Wrapper>
    Loading...
   </Wrapper>
  )
}
const Wrapper = styled.section`

display:flex;
align-items: center;
justify-content:center;
background-color:#fff;
height: 50vh;
font-size:3.2rem;
font-weight:bold;
`

export default Loading