import React from 'react'
import styled from 'styled-components'
import { db } from './firebase'

function Product({title,price,rating,image,id}) {

    const addToCart = () => {
        const cartItem = db.collection("cartItems").doc(id);
        cartItem.get().then((doc) => {
            console.log(doc.exists); 
            if(doc.exists){
                cartItem.update({
                    Quantity : doc.data().Quantity + 1
                })
            } else {
                 db.collection("cartItems").doc(id).set({
                    Name : title,
                    Price : price,
                    Image : image,
                    Quantity : 1
                 })
            }
        })
    }
    
    return (
        <Container>
                <Title>
                    {title}
                </Title>
                <Price>
                    ${price}
                </Price>
                <Rating>
                    {
                        Array(rating).fill().map(rating=>
                             <p>⭐</p>)
                    }
                    {/* &#11088;&#11088;&#11088;&#11088;&#11088; */}
                </Rating>
                <Image src={image} />
                <AddToCartDiv>
                    <AddToCart onClick={addToCart}>
                        Add to Cart
                    </AddToCart>
                </AddToCartDiv>
        </Container>


    )
}

export default Product

const Container = styled.div`
    background-color: white;
    z-index: 100;
    z-index: 1;
    flex: 1;
    // width: 300px;
    max-height: 400px;
    margin: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;

    @media (max-width: 850px) {
        width: calc(100% / 2 - 2rem);
    }
    
    @media (max-width: 550px) {
        margin: 0;
        width: calc(100% - 3rem);
        margin: 0.75rem 1.5rem;
    }
`

const Two = styled.div`
    background-color: white;
    z-index: 100;
    z-index: 1;
    flex: 1;
    // width: 300px;
    max-height: 400px;
    margin: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
`

const Title = styled.span`
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
const Price = styled.span`
    font-weight:500;
    margin-top: 5px;

`
const Rating = styled.div`
    display: flex;
    margin-top: 5px;

`
const Image = styled.img`
    max-height: 200px;
    margin-top: 5px;
    object-fit: contain; 

`
const AddToCartDiv = styled.div`
    // display: flex;
    // align-items: center;
    // justify-content: center;
    display: grid;
    place-items: center;
    margin-top: 15px;
    
`

const AddToCart = styled.button`
    margin-top: 15px;
    width: 200px;
    background-color: #f0c14b; 
    border: 2px solid #a88734;
    border-radius: 5px;
    height: 30px;
    cursor : pointer;
    
`
