import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comfirm',
  templateUrl: './comfirm.component.html',
  styleUrls: ['./comfirm.component.scss']
})
export class ComfirmComponent implements OnInit {

  @Output() onCurrentPageChange: EventEmitter<number> = new EventEmitter();
  
  data = {
    iconUrl: '../../../../assets/images/check_circle.svg',
    title: 'Thank you for choosing our platform',
    text: 'Just a second. You ad is currently send for review, It will be available on Used.com soon as os approved. Should we not approve the ad one of our agent will contact you.',
    type: 'secondary'
}
  constructor() { }

  ngOnInit(): void {
  }

  done(){
    this.onCurrentPageChange.emit(1);
  }
}
