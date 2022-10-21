import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core'
import {
  buffer,
  debounce,
  debounceTime,
  delay,
  from,
  fromEvent,
  iif,
  interval,
  of,
  Subscription,
  switchMap,
  zip
} from 'rxjs'

@Component({
  selector: 'app-task-six',
  templateUrl: './task-six.component.html'
})
export class TaskSixComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('input', { static: true }) input: ElementRef
  @ViewChild('btn', { static: true }) btn: ElementRef
  searchSubscription: Subscription
  debouncedTime: number = 0
  toggled: boolean = false;
  items: string[]
  constructor() {}

  ngAfterViewInit(): void {
    this.inputSearch()
  }

  ngOnInit(): void {
    iif(
      () => this.toggled,
      interval(1000).pipe(buffer(fromEvent(this.btn.nativeElement, 'click'))),
      interval(1000).pipe(debounce(() => interval(500)))
    ).subscribe(() => {
      this.debouncedTime++
    })

    const sourceOne = of('Hello')
    const sourceTwo = of('World!')
    const sourceThree = of('Goodbye')
    const sourceFour = of('World!')
    const example = zip(
      sourceOne,
      sourceTwo.pipe(delay(1000)),
      sourceThree.pipe(delay(2000)),
      sourceFour.pipe(delay(3000))
    )
    const subscribe = example.subscribe((val) => console.log(val))
  }

  toggle() {
    this.toggled = !this.toggled
  }

  inputSearch(): void {
    this.searchSubscription = fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        switchMap((keyboardEvent: any) => {
          return iif(
            () => this.toggled,
            interval(1000).pipe(buffer(fromEvent(this.btn.nativeElement, 'click'))),
            interval(1000).pipe(debounce(() => interval(500)))
          ).pipe(switchMap(() => from(this.fetchItems(keyboardEvent.target.value))))
        })
      )
      .subscribe((items) => {
        this.items = items
      })
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe()
  }

  async fetchItems(search: string): Promise<any[]> {
    return iif(() => !!search, of(['item 1', 'item 2', 'item 3']), of([])).toPromise();
  }
}
