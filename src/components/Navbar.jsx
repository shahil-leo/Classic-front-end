import { Search } from '@mui/icons-material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import React from 'react'
import  styled from 'styled-components'
import {mobile} from "../Responsive"
                                                            // this is styled component we are using instead of a css file
                                                            // this is the container for the whole navbar 
const Container=styled.div`
 height:60px;
  ${mobile({height:"50px"})}
`;
                                                            // every element is inside the wrapper 
const Wrapper=styled.div`
    padding:10px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    ${mobile({padding:"10px 0px"})}
`;
                                                              // if you have any doudts about align flexbox just google it
                                                              // and also we have three side the left right and center we are aligning in this type
                                                              // left is for the language and the input search box 
                                                              // center is for the logo 
                                                              // right side is for the register and signin  and for the buy logo
const Left=styled.div`
    flex:1;
 display:flex;
 align-items:center;
`;

const Language=styled.span`
 font-size:14px;
 cursor:pointer;
 ${mobile({display:"none"})}
`;
                                                           // the container for the input box
const SearchContainer=styled.div`
 border:0.5px solid lightgray;
 display:flex;
 align-items:center;
 margin-left:25px;
 padding:5px;
`;

const Input =styled.input`
border:none;
${mobile({width:"50px"})}
`;

                                                             // this section is the center section for logo
const Center=styled.div`
flex:1;
text-align:center
`;

const Logo=styled.h1`
 font-weight:12px;
 ${mobile({fontSize:"24px"})}

`;

                                                      // this is the right section were we define the signin register and the logo of the cart
const Right=styled.div`
 flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({ flex:2 , justifyContent:"center"})}
`;

const MenuItem=styled.div` 
 font-size:14px ;
 cursor:pointer;
 margin-left:25px
 ${mobile({fontSize:"12px",marginLeft:"10px"})}
`;

/* this is the navbar html section we have to see in the webpage 
                                                                           Left: first we have to decide which section we want to include our things such as in the left side we need a search input and a Language in the left side
                                                                           Center: we have a logo only in the center
                                                                           Right :we have somany things like Register Signin and other things like cart icon etc*/

const  Navbar=()=> {
  return (
    <Container>
    <Wrapper>
    <Left>
   <Language>EN</Language>
   <SearchContainer>
     <Input placeholder='Search'/>
     <Search style={{color:'gray',fontSize:16}}/>
   </SearchContainer>
    </Left>
    <Center>
        <Logo>Classic</Logo>
    </Center>
    <Right>
    <MenuItem>REGISTER</MenuItem>
    <MenuItem>SIGNIN</MenuItem>
    <MenuItem>
    <Badge badgeContent={5} color='primary'/>
        <ShoppingCartOutlinedIcon />
    </MenuItem>
    </Right>
    </Wrapper>
    </Container>
  );
  };
  export default Navbar;