import { ICounterState } from '../../States/Counter/Counter.reducer';
import { ICartState } from '../../States/Mini_E_Commerce/cart/Cart.Reducer';
import { IProductState } from '../../States/Mini_E_Commerce/products/Product.Reducer';

export interface IStore {
  counter: ICounterState;
  Products:IProductState,
  Cart:ICartState
}
