import { Increment } from './../../../../../States/Counter/Counter.Action';
import { Component, inject, OnInit, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../../Core/StoreModels/IStore';
import { map, Observable } from 'rxjs';
import { AsyncPipe, isPlatformBrowser } from '@angular/common';
import { CartActions } from '../../../../../States/Mini_E_Commerce/cart/Cart.Action';

@Component({
  imports: [AsyncPipe],
  selector: 'app-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
})
export class Cart implements OnInit {
  private _store: Store<IStore> = inject(Store<IStore>);
  private _platform_id = inject(PLATFORM_ID);
  CartItems$: Observable<IProduct[]> = this._store.select((store) => store.Cart.cart);
  
  AllPrice$: Observable<number> = this.CartItems$.pipe(
    map((items) => items.reduce((total, item) => total + item.price * item.cartNumber, 0)),
  );

  ngOnInit(): void {
    if (isPlatformBrowser(this._platform_id)) {
      this._store.dispatch(CartActions.loadCart());
    }
  }

  Increment(product: IProduct) {
    this._store.dispatch(CartActions.addToCart({ product }));
  }

  Decrement(product: IProduct) {
    this._store.dispatch(CartActions.removeItemFromProduct({ product }));
  }

  DeleteAllCartItem() {
    this._store.dispatch(CartActions.removeAllProducts());
  }
}
