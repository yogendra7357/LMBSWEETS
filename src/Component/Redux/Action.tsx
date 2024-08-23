import { Item } from '../ProductCart/ProductDetails'; 
import { ADD_TO_CART } from './ActionT'; 


const addToCart = (payload: Item)=> {
  console.log("payload",payload);
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export default addToCart;
