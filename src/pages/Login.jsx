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
    background-size: cover;
` 
   
const Wrapper=styled.div`
 width: 25%;
 padding: 20px;
 background-color: white;
` 

const Title=styled.h1`

 font-size: 24px;
 font-weight: 300;
`

const Form=styled.div`
 display: flex;
 flex-direction:column ;
`
const Input=styled.input`
flex: 1;
min-width: 40%;
margin:10px 0%;
padding: 10px;
`

const Button=styled.div`
width:40%;
border: none;
padding: 15px 20px; 
background-color: teal;
color:white;
cursor: pointer;
margin-bottom: 10px;
`
const Link=styled.a`
  margin:5px 0px;
  font-size: 12px;  
  text-decoration: underline;
  cursor: pointer;
`

export const Login = () => {
  return (
    
    <Container>
    <Wrapper>
       <Title> SIGN IN</Title>
      <Form>
        <Input placeholder="Username"/>
        <Input placeholder="password"/>
      <Button>LOGIN</Button>

      <Link>Forgotten password ?</Link>
      
      <Link>CREATE A NEW ACCCOUNT</Link>
      </Form>
      
    </Wrapper>

   </Container>

  )
}
