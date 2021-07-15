import React,{ useState, useEffect } from 'react'
import styled from 'styled-components'
// import './Home.css'
import Product from './Product'
import { db } from './firebase'

function Home() {
    const [products, setProducts] = useState([])
    const getProducts = () => {
        db.collection('products').onSnapshot((snapshot) => {
            let tempProducts = []
            // console.log(snapshot);
            tempProducts = snapshot.docs.map((doc)=> (
            {
                id:doc.id,
                product:doc.data()
            }
            ));
            setProducts(tempProducts);
            // console.log(tempProducts);
        })
    }

    useEffect(()=>{
        console.log("call products");
        getProducts()
    }, [])

    // getProducts()
    // console.log(products);

    return (
        <Container>
            <Banner>

            </Banner>
            <Content>
            {
                products.map((data)=>(
                    <Product 

                        title = {data.product.Name}
                        price = {data.product.Price}
                        rating = {data.product.Rating}
                        image = {data.product.Image}
                        id = {data.id}
                    />
                ))
            }
            </Content>
        </Container>
    )
}

export default Home

const Container = styled.div `
    max-width: 1500px;
    margin: 0 auto;
`
const Banner = styled.div `
    background-image: url('https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg');
    min-height: 600px;
    background-size: cover;
    background-position: center;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
    width: 100%;
    z-index: 1;
`
const Content = styled.div `

    // background: white;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -350px;
    // z-index: 100;
    display: flex;


`