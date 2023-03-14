import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {

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
