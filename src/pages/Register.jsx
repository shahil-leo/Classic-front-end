import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
 width: 100vw;
 height:100vh;
 background:linear-gradient(rgba(255,255,255,0.5),
              rgba(255,2555,255,0.5)),
               url("https://images.unsplash.com/photo-1483354483454-4cd359948304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZ2lufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60") center;
    display          : flex ;
    align-items: center;
    justify-content: center;
` 
   
const Wrapper=styled.div`
 width: 40%;
 padding: 20px;
 background-color: white;
` 

const Title=styled.h1`

 font-size: 24px;
 font-weight: 300;
`

const Form=styled.div`
 display: flex;
 flex-wrap:wrap ;
`
const Input=styled.input`
flex: 1;
min-width: 40%;
margin:20px 10px 0px 0px;
padding: 10px;
`
const Agreement=styled.span`
 font-size: 12px;
 margin:20px 0px;
`
const Button=styled.div`
width:40%;
border: none;
padding: 15px 20px; 
background-color: teal;
color:white;
cursor: pointer;
`

export const Register = () => {
  return (
    <Container>
     <Wrapper>
        <Title> CREATE AN ACCOUNT</Title>
       <Form>
         <Input placeholder="name"/>
         <Input placeholder="last name"/>
         <Input placeholder="username"/>
         <Input placeholder="email"/>
         <Input placeholder="password"/>
         <Input placeholder="confirm password"/>
       <Agreement>
        By creating an account, I consent to the processing of my personal 
        data in accordance with the <b>PRIVACY POLICY</b>
       </Agreement> 
       <Button>CREATE</Button>
       </Form>
       
     </Wrapper>

    </Container>
  )
}
