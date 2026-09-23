import {  PLATFORM_ID } from '@angular/core';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IStore } from '../../../Core/StoreModels/IStore';
import { Observable } from 'rxjs';
import { AsyncPipe, isPlatformBrowser } from '@angular/common';
import { CartActions } from '../../../States/Mini_E_Commerce/cart/Cart.Action';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive, AsyncPipe],
  selector: 'app-mini-ecommerce',
  styleUrl: './mini-ecommerce.css',
  templateUrl: './mini-ecommerce.html',
})
export class MiniECommerce implements OnInit {
  private _PLATFORM_ID = inject(PLATFORM_ID);

  private _Store: Store<IStore> = inject(Store<IStore>);

  cartLength$!: Observable<number>;

  constructor() {
    this.cartLength$ = this._Store.select((store) => store.Cart.cartLength);
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      this._Store.dispatch(CartActions.getCartLength());
    }
  }
}
