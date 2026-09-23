import { createReducer, on } from '@ngrx/store';
import { CartActions } from './Cart.Action';
export interface ICartState {
  cart: IProduct[];
  cartLength: number;
}
const initCartValue: ICartState = {
  cart: [],
  cartLength: 0,
};

export const CartReducer = createReducer(
  initCartValue,
  on(CartActions.loadCart, (state) => {
    if (localStorage.getItem('cart')) {
      const cart: IProduct[] = JSON.parse(localStorage.getItem('cart')!);
      return { ...state, cart: cart, cartLength: cart.length };
    } else {
      return state;
    }
  }),
  on(CartActions.getCartLength, (state) => {
    {
      const cart: IProduct[] | null = JSON.parse(localStorage.getItem('cart')!);
      console.log(cart);
      if (cart) {
        return { ...state, cart: cart, cartLength: cart.length };
      } else {
        return { ...state, cartLength: state.cart.length };
      }
    }
  }),

  on(CartActions.addToCart, (state, { product }) => {
    let currentIndex = state.cart.findIndex((item) => item.id === product.id);
    let newCart: IProduct[];
    if (currentIndex > -1) {
      newCart = state.cart.map((item, index) =>
        index === currentIndex ? { ...item, cartNumber: item.cartNumber + 1 } : item,
      );
      localStorage.setItem('cart', JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart,
        cartLength: newCart.length,
      };
    } else {
      newCart = [...state.cart, { ...product, cartNumber: 1 }];
      localStorage.setItem('cart', JSON.stringify(newCart));
      return { ...state, cart: newCart, cartLength: newCart.length };
    }
  }),

  on(CartActions.removeItemFromProduct, (state, { product }) => {
    let currentIndex = state.cart.findIndex((item) => item.id === product.id);

    let newCart: IProduct[] = state.cart;

    if (state.cart[currentIndex].cartNumber > 1) {
      newCart = state.cart.map((item, index) =>
        index === currentIndex ? { ...item, cartNumber: item.cartNumber - 1 } : item,
      );

      localStorage.setItem('cart', JSON.stringify(newCart));

      return {
        ...state,
        cart: newCart,
        cartLength: newCart.length,
      };
    } else {
      newCart = state.cart.filter((item, index) => index !== currentIndex);
      localStorage.setItem('cart', JSON.stringify(newCart));

      return {
        ...state,
        cart: newCart,
        cartLength: newCart.length,
      };
    }
  }),

  on(CartActions.removeAllProducts, (state) =>{
    localStorage.removeItem('cart');
    return { ...state, cart: [], cartLength: 0 };
    
  }),
);
