import {createActionGroup, emptyProps, props} from '@ngrx/store'


export const CartActions = createActionGroup({
  source:"cart",
   events:{
    "LoadCart":emptyProps(),
    "GetCartLength":emptyProps(),
    "AddToCart": props<{product:IProduct}>(),
    "removeItemFromProduct":props<{product:IProduct}>(),
    "removeAllProducts":emptyProps()
   }
})
