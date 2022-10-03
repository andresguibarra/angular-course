import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'two-way-databinding',
  templateUrl: './two-way-databinding.component.html',
  styleUrls: ['./two-way-databinding.component.css'],
})
export class TwoWayDatabindingComponent implements OnInit {
  inputText: string;

  constructor() {}

  ngOnInit() {}

  clearInput(): void {
    this.inputText = '';
  }
}
