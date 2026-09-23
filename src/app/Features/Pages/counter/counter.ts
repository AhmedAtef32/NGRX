import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../../Core/StoreModels/IStore';
import { AsyncPipe } from '@angular/common';
import { Decrement, Increment, Reset } from '../../../States/Counter/Counter.Action';

@Component({
  imports: [AsyncPipe],
  selector: 'app-counter',
  styleUrl: './counter.css',
  templateUrl: './counter.html',
})
export class Counter {
  store = inject(Store<IStore>);
  counter$ = this.store.select((store) => store.counter.count);

  increment() {
    this.store.dispatch(Increment());
  }
  Decrement() {
    this.store.dispatch(Decrement());
  }

  reset() {
    this.store.dispatch(Reset());
  }
}
