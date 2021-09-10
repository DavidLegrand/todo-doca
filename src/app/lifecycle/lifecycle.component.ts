import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  Input,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    DoCheck
{
  _count!: number;

  get count(): number {
    return this._count;
  }

  @Input()
  set count(val: number) {
    console.log('count setter called with value : ' + val);
    this._count = val;
  }

  constructor() {
    console.log('Constructor called, count value is : ' + this.count);
  }

  ngOnInit(): void {
    console.log('ngOnInit called, count value is : ' + this.count);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called with changes :', changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }
}
