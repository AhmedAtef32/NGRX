import { createReducer, on } from "@ngrx/store";
import { Decrement, Increment, Reset } from "./Counter.Action";
export interface ICounterState {
  count: number;
}
const initialState: ICounterState = {
  count: 0
};
 export const counterReducer = createReducer(initialState,
  on(Increment ,(state)=> ({ ...state, count: state.count + 1 })),
  on(Decrement ,(state)=> ({ ...state, count: state.count - 1 })),
  on(Reset ,(state)=> ({ ...state, count: 0 }))
 )
