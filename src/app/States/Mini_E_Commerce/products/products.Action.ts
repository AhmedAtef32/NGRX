import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";

export const ProductsAction =  createActionGroup({
  source: 'Products',
  events:{
    'LoadProducts': emptyProps(),
    'LoadProductsSuccess': props<{products:IProduct[]}>(),
    'LoadProductsFailure': props<{error:string}>()
  }
})
