import { Facebook, Instagram, Telegram } from '@mui/icons-material';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive';

const Container=styled.div`
 display:flex;
 margin:20px;
 ${mobile({flexDirection:"column"})}

`;
const Left=styled.div`
 flex:1;
 display:flex;
 flex-direction:column;
 padding:20px;
`;

const Logo=styled.h1 `
 

`;

const Desc=styled.p`
margin:20px opx;

`;
const SocialContainer=styled.div`
 display:flex;

`;
const SocialIcon=styled.div`
 width:40px;
 height:40px;
 border-radius:50%;
 color:white;
 background-color: #${props=>props.color};
 display:flex;
 align-items:center;
 justify-content:center;
 margin-right:20px;

`;

const Center=styled.div`
 flex:1;
 padding:20px;
 ${mobile({display:"none"})}
`;
const Right=styled.div`
 flex:1;
padding:20px;
${mobile({backgroundColor:"#eeeee"})}
`;

const ContactItem=styled.div`
 margin-bottom:20px;
 display:flex;
 align-items:center;
`;

const  Payment=styled.div`

`;
const Title=styled.h3`
margin-bottom:30px;
`;

const List=styled.ul`
 margin:0;
 padding:0;
 list-style:none;
 display:flex;
 flex-wrap:wrap;
`;
const ListItem=styled.li`
 width:50%;
 margin-bottom:10px;
`;


const Footer=()=> {
  return (
    <Container>
        <Left>
            <Logo>CLASSIC</Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus at similique saepe, soluta delectus, cum sunt laudantium ullam magni eaque vero ipsam neque deserunt ea perferendis nam molestias quas excepturi.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3b5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405f">
                <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE" >
                    <Telegram/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
         <ListItem>Home</ListItem>
         <ListItem>Cart</ListItem>
         <ListItem>Man fashion</ListItem>
         <ListItem>Accessories</ListItem>
         <ListItem>My Account</ListItem>
         <ListItem>Order Tracking</ListItem>
         <ListItem>Wishlist</ListItem>
         <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
           <Title>Contact</Title> 
           <ContactItem> 
           <AddLocationAltIcon style={{marginRight:'10px'}}/>
            Kerala 673028
           </ContactItem>
           <ContactItem >
           <LocalPhoneIcon  style={{marginRight:'10px'}}/>
            +919846786928
           </ContactItem>
           <ContactItem>
           <EmailIcon  style={{marginRight:'10px'}}/>
           contact@shahilkv.com
           </ContactItem>
           <Payment  src=""/>
        </Right>
    </Container>
  )
}

export default Footer