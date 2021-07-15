import React from 'react'
import styled from 'styled-components'
import { db } from './firebase'

function CartItem({id, item}){

    //Delete Items from the cart and update the cartItems dataabse
    const DelteItmes = (e) => {
        e.preventDefault()
        db.collection('cartItems').doc(id).delete();
    }

    //Select Options for Quantity
    let Option = []
    for (let i=1; i<=Math.max(item.Quantity + 1, 20); i++)
    Option.push(<option value = {i}> Qty:{i} </option>)

    //Change Quantity using Options amd update in Firebase
    const changeQuantity = (newQuantity) => {
        console.log(newQuantity);
        db.collection('cartItems').doc(id).update({
            Quantity : parseInt(newQuantity)
        })
    }

    return(
        <Container>
            <ImageConatainer>
                <img src={item.Image} />
            </ImageConatainer>

            <CartItemInfo>

                <CartItemInfoTop>
                    <h2>{item.Name}</h2>
                </CartItemInfoTop>

                <CartItemBottom>
                    <CartItemQuantity>
                        <select 
                        value={item.Quantity}
                        onChange={(e) => changeQuantity(e.target.value)}
                        >
                            {Option}
                            {/* <option value="1">Qty : 1</option> */}
                        </select>
                        {/* {item.Quantity} */}
                    </CartItemQuantity>
                    
                    <CartItemDelete
                        onClick={(DelteItmes)}
                    >
                        Delete
                    </CartItemDelete>
                </CartItemBottom>

            </CartItemInfo>

            <CartItemPrice>${item.Price}</CartItemPrice>
        </Container>
    )
}

export default CartItem

const Container = styled.div`
    display : flex;
    padding-top : 12px;
    padding-bottom : 12px;
    border-bottom : 1px solid #DDD;
`
const ImageConatainer = styled.div`
    width : 180px;
    height : 180px;
    flex-shrink : 0;
    flex=grow : 0;
    margin-right : 16px;
    img{
        object-fit : contain;
        width : 100%;
        height : 100%;
    }
`
const CartItemInfo = styled.div`
    // margin-left : 18px;
    flex-grow : 1;
`
const CartItemInfoTop = styled.div`
    color : #007185;
    h2{
        font-size : 18px;
    }
`
const CartItemBottom = styled.div`
    display : flex;
    marging-top : 4px;
    align-item : center;
`
const CartItemQuantity = styled.div`
    select{
        border-radius : 7px;
        padding : 5px;
        margin-top : 12px;
        background-color : #F0F2F2;
        box-shadow : 0 2px 5px rgba(15,17,17,15);
        :focus {
            outline : none;
        }
        cursor : pointer;
    }
`
const CartItemDelete = styled.div`
    color : #007185;
    margin-left : 16px;
    cursor : pointer;
    margin-top : 12px;

`
const CartItemPrice = styled.div`
    font-size : 18px;
    font-weight : 700;
    margin-left : 16px;
`