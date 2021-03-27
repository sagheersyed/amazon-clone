import './App.css';
import Cart from './Component/Cart';
import Header from './Component/Header';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import Home from './Component/Home';
import db from './Firebase'
import { useState } from 'react';
import { useEffect } from 'react';
function App() {

  const [cart , setCart] = useState([]);

  const firebaseConnection = () =>{
    db.collection('Cart').onSnapshot((snapshot)=>{
      setCart(snapshot.docs.map((doc)=>{
        return {id: doc.id , name:doc.data().name , price:doc.data().price , rating: doc.data().rating , image: doc.data().image}
      }))
    })
  }
  // add new cart
  const newCart = ()=>{
    const cartName = prompt("enter cart name")
    const cartPrice = prompt("enter cart price in doller")
    const cartRating = prompt("enter the product rating")
    const cartImage = prompt("enter url")
    db.collection('Cart').add({
      name:cartName,
      price:cartPrice,
      rating:cartRating,
      image:cartImage
    })
  }

  useEffect(()=>{
    firebaseConnection()
  },[])

  console.log(cart);

  return (
    <div className="App">
      <Router>
      <Header addCart = {newCart} />
      <Switch>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/">
          <Home cart = {cart}/>
        </Route>
      </Switch>
      </Router>
    </div>
  )
}

export default App;
