import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-three',
  templateUrl: './task-three.component.html',
  styleUrls: ['./task-three.component.css'],
})
export class TaskThreeComponent implements OnInit {
  displayDetails: boolean;
  buttonClicks: string[] = [];
  constructor() {}

  ngOnInit() {}

  onDisplayDetailsClick() {
    this.displayDetails = !this.displayDetails;
    this.buttonClicks.push(new Date().toLocaleTimeString());
  }

  getColor(i) {
    if (i >= 4) {
      return 'blue';
    }
  }
}
