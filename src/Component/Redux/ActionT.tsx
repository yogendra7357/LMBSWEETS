import { Action } from 'redux';


export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';


export interface RemoveFromCartAction extends Action<typeof REMOVE_FROM_CART> {
  payload: number;
}

export interface IncrementQuantityAction extends Action<typeof INCREMENT_QUANTITY> {
  payload: number;
}

export interface DecrementQuantityAction extends Action<typeof DECREMENT_QUANTITY> {
  payload: number;
}


export const removeFromCart = (id: number) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const incrementQuantity = (id: number) => ({
  type: INCREMENT_QUANTITY,
  payload: id,
});

export const decrementQuantity = (id: number)=> ({
  type: DECREMENT_QUANTITY,
  payload: id,
});
