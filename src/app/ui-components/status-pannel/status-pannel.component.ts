import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-status-pannel',
  templateUrl: './status-pannel.component.html',
  styleUrls: ['./status-pannel.component.scss']
})
export class StatusPannelComponent implements OnInit {

  @Output() OnButtonAction: EventEmitter<any> = new EventEmitter();
  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
  }

  onButtonAction(): void{
    this.OnButtonAction.emit()
  }

}
