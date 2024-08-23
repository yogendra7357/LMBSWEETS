import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './Component/Redux/Store';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import ProductDetails from './Component/ProductCart/ProductDetails';
import Cart from './Component/Cart/Cart';

interface props {

}
interface state {

}

export default class App extends PureComponent<props,state> {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path='/cart'  element={<Cart/>}/>
          </Routes>
          <Footer />
        </Router>
      </Provider>
    );
  }
}
