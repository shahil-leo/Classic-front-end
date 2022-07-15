import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
 height:30px;
 background-color:teal;
 color:white;
 display:flex;
 justify-content:center;
 text-alignment:center;
 font-size:14px;
 font-weight:500;
`;

function Announcement() {
  return (
    <Container>
  We are giving 60% off for everyone
   Buy Now
    </Container>
  )
}

export default Announcement