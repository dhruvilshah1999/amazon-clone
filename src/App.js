import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import Cart from './Cart';
import React, { useState, useEffect } from 'react'
import Header_update from './Header_update';
import styled from 'styled-components';
import { db, auth } from './firebase';
import LogIn from './LogIn';

function App() {

  //User LogIn Handling Function
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  //Cart Items Handling Function
  const [cartItems, setCartItems] = useState([])
  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      let tempCartItems = []
      tempCartItems = snapshot.docs.map((doc) => (
        {
          id: doc.id,
          product: doc.data()
        }
      ));
      setCartItems(tempCartItems);
    })
  }

  useEffect(() => {
    console.log("call Cart Items");
    getCartItems()
  }, [])

  //SignOut Handling Function
  const SignOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user')
      setUser(null)
    }) 
  }

  console.log("User : ", user);

  return (
    <Router>
      {
        !user ? (
          <LogIn setUser={setUser} />
          ) : (
          // { <div className="App"> }
          < Container >

            {/* Header */}
            < Header_update
              SignOut = {SignOut} 
              user={user} 
              cartItems={cartItems} />

            <Switch>
              
              <Route path="/Cart">
                {/* Cart */}
                <Cart cartItems={cartItems} />
              </Route>

              <Route path="/">
                {/* Home */}
                <Home />
              </Route>

            </Switch>

          </Container>
          // { </div> }
        )
      }
    </Router >
  );
}

export default App;

const Container = styled.div`
  background-color: #eaeded;
`