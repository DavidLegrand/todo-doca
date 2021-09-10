import {
  BehaviorSubject,
  from,
  interval,
  Observable,
  Observer,
  of,
  ReplaySubject,
  Subject,
  Subscription,
} from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit, OnDestroy {
  observable: Observable<number>;
  subscription: Subscription = new Subscription();

  constructor() {
    this.observable = from([1, 2, 3, 4, 5]);
  }

  ngOnInit(): void {
    this.subscription = from([1, 2, 3, 4, 5])
      .pipe(map((v: number) => v * 3))
      .subscribe((v) => console.log(v));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
