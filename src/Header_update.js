import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header_update({ user,cartItems,SignOut })
 {
    const getCounts = () => {
        let count = 0;
        cartItems.forEach((item) => {
            count += item.product.Quantity;
        })
        return count;
    }
    return (
       <Container>
           <Link to="/">
                <HeaderLogo>
                    <img src={"http://pngimg.com/uploads/amazon/amazon_PNG11.png"} />
                </HeaderLogo>
           </Link>

           <HeaderOptionAddress>
                <LocationOnIcon />
                <HeaderOption>
                    <OptionLineOne>Deliver To</OptionLineOne>
                    <OptionLineTwo>India</OptionLineTwo>
                </HeaderOption>
           </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type="text">

                </HeaderSearchInput>
                <HeaderSearchIcon>
                    <SearchIcon />
                </HeaderSearchIcon>
            </HeaderSearch>

            <HeaderNavItems>
                <HeaderOption>
                    <OptionLineOne>Hello, {user.name}</OptionLineOne>
                    <OptionLineTwo>Accounts & List</OptionLineTwo>
               </HeaderOption>
               <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
               </HeaderOption>
                <HeaderOptionCart>
                    <Link to="/Cart">
                        <ShoppingCartIcon />
                        <CartCount>{getCounts()}</CartCount>
                    </Link>
                </HeaderOptionCart>
                <HeaderOption>
                    <OptionSignOut onClick={SignOut}>
                        Sign Out
                    </OptionSignOut>
               </HeaderOption>
           </HeaderNavItems>
           
       </Container>
    )
}

export default Header_update

const Container = styled.div`
    height: 60px;
    background-color: black;
    display: flex;
    align-items: center;
    position: sticky;
    color: white;
    justify-content: space-evenly;
    top: 0;
    z-index: 100;
    cursor : pointer


`
const HeaderLogo = styled.div`
    img{
        width: 100px;
        object-fit: contain;
        margin: 0 20px;
        margin-top: 18px;
    }
`
const HeaderOptionAddress = styled.div`
    padding-left: 9px;
    display: flex;
    align-items: center;
`
const OptionLineOne = styled.div`
    font-size: 10px;
    cursor : pointer

`
const OptionLineTwo = styled.div`
    font-size: 13px;
    font-weight: 800;
    cursor : pointer

`
const OptionSignOut = styled.div`
    font-size: 13px;
    font-weight: 800;
    margin-top : 5px;
    cursor : pointer
`
const HeaderSearch = styled.div`
   display: flex;
   flex-grow: 1;
   height: 40px;
   border-radius: 5px;
   overflow: hidden;
   margin-left: 4px;
   background-color: white;
   :focus-within {
       box-shadow: 0 0 0 3px #F90;
   }
   cursor : pointer

`
const HeaderSearchInput = styled.input`
    flex-grow: 1;
    border: 0;
    :focus{
        outline: none;
    }
`
const HeaderSearchIcon = styled.div`
   background-color: #febd69;
   width: 45px;
   color: black;
   display: flex;
   justify-content: center;
   align-items: center;
`
const HeaderNavItems = styled.div`
    display: flex; 
    justify-content: space-evenly;

`
const HeaderOption = styled.div`
    padding: 10px 9px 10px 9px;
  
`
const HeaderOptionCart = styled.div`
    display: flex; 
    a{
        display: flex;
        align-items: center;
        padding-right: 9px; 
        color: white;
        text-decoration: none;  
    }

`
const CartCount = styled.div`
    padding-left: 4px;
    font-weight: 700;
    color: #f08804;

`