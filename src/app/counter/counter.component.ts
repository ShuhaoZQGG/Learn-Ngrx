import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../state/counter/counter.action';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;
  constructor(private store: Store<{ count: number}>) { 
    this.count$ = store.select('count');
  }

  ngOnInit(): void {
    console.log(this.count$);
  }

  increment() {
    this.store.dispatch(increment());
    console.log(this.count$)
  }

  decrement() {
    this.store.dispatch(decrement());
    console.log(this.count$);
  }

  reset() {
    this.store.dispatch(reset());
    console.log(this.count$);
  }

}
