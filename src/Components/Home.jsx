import React from 'react'
import Product from './Products';
import Footer from './Footer';
import '../App.css'

const Home=() =>{
  return(
   <>
    <div id="home">
         <img src="/Assessts/img.jpg" alt="img" />
         <div id="container">
            <h1>festive season</h1>
            <h3>hurry up!Grab the trend now.</h3>
         </div>
        
    </div>
    <Product/>
    <Footer />
   </>
  )
}
export default Home;