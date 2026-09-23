import { Component, inject } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from '../../../../../Core/StoreModels/IStore';
import { AsyncPipe } from '@angular/common';
import { ProductsAction } from '../../../../../States/Mini_E_Commerce/products/products.Action';
import { CartActions } from '../../../../../States/Mini_E_Commerce/cart/Cart.Action';

@Component({
  imports: [AsyncPipe],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {
  private _Store:Store<IStore> = inject(Store<IStore>);

  products$:Observable<IProduct[]> =this._Store.select((store)=> store.Products.products)
  constructor(){
    this._Store.dispatch(ProductsAction.loadProducts());
  }


  AddToCart(Product:IProduct){
    this._Store.dispatch(CartActions.addToCart({product:Product}))
  }
}
