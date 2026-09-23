import { error } from 'console';
import { createReducer, on, State } from '@ngrx/store';
import { ProductsAction } from './products.Action';

export interface IProductState {
  products: IProduct[];
  error: string | null;
}

const initValue: IProductState = {
  products: [],
  error: null,
};

export const ProductReducer = createReducer(
  initValue,
  on(ProductsAction.loadProductsSuccess, (state, Action) => ({
    ...state,
    products: Action.products,
    error: null,
  })),
  on(ProductsAction.loadProductsFailure, (State, Action) => ({
    ...State,
    error: Action.error,
    products: [],
  })),
);
