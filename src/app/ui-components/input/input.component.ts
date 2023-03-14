import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {


  @Input() data:any;
  @Output() inputChange: EventEmitter<any> = new EventEmitter();

  inputValue = ''

  constructor() { }

  ngOnInit(): void {
  }
  onInputChange(event: any){
    this.inputValue = event;
  this.inputChange.next(event)
  }
 

}
