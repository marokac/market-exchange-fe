import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pannel',
  templateUrl: './pannel.component.html',
  styleUrls: ['./pannel.component.scss']
})
export class PannelComponent implements OnInit {

  @Output() OnPannelClose: EventEmitter<any> = new EventEmitter();
  @Input() headerText:string = '';
  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.OnPannelClose.next('closed');
  }

}
