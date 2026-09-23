import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './States/Counter/Counter.reducer';
import { provideEffects } from '@ngrx/effects';
import { ProductReducer } from './States/Mini_E_Commerce/products/Product.Reducer';
import { ProductEffects } from './States/Mini_E_Commerce/products/Product.Effects';
import { CartReducer } from './States/Mini_E_Commerce/cart/Cart.Reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(),
    provideStore({ counter: counterReducer , Products:ProductReducer, Cart:CartReducer}),
    provideEffects([ProductEffects]),
  ],
};
