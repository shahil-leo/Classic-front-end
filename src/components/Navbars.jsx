import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircle, Search, ShoppingCart } from '@mui/icons-material';

const Components=styled.div`
    display: flex;
  box-shadow: 0 0 2px 0;
`
const Image=styled.img`
    
`
const ItemSearchRight=styled.img`
    
`
const SearchGroup=styled.img`
    
`
const Select=styled.select`
    
`
const Options=styled.option`
    
`
const Anger=styled.a`
    
`
const Group=styled.div`
    
`
const Input=styled.input`
    
`
const Detail=styled.div`
    
`
const SignIn=styled.div`
 
`
const Item=styled.a`
 
`
const Text =styled.h1`
`



// we have a left side icon and there i

function Navbars() {
  return (
    <Components>
   <MenuIcon/>
     <Image src=""></Image>
     {/* this is for the logo section */}
    {/* class=logo */}
    <Components>
     <Text> GrapCheap</Text>
    {/* <div class="text">    GrabCheap
    </div> */}
    </Components>
  <ItemSearchRight  tabindex="0">
    <SearchGroup class="search-group">
      <Select>
        <Options value="all">All</Options>
        <Options value="all">Mens</Options>
        <Options value="all">Womens</Options>
        <Options value="all">Winter</Options>
        <Options value="all">Summer</Options>
      </Select>
    <Input type="text"></Input>
    <Search/>
      search
      </SearchGroup>
  </ItemSearchRight>
  
  <Anger href="">

    <Group  >
      
       <AccountCircle/>

      <Detail>
        Account
        <SignIn >Sign In</SignIn>
      </Detail>
    </Group>
  </Anger>

  <Item href="">
    <Group >
         <ShoppingCart/>  
      <Detail class="detail">
        Cart 
      </Detail>
    </Group>
  </Item>

</Components>
   
  )
}

export default Navbars