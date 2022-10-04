import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-task-four',
  templateUrl: './task-four.component.html'
})
export class TaskFourComponent implements OnInit {
  oddNumbers: number[] = []
  evenNumbers: number[] = []

  constructor() {}

  ngOnInit() {}
  
  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber)
    } else {
      this.oddNumbers.push(firedNumber)
    }
  }
}
