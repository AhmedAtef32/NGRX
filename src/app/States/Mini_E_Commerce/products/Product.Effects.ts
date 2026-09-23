import { inject, Service } from "@angular/core";
import { MiniEcommerce } from "../../../Features/Services/mini-ecommerce/mini-ecommerce";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductsAction } from "./products.Action";
import { catchError, map, of, switchMap, tap } from "rxjs";

@Service()
export class ProductEffects {
  private _miniEcommerce = inject(MiniEcommerce);

  private Actions$ = inject(Actions)

  loadProducts$ = createEffect(()=>{
    return this.Actions$.pipe(
      ofType(ProductsAction.loadProducts),
      switchMap(()=>  this._miniEcommerce.GetAllProducts().pipe(
        map((products)=>{
            const productsMap = products.map((product)=> ({...product, cartNumber:0}))
             return ProductsAction.loadProductsSuccess({products:productsMap})
          }),
        tap((products)=> console.log(products))
      )),
      catchError((errors)=>of(ProductsAction.loadProductsFailure({error : 'Faliure'})))
    )
  })
}
