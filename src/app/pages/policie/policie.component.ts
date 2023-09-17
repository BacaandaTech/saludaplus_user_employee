import { Component } from '@angular/core';

@Component({
  selector: 'app-policie',
  templateUrl: './policie.component.html',
  styleUrls: ['./policie.component.scss'],
})
export class PolicieComponent {
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();
 
  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
  }
}
