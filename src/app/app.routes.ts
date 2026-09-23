import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'counter', pathMatch: 'full' },
  {
    path: 'counter',
    loadComponent: () => import('./Features/Pages/counter/counter').then((m) => m.Counter),
  },
  {
    path: 'mini-ecommerce',
    loadComponent: () =>
      import('./Features/Pages/mini-ecommerce/mini-ecommerce').then((m) => m.MiniECommerce),
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./Features/Pages/mini-ecommerce/components/products/products').then(
            (m) => m.Products,
          ),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./Features/Pages/mini-ecommerce/components/cart/cart').then((m) => m.Cart),
      }
    ],
  },
];
