import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() options: {name: string, value: string}[] = []

  @Input() data:any;

  @Output() inputChange: EventEmitter<any> = new EventEmitter();

  inputValue = ''
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.options)
  }

  onInputChange(event: any){
    this.inputValue = event;
    this.inputChange.next(event)
    }

}


