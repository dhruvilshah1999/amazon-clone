import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format'

function CartTotal({getTotalPrice, getCounts}) {
    return (
        <Container>
            <SubTotal>Sub Total : ({getCounts()} Items) : 
                <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </SubTotal>
            <CheckOutButton>Proceed To Checkout</CheckOutButton>
        </Container>
    )
}

export default CartTotal


const Container = styled.div`
    height: 200px;
    flex: 0.3;
    padding: 20px;
    background-color: white;
`
const SubTotal = styled.h2`
    margin-bottom : 16px;
`
const CheckOutButton = styled.button`
    margin-bottom : 12px;
    background-color : #f0c14b;
    width : 100%;
    padding : 4px 8px;
    border : 2px solid #a88734;
    border-radius : 4px;
    :focus {
        outline : none;
    }
    cursor : pointer;
    font-size : 16px;
    :hover{
        background : #ddb347;
    }
`