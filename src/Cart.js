// import { styled } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import CartTotal from './CartTotal'
import CartItems from './CartItems'


function Cart({ cartItems }) {

    const getTotalPrice = () => {
        let total = 0;
        cartItems.forEach((items) => {
            total += (items.product.Price * items.product.Quantity);
        })
        return total;
    }

    const getCounts = () => {
        let count = 0;
        cartItems.forEach((item) => {
            count += item.product.Quantity;
        })
        return count;
    }
    
    return (
        <Container>
            {/* Cart */}
            <CartItems cartItems={cartItems}/>
            <CartTotal getCounts = {getCounts} getTotalPrice = {getTotalPrice}/>
        </Container>
    )
}

export default Cart

const Container = styled.div`
    display : flex;
    padding : 14px 18px 0px 18px ;
    align-items : flex-start;
`
// const CartItems = styled.div`

// `
// const CartTotal = styled.div`

// `