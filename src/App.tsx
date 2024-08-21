import React, { PureComponent } from 'react'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'
import Cart from './Component/Cart/Cart'


export default class App extends PureComponent {
  render() {
    return (
      <div>
       <Header/>
       <Cart/>
       {/* <Home/> */}

       {/* <Footer/> */}
        
      </div>
    )
  }
}
