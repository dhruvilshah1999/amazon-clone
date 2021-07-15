import React from 'react'
import styled from 'styled-components'
import {auth , provider} from './firebase'

function LogIn({ setUser }) {

    const SignIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            let user = result.user;
            let newUser = {
                name : user.displayName,
                email : user.email,
                photo : user.photoURL
            }
            localStorage.setItem('user', JSON.stringify(newUser))
            setUser(newUser);
            console.log(user);
        }).catch((error) => {
            alert(error.message);
        })
    }

    return (
        <Container>
            <Content>
                <AmazonLogo src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG'/>
                <h2>Sign Into Amazon</h2>
                <LoginButton onClick={SignIn}>
                    LogIn with Google
                </LoginButton>
            </Content>
        </Container>
    )
}

export default LogIn

const Container = styled.div`
    height : 100vh;
    width : 100%;  
    background-color : #f8f8f8;
    display : grid;
    place-items : center;
`
const Content = styled.div`
    padding : 100px;
    background-color : white;
    border-radius : 5px;
    box-shadow : 0 1px 3px gray;
    text-align : center;
    
`
const AmazonLogo = styled.img`
    height : 100px;
    margin-bottom : 40px;
`
const LoginButton = styled.button`
    margin-top: 50px;
    width: 200px;
    background-color: #f0c14b; 
    border: 2px solid #a88734;
    border-radius: 5px;
    height: 40px;
    fonts-size : 16px;
    padding : 4px 8px 4px 8px;
    cursor : pointer;
`
